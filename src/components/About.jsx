import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AboutPage() {
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

  const philosophyCards = [
    {
      icon: "hourglass_bottom",
      title: "Patience is Key",
      description: "We never rush a groom. We work at your pet's pace to ensure they remain calm."
    },
    {
      icon: "health_and_safety",
      title: "Safety First",
      description: "Your pet's well-being is our top priority with sanitized tools and safe handling."
    },
    {
      icon: "chat",
      title: "Open Communication",
      description: "We listen to your specific needs and discuss the best grooming plan."
    },
    {
      icon: "school",
      title: "Continuous Education",
      description: "Staying updated on the best practices and latest grooming techniques."
    },
    {
      icon: "soap",
      title: "Premium Products",
      description: "We use only the best, pet-safe ingredients that are gentle on the skin."
    }
  ];

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
              <span className="material-symbols-outlined text-3xl" style={{ color: '#8b5cf6' }}>pets</span>
            </div>
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')}
              className="text-lg font-bold leading-tight tracking-[-0.015em]"
            >
              Rhonda Pet Grooming
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              onClick={() => handleNavClick('/')}
              className="text-gray-900 text-sm font-medium leading-normal transition-colors"
              onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.target.style.color = '#111827'}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => handleNavClick('/services')}
              className="text-gray-900 text-sm font-medium leading-normal transition-colors"
              onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.target.style.color = '#111827'}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={() => handleNavClick('/about')}
              className="text-sm font-bold"
              style={{ color: '#8b5cf6' }}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              onClick={() => handleNavClick('/contact')}
              className="text-gray-900 text-sm font-medium leading-normal transition-colors"
              onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.target.style.color = '#111827'}
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
            className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-white text-sm font-bold transition-colors"
            style={{ backgroundColor: '#8b5cf6' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#7c3aed'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#8b5cf6'}
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
                className="block px-4 py-3 text-gray-700 text-sm font-medium leading-normal transition-colors"
                onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => handleNavClick('/services')}
                className="block px-4 py-3 text-gray-700 text-sm font-medium leading-normal transition-colors border-t border-gray-200"
                onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => handleNavClick('/about')}
                className="block px-4 py-3 text-sm font-bold border-t border-gray-200"
                style={{ color: '#8b5cf6' }}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                onClick={() => handleNavClick('/contact')}
                className="block px-4 py-3 text-gray-700 text-sm font-medium leading-normal transition-colors border-t border-gray-200"
                onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                onMouseLeave={(e) => e.target.style.color = '#374151'}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => {
                    handleContactClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 text-white text-sm font-bold transition-colors"
                  style={{ backgroundColor: '#8b5cf6' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#7c3aed'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#8b5cf6'}
                >
                  <span className="truncate">Book Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="flex flex-col w-full max-w-[1200px] mx-auto px-4 md:px-10 py-5 flex-grow">
        {/* Page Heading */}
        <div className="flex flex-col max-w-[960px] mx-auto w-full mb-8 mt-4">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-gray-900 text-4xl font-black leading-tight tracking-[-0.033em]">Getting to Know Rhonda Pet Grooming</h1>
              <p className="text-lg font-normal leading-normal" style={{ color: '#6d28d9' }}>A personal and warm welcome from our family to yours.</p>
            </div>
          </div>
        </div>

        {/* Hero Section: Meet Rhonda */}
        <div className="flex flex-col max-w-[960px] mx-auto w-full mb-12">
          <div className="@container">
            <div className="flex flex-col gap-6 p-4 py-6 @[480px]:gap-8 @[864px]:flex-row items-center">
              <div 
                className="w-full bg-center bg-no-repeat bg-cover rounded-xl shadow-lg aspect-[4/5] @[480px]:h-auto @[480px]:min-w-[300px] @[864px]:w-1/2"
                data-alt="Portrait of Rhonda smiling warmly while holding a small groomed dog"
                style={{
                  backgroundImage: `url("https://i.imgur.com/8m0yV4h.png")`
                }}
              ></div>
              <div className="flex flex-col gap-6 @[480px]:min-w-[300px] @[480px]:gap-8 @[864px]:w-1/2 justify-center">
                <div className="flex flex-col gap-4 text-left">
                  <h2 className="text-gray-900 text-3xl font-black leading-tight tracking-[-0.033em] @[480px]:text-4xl">
                    Meet Rhonda
                  </h2>
                  <div className="text-gray-600 text-base font-normal leading-relaxed space-y-4">
                    <p>
                      Hi, I'm Rhonda! With over 15 years of experience in pet care, I founded this grooming service to provide a calm, loving environment for your furry friends.
                    </p>
                    <p>
                      My journey began volunteering at local shelters, where I learned that patience and gentle touch are just as important as the perfect trim. My passion is ensuring every pet feels safe, comfortable, and loved while in my care.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={handleContactClick}
                  className="flex w-fit cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 transition-all text-sm font-bold leading-normal tracking-[0.015em]"
                  style={{ backgroundColor: '#ede9fe', color: '#8b5cf6' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#8b5cf6'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ede9fe'; e.currentTarget.style.color = '#8b5cf6'; }}
                >
                  <span className="truncate">Contact Rhonda</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section: Philosophy */}
        <div className="flex flex-col max-w-[960px] mx-auto w-full py-10">
          <div className="flex flex-col gap-10 px-4 @container">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h1 className="text-gray-900 tracking-light text-[32px] font-bold leading-tight max-w-[720px]">
                Our Philosophy
              </h1>
              <p className="text-gray-600 text-base font-normal leading-normal max-w-[720px]">
                We believe in a gentle, patient approach to grooming where your pet's happiness comes first.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {philosophyCards.map((card, index) => (
                <div key={index} className="flex flex-1 gap-4 rounded-xl border border-gray-200 bg-white p-6 flex-col hover:shadow-md transition-shadow">
                  <div className="size-8 flex items-center justify-center" style={{ color: '#8b5cf6' }}>
                    <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-gray-900 text-lg font-bold leading-tight">{card.title}</h2>
                    <p className="text-gray-600 text-sm font-normal leading-normal">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Promise Section */}
        <div className="flex flex-col max-w-[960px] mx-auto w-full mb-16 px-4">
          <div className="rounded-2xl p-8 md:p-16 text-center shadow-sm" style={{ backgroundColor: '#ede9fe', borderColor: '#c4b5fd', borderWidth: '1px' }}>
            <span className="material-symbols-outlined text-5xl mb-6" style={{ color: '#8b5cf6' }}>verified</span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 tracking-tight">The Rhonda Promise</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              We promise a personal touch on every groom, using only small-batch, all-natural shampoos in a calm, fear-free environment. Unlike high-volume salons, your pet is family here, and we treat them with the dignity and love they deserve.
            </p>
          </div>
        </div>

        {/* Community Section */}
        <div className="flex flex-col max-w-[960px] mx-auto w-full mb-12">
          <div className="@container">
            <div className="p-4">
              <div 
                className="relative flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden items-center justify-center p-8 md:p-12 shadow-xl"
                data-alt="Scenic view of Antioch, California with a main street and trees"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2wHKZjcsEKfUzPURAPFQAFiPf3VD7JyuDDVYh8vEHBDF0Z0CxeY3rpJECUL1Unc0YPq6SBeWzxYgGlO6kaojBz4y7lI-6aZJg7B3S9W5k5yvf4F5Lxwm0XVmfAZ82ykj6p155kDOgw7_kFX4txO0ComRpmyUaW0_EQDBjIIZo8UK2uk62OmjyjVKgDd-VEWGpov21cmtACCzrvrmcefInfhurV3X9RZ-QpoL7tq4vFR_mvvyFQriO2d492qxc3EmLvaz574RkIyIY")`
                }}
              >
                <div className="flex flex-col gap-4 text-center max-w-2xl relative z-10">
                  <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                  </div>
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl drop-shadow-md">
                    Our Home: Paris
                  </h1>
                  <h2 className="text-white/90 text-lg font-medium leading-relaxed drop-shadow-sm">
                    We are proud to be a part of the beautiful Antioch community. Serving our neighbors and their pets is a privilege we cherish every day. We are more than just a business; we are your neighbors.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Rebranded with Rhonda contact info */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-900">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined text-xl" style={{ color: '#8b5cf6' }}>pets</span>
              </div>
              <Link to="/" onClick={() => handleNavClick('/')} className="font-bold text-lg">Rhonda Pet Grooming</Link>
            </div>
            <p className="text-gray-600 text-sm">Top-tier grooming services for your beloved pets. We treat them like family.</p>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="font-bold text-gray-900">Links</h4>
            <Link to="/" onClick={() => handleNavClick('/')} className="text-gray-600 text-sm transition-colors" onMouseEnter={(e) => e.target.style.color = '#8b5cf6'} onMouseLeave={(e) => e.target.style.color = '#4b5563'}>Home</Link>
            <Link to="/services" onClick={() => handleNavClick('/services')} className="text-gray-600 text-sm transition-colors" onMouseEnter={(e) => e.target.style.color = '#8b5cf6'} onMouseLeave={(e) => e.target.style.color = '#4b5563'}>Services</Link>
            <Link to="/about" onClick={() => handleNavClick('/about')} className="text-gray-600 text-sm transition-colors" onMouseEnter={(e) => e.target.style.color = '#8b5cf6'} onMouseLeave={(e) => e.target.style.color = '#4b5563'}>About Us</Link>
            <Link to="/contact" onClick={() => handleNavClick('/contact')} className="text-gray-600 text-sm transition-colors" onMouseEnter={(e) => e.target.style.color = '#8b5cf6'} onMouseLeave={(e) => e.target.style.color = '#4b5563'}>Contact</Link>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="font-bold text-gray-900">Contact</h4>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="material-symbols-outlined text-[18px]">call</span>
              (832) 510-6305
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              rhondapetgrooming@consultant.com
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              2710 Graham St, Paris, TX 75460
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-3">
            <h4 className="font-bold text-gray-900">Hours</h4>
            <p className="text-gray-600 text-sm">Mon - Fri: 9am – 6pm</p>
            <p className="text-gray-600 text-sm">Saturday: 10am – 4pm</p>
            <p className="text-gray-600 text-sm">Sunday: Closed</p>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">© 2026 Rhonda Pet Grooming. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;