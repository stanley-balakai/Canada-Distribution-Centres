import React, { useState } from 'react';
import Link from 'next/link';
import HeaderStyles from './Header.module.css';

const Header: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className={`${HeaderStyles.header} ${collapsed ? HeaderStyles.collapsed : ''}`}>
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link href="/" passHref>
        <button className="bg-transparent border-none cursor-pointer">
          <img src="/CDC-Logo-grey.png" alt="Logo" className="h-9 w-auto" />
        </button>
      </Link>


        <div className="hidden md:flex space-x-4">
          <Link href="/pricing" passHref>
            <button className={`${HeaderStyles.link} p-2 hover:text-blue-600`}>Pricing</button>
          </Link>
          <Link href="/about" passHref>
            <button className={`${HeaderStyles.link} p-2 hover:text-blue-600`}>About</button>
          </Link>
          <Link href="/contact" passHref>
            <button className={`${HeaderStyles.link} p-2 hover:text-blue-600`}>Contact</button>
          </Link>
        </div>
        <button
        className="md:hidden block text-gray-800 hover:text-blue-600 bg-transparent border-none cursor-pointer"
        onClick={toggleMobileNav}
        >
          <div className="w-6 h-1 bg-white mb-1 rounded-full"></div>
          <div className="w-6 h-1 bg-white mb-1 rounded-full"></div>
          <div className="w-6 h-1 bg-white rounded-full"></div>
        </button>


      </div>
      <div
  className={`${
    mobileNavOpen ? 'block' : 'hidden'
  } md:hidden bg-black p-4 transition-all duration-300 ease-in-out overflow-hidden ${
    mobileNavOpen ? 'max-h-[12rem]' : 'max-h-0'
  }`}
>
  <nav>
    <Link href="/pricing" passHref>
      <button
        className={`${HeaderStyles.link} block py-2 text-gray-800 hover:text-blue-600`}
        onClick={toggleMobileNav}
      >
        Pricing
      </button>
    </Link>
    <Link href="/about" passHref>
      <button
        className={`${HeaderStyles.link} block py-2 text-gray-800 hover:text-blue-600`}
        onClick={toggleMobileNav}
      >
        About
      </button>
    </Link>
    <Link href="/contact" passHref>
      <button
        className={`${HeaderStyles.link} block py-2 text-gray-800 hover:text-blue-600`}
        onClick={toggleMobileNav}
      >
        Contact
      </button>
    </Link>
  </nav>
</div>



    </header>
  );
};

export default Header;
