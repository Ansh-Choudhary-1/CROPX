import React from 'react'
import { Leaf} from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Leaf className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-bold text-white">AgriSmart</span>
              </div>
              <p className="mt-4 text-gray-400">Empowering farmers with smart technology for a better tomorrow.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                    <Link to="/features" className="text-gray-400 hover:text-green-500">Features</Link>
                    
                </li>
                <li>
                    <Link to="/about" className="text-gray-400 hover:text-green-500">About Us</Link>
                    
                </li>
                <li>
                    <Link to="/testimonials" className="text-gray-400 hover:text-green-500">Testimonials</Link>
                    
                </li>
            </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@agrismart.com</li>
                <li>+91 1234567890</li>
                <li>Delhi, India</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
              <Link to="/" className="text-gray-400 hover:text-green-500">
  <FaFacebook className="h-6 w-6" />
</Link>
<Link to="/" className="text-gray-400 hover:text-green-500">
  <FaTwitter className="h-6 w-6" />
</Link>
<Link to="/" className="text-gray-400 hover:text-green-500">
  <FaInstagram className="h-6 w-6" />
</Link>
<Link to="/" className="text-gray-400 hover:text-green-500">
  <FaLinkedin className="h-6 w-6" />
</Link>


              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">&copy; 2025 AgriSmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer