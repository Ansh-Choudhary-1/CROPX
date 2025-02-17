import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Sprout, X, Menu } from 'lucide-react';
import { ShimmerButton } from './magicui/shimmer-button';
import { useTranslation } from 'react-i18next';


function Header() {
  const {t,i18n} = useTranslation();
  const [isAssistDropdownOpen, setIsAssistDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const assistFeatures = [
    {name:"Crop Yield Prediction",
      slug:"/crop-yield-prediction"
    },
    {name:"Weather Prediction",
      slug:"/weather-prediction"
    },
    {name: "Disease Detection",
      slug:"/disease-detection"
    },
  ];
  const menuItems = [
    { name: "Features", path: "#features" },
    { name: "About", path: "/about" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Testimonials", path: "#testimonials" }
  ];

  const handleNavigation = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },100);
  }

  const changeLanguage = (e) =>{
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      {/* Top Bar */}
      <div className="w-full py-1 bg-green-600">
        <div className="flex items-center justify-end text-white mr-[200px]">
          <ul>
            <li className="poppins-semibold text-[13px]">
              <Link to="/help-centre">{t("help_center")}</Link>
            </li>
          </ul>
          <select
            className="bg-gray-800 ml-7 text-white text-[12px] border border-gray-600 rounded-md focus:outline-none"
            onChange={changeLanguage}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="es">Español (Spanish)</option>
            <option value="fr">Français (French)</option>
          </select>
        </div>
      </div>

      {/* Navbar */}
      <div className=' bg-white'>
        <nav className='bg-white shadow-lg'>
          <div className='mx-auto px-4 max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16 items-center'>
              {/* Logo */}
              <div className='flex items-center'>
                <Sprout className='h-8 w-8 text-green-600' />
                <Link to="/" className='ml-2 text-xl poppins-bold text-gray-800'> AgriSmart </Link>
              </div>

              {/* Desktop Menu */}
              <div className='hidden md:flex items-center space-x-8'>
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.path)}
                    className='text-gray-600 hover:text-green-600 transition-colors'
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Assist Dropdown */}
                <div className='relative'>
                  <button
                    className='text-gray-600 hover:text-green-600 flex items-center'
                    onClick={() => setIsAssistDropdownOpen(!isAssistDropdownOpen)}
                    onBlur={() => setTimeout(() => setIsAssistDropdownOpen(false), 200)}
                  >
                    Assist
                    <ChevronRight className={`ml-1 h-4 w-4 transform transition-transform ${isAssistDropdownOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isAssistDropdownOpen && (
                    <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {assistFeatures.map((feature) => (
                          <Link
                            key={feature.name}
                            to={`${feature.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                          >
                            {feature.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <ShimmerButton> Get Started </ShimmerButton>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden text-gray-600 hover:text-green-600'
              >
                {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavigation(item.path);
                    setIsMenuOpen(false);
                  }}
                  className='text-gray-600 hover:text-green-600 transition-colors'
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Assist Dropdown */}
              <div className='relative px-3 py-2'>
                <button
                  className="flex items-center w-full text-gray-600 hover:text-green-600"
                  onClick={() => setIsAssistDropdownOpen(!isAssistDropdownOpen)}
                >
                  Assist
                  <ChevronRight className={`ml-1 h-4 w-4 transform transition-transform ${isAssistDropdownOpen ? 'rotate-90' : ''}`} />
                </button>
                {isAssistDropdownOpen && (
                  <div className="mt-2 space-y-1">
                    {assistFeatures.map((feature, index) => (
                      <Link
                        key={index}
                        to="/"
                        className="block pl-4 py-2 text-sm text-gray-600 hover:text-green-600"
                      >
                        {feature}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <ShimmerButton> Get Started </ShimmerButton>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Header;
