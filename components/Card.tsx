import React from 'react';


interface CardProps {
  title: string;
  description: string;
  imageURL: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageURL }) => {
  return (
    <div
    className="bg-gray-200 shadow-md p-4 rounded-lg w-85 mx-auto my-4 transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
  >
    <img src={imageURL} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
    <h2 className="text-xl font-bold mb-2 text-grey-blue">{title}</h2>
    <div className="text-black h-36 text-md overflow-hidden">{description}</div>

    </div>
  );
};

export default Card;


