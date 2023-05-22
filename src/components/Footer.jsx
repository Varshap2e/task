import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4">
      <div className='flex flex-col items-center justify-center'>
        <h2>Stay in the loop</h2>
        <br />
        <p>
        Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.
        </p>
        <br />
        <div>
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <div className="flex gap-4 mt-4">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>

        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg font-bold">Logo</span>
        </div>
        <div className="text-sm">
          <p className="mb-2">Address: 123 Main Street, City, Country</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </div>
  
  </footer>
    
  )
}

export default Footer