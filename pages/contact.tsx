import React, { useState } from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import { useEffect } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && 'grecaptcha' in window) {
      (window as any).grecaptcha.ready(async () => {
        const token = await (window as any).grecaptcha.execute('6Lc8zjwlAAAAAI5c0xOO4jBhvBb89MQjTknlUNYt', { action: 'contact_form' });
        setRecaptchaToken(token);
      });
    }
  }, []);
  
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('Sending...');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, recaptchaToken }),
    });
    

    const data = await response.json();

    if (response.status === 200) {
      setStatus('Inquiry submitted successfully.');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <div className="bg-eggshell-white min-h-screen">
      <Header />
      <Head>
        <title>Canada Distribution Centres - Contact Us</title>
        <script src={`https://www.google.com/recaptcha/api.js?render=6Lc8zjwlAAAAAI5c0xOO4jBhvBb89MQjTknlUNYt`}></script>
      </Head>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 mt-8 text-center text-grey-blue">Contact Us</h1>
        <div className="text-lg leading-relaxed space-y-6 max-w-3xl mx-auto p-8 bg-gray-200 rounded-lg">
          <p className="text-center">
            <span className="font-bold">Canada Distribution Centres</span>
            <br/>
            <span className="font-bold">Call Us At:</span> (613) 967-2900
            <br/>
            <span className="font-bold">Email Us At:</span> info@canadadistributioncentres.com
            <br/>
            <span className="font-bold">Located At:</span> 665 Dundas St E, Belleville, ON K8N 5V9

          </p>
        </div>
        <br/>
        <div className="text-lg leading-relaxed space-y-6 max-w-3xl mx-auto p-8 bg-gray-200 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h2 className="text-red-900 mb-2 text-xl font-bold text-center italic">Have Any Questions? Ask Us Here!</h2>
            <label htmlFor="name" className="block text-lg mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            disabled={!recaptchaToken}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded"
          >
          Submit
        </button>
        </form>
        {status && <p className="mt-4 text-lg">{status}</p>}

        </div>
        
      </div>
    </div>
  );
};

export default Contact;
