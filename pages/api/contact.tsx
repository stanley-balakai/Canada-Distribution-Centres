import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import sgMail from '@sendgrid/mail';
import fetch from 'node-fetch';
import type { Response } from 'node-fetch';

interface RecaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes'?: string[];
}

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, recaptchaToken } = req.body;

  console.log('recaptchaToken:', recaptchaToken);

  // Verify the reCAPTCHA token
  const response = (await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`, {
    method: 'POST',
  })) as Response;

  const recaptchaData = await response.json() as RecaptchaResponse;

  console.log('recaptchaResponse:', response);
  console.log('recaptchaData:', recaptchaData);

  if (!recaptchaData.success) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed.' });
  }

  try {
    // Connect to the MySQL database
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    // Insert the submission into the database
    const [result] = await connection.execute('INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)', [name, email, message]);
    await connection.end();

    // Send an email notification
    if (process.env.EMAIL_RECIPIENT && process.env.EMAIL_SENDER && process.env.SENDGRID_API_KEY) {
      const emailData = {
        to: process.env.EMAIL_RECIPIENT,
        from: process.env.EMAIL_SENDER,
        subject: 'New Inquiry',
        text: `You have received a new inquiry from ${name} (${email}).\n\nMessage:\n${message}`,
      };

      await sgMail.send(emailData);
    } else {
      console.error('Environment variables EMAIL_RECIPIENT, EMAIL_SENDER, or SENDGRID_API_KEY are not set.');
    }

    return res.status(200).json({ message: 'Inquiry submitted successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to submit inquiry. Please try again.' });
  }
}
