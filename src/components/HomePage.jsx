import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden flex flex-col min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
          
          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
          }
          
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}
      </style>

      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-900">
            <div className="size-8 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">pets</span>
            </div>
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')}
              className="text-lg font-bold leading-tight tracking-[-0.015em]"
            >
              Ledale's Grooming
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')}
              className="text-primary text-sm font-medium leading-normal"
              style={{ color: '#2b8cee' }}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => handleNavClick('/services')}
              className="text-gray-900 text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={() => handleNavClick('/about')}
              className="text-gray-900 text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => handleNavClick('/contact')}
              className="text-gray-900 text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center size-10 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          
          {/* Desktop Book Now Button */}
          <button 
            onClick={handleContactClick}
            className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-white text-sm font-bold hover:bg-blue-600 transition-colors"
            style={{ backgroundColor: '#2b8cee' }}
          >
            <span className="truncate">Book Now</span>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              <Link 
                to="/" 
                onClick={() => handleNavClick('/')}
                className="block px-4 py-3 text-primary text-sm font-medium leading-normal hover:text-blue-600 transition-colors"
                style={{ color: '#2b8cee' }}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => handleNavClick('/services')}
                className="block px-4 py-3 text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors border-t border-gray-200"
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => handleNavClick('/about')}
                className="block px-4 py-3 text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors border-t border-gray-200"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => handleNavClick('/contact')}
                className="block px-4 py-3 text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors border-t border-gray-200"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => {
                    handleContactClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 text-white text-sm font-bold hover:bg-blue-600 transition-colors"
                  style={{ backgroundColor: '#2b8cee' }}
                >
                  <span className="truncate">Book Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="@container w-full flex-grow">
        <div 
          className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-center px-4 md:px-20 lg:px-40 py-20 relative" 
          data-alt="Golden Retriever dog smiling happily outdoors in soft sunlight"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcHBug1VUXWxWvN86VGBDLKBd5aqv8GkYpd0I9VRKT3VTLa-3F_M11tB9zbRmZmTt5-xdR2JLjZOpZA9heajLpO49XcudlFtJQN5sPGdFjW-nzsIxqm1jIyIaj832QQqDhWh1Bw8aa2UNKbR7BnFbO-F6dXW7T0saXglni9oOiEH5LtJ9Z2GQLyAZBHNdmHm9bTLcGaHg1FGPrd7hwyuMukA2tJZvFdLlNJk0OCADCVN-Uxnsj0SHnHFcMw6qGsS1nbnFPCxfcVN8X")`
          }}
        >
          <div className="flex flex-col gap-4 text-left max-w-[720px] z-10">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl drop-shadow-sm">
              Ledale's Premier Pet Pampering. Where Comfort Meets the Perfect Cut.
            </h1>
            <h2 className="text-white/90 text-lg font-medium leading-normal max-w-[600px] drop-shadow-sm">
              Professional pet styling in a stress-free environment right here in Ledale. Give your furry friend the spa day they deserve.
            </h2>
            <div className="pt-4">
              <button 
                onClick={handleContactClick}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 hover:bg-blue-600 transition-transform hover:scale-105 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg"
                style={{ backgroundColor: '#2b8cee' }}
              >
                <span className="truncate">Book Your Grooming Spa Day</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="flex justify-center py-16 px-4 md:px-20 bg-white">
        <div className="max-w-[800px] flex flex-col items-center text-center gap-6">
          <div className="text-primary" style={{ color: '#2b8cee' }}>
            <span className="material-symbols-outlined text-4xl">soap</span>
          </div>
          <h2 className="text-gray-900 text-[28px] md:text-[32px] font-bold leading-tight tracking-[-0.015em]">Grooming is an Act of Love</h2>
          <p className="text-gray-600 text-lg font-normal leading-relaxed">
            At Ledale's, we believe grooming is an act of love. Our gentle, expert stylists provide a stress-free spa experience for your pet in the heart of Ledale. From a simple bath to a full breed-standard trim, we tailor every service to your pet's unique needs.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-16 px-4 md:px-20 bg-gray-50">
        <div className="max-w-[1200px] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-2 items-start md:items-center md:text-center">
            <h1 className="text-gray-900 tracking-tight text-[32px] font-bold leading-tight md:text-4xl">
              Why Choose Ledale's?
            </h1>
            <p className="text-gray-600 text-base font-normal leading-normal max-w-[720px]">
              We offer more than just a haircut. Experience the difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 bg-white p-6 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">spa</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-900 text-lg font-bold leading-tight">Stress-Free Environment</h2>
                <p className="text-gray-600 text-sm font-normal leading-normal">Calm atmosphere designed specifically for anxious pets.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 bg-white p-6 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">content_cut</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-900 text-lg font-bold leading-tight">Expert Styling</h2>
                <p className="text-gray-600 text-sm font-normal leading-normal">Breed-specific cuts & styles from certified professionals.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 bg-white p-6 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-900 text-lg font-bold leading-tight">All-Natural Products</h2>
                <p className="text-gray-600 text-sm font-normal leading-normal">Safe, organic shampoos suitable for sensitive skin.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 bg-white p-6 flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-900 text-lg font-bold leading-tight">Ledale's Favorite</h2>
                <p className="text-gray-600 text-sm font-normal leading-normal">Voted #1 Grooming Service in the community two years running.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center pt-8 pb-12 px-4 md:px-20 bg-white">
        <div className="max-w-[960px] w-full bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 border border-gray-200 shadow-sm">
          <div className="shrink-0 relative">
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                alt="Happy small dog jumping in grass" 
                className="w-full h-full object-cover" 
                data-alt="Small brown dog jumping happily in a park" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB44eQOJBUL2jUWsIlwHEfV6KsHkr6yjzRAPlfnOc1IPvX_KZ53D89UqDb0ppggYXOhflToPMxs43Be6ehODj7WXPHFS8L4Sho2Mpj2jobEZrnJUYigGMsLhNSLk7IxULAiUykVxYLYbZhJpZ72Rh94SmENYMNTLnx2fdTNgO_wjftuihh8_nlCb0ekCTKGF0qSbbd8hZOnm7LVYfXJNuEWRTqzQ9fqyVci8Gg17PbIiNLHk7C86D33eeNHwL2yZ97s2aTRx2ond_Fm" 
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-md" style={{ backgroundColor: '#2b8cee' }}>
              <span className="material-symbols-outlined text-lg">format_quote</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-1 text-yellow-400">
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="material-symbols-outlined fill-current">star</span>
              <span className="material-symbols-outlined fill-current">star</span>
            </div>
            <p className="text-gray-900 text-lg md:text-xl font-medium italic leading-relaxed">
              "My poodle has never looked better! The team at Ledale's was so patient with her anxiety, and she came home looking like a show dog. We are customers for life!"
            </p>
            <div>
              <p className="text-gray-900 font-bold text-base">Sarah & Bella</p>
              <p className="text-gray-600 text-sm">Loyal Customers since 2021</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 md:px-20 overflow-hidden" style={{ backgroundColor: '#2b8cee' }}>
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        <div className="relative max-w-[800px] mx-auto flex flex-col items-center text-center gap-8">
          <h2 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Your pet's best groom is just a click away.
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-[600px]">
            Schedule an appointment today and treat your furry friend to the Ledale experience!
          </p>
          <button 
            onClick={handleContactClick}
            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-white hover:bg-gray-100 transition-colors text-primary text-lg font-bold leading-normal shadow-lg" 
            style={{ color: '#2b8cee' }}
          >
            Schedule an Appointment
          </button>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-900">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined text-xl" style={{ color: '#2b8cee' }}>pets</span>
              </div>
              <Link to="/" onClick={() => handleNavClick('/')} className="font-bold text-lg">Ledale's</Link>
            </div>
            <p className="text-gray-600 text-sm">Top-tier grooming services for your beloved pets. We treat them like family.</p>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="font-bold text-gray-900">Links</h4>
            <Link to="/" onClick={() => handleNavClick('/')} className="text-gray-600 text-sm hover:text-primary">Home</Link>
            <Link to="/services" onClick={() => handleNavClick('/services')} className="text-gray-600 text-sm hover:text-primary">Services</Link>
            <Link to="/about" onClick={() => handleNavClick('/about')} className="text-gray-600 text-sm hover:text-primary">About Us</Link>
            <Link to="/contact" onClick={() => handleNavClick('/contact')} className="text-gray-600 text-sm hover:text-primary">Contact</Link>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="font-bold text-gray-900">Contact</h4>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="material-symbols-outlined text-[18px]">call</span>
              (832) 510-63057
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              ledalepets@mail.com
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              515 Spell St Houston, TX 77022
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="font-bold text-gray-900">Legal</h4>
            <Link to="#" className="text-gray-600 text-sm hover:text-primary">Privacy Policy</Link>
            <Link to="#" className="text-gray-600 text-sm hover:text-primary">Terms of Service</Link>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">© 2024 Ledale's Pet Grooming. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;