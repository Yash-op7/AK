import Image from 'next/image';
import imgUrl from '../Assets/test.png'; // Adjust the path as necessary
import React from 'react';

const CardTemplate = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-full h-48 object-cover"
        src={imgUrl}
        alt="Card"
        width={500} // Set a width
        height={300} // Set a height
        layout="responsive" // Optional: helps maintain aspect ratio
      />

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">Card Title</h2>
        <p className="text-gray-700 mt-2">
          This is a sample description of the card using Tailwind CSS in React.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardTemplate;
