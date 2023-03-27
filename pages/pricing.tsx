import React from "react";
import Head from 'next/head';
import Header from "../components/Header";
import Link from 'next/link';

const Contact: React.FC = () => {
    return ( 
        

        <div className="bg-eggshell-white min-h-screen">
        <Header />

        <Head>
            <title>Canada Distribution Centres - Pricing</title>
        </Head>
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 mt-8 text-center text-grey-blue">Pricing</h1>
                <div className="text-lg leading-relaxed space-y-6 max-w-3xl mx-auto p-8 bg-gray-200 rounded-lg">
                    <div className="text-center">
                        <h3 className="text-red-900 mb-2 text-xl font-bold text-center italic">Standard pricing</h3>
                        <p>
                            <span className="font-bold">4' x 3.5' x 6' </span> Sized Skid: $15 per month <span className="text-red-600">(previously $18)</span>
                            <br/>
                            <span className="font-bold">$5</span> Per Skid in <span className="text-red-600 underline">Lowest cost!</span>
                            <br/>
                            <span className="font-bold">$5</span> Per Skid out <span className="text-red-600 underline">Lowest cost!</span>
                            
                        </p>
                        <h3 className="text-red-900 mt-6 mb-2 text-xl font-bold text-center italic">Space Available</h3>
                        <p>
                            <span className="font-bold">$1</span> Per square foot/month + 35¢ utility & 30¢ TMI fees
                            <br/>  
                            If you have any further questions, please contact us<Link href="/contact" passHref className="text-blue-500 p-2 hover:text-blue-700">here!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;