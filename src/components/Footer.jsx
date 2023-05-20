import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4">
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