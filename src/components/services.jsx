import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ServicesPage() {
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

  const services = [
    {
      icon: "pets",
      title: "The Puppy Intro",
      description: "A gentle first groom focusing on positive exposure. Bath, dry, light trim, nail filing.",
      price: "$50 - $65"
    },
    {
      icon: "bathtub",
      title: "Basic Bath & Tidy",
      description: "Perfect for maintenance between full grooms. Includes bath, brush-out, nail trim, ear cleaning, sanitary trim.",
      price: "$60 - $75"
    },
    {
      icon: "content_cut",
      title: "Full Groom (Small Dog)",
      description: "Complete spa day for dogs under 20 lbs. Bath, haircut to your style, nail trim, ear cleaning, gland expression.",
      price: "$75 - $95"
    },
    {
      icon: "content_cut",
      title: "Full Groom (Medium Dog)",
      description: "Complete spa day for dogs 21-50 lbs. Includes all Full Groom services.",
      price: "$95 - $120"
    },
    {
      icon: "content_cut",
      title: "Full Groom (Large Dog)",
      description: "Complete spa day for dogs 51-90 lbs. Includes all Full Groom services.",
      price: "$120 - $160"
    },
    {
      icon: "content_cut",
      title: "Full Groom (Giant Breed)",
      description: "For our gentle giants over 90 lbs. Includes all Full Groom services.",
      price: "$160 - $250"
    },
    {
      icon: "filter_alt",
      title: "De-Shedding Treatment",
      description: "Intensive treatment to reduce shedding up to 90%. Includes special bath, conditioner, and blow-out.",
      price: "+$30 to Base Groom"
    },
    {
      icon: "spa",
      title: "Spa Upgrade Package",
      description: "Add-on: Teeth brushing, paw balm, blueberry facial, premium cologne.",
      price: "+$25"
    },
    {
      icon: "cut",
      title: "A La Carte: Nail Trim & File",
      description: "For walk-in clients. Quick, careful nail service.",
      price: "$20"
    },
    {
      icon: "hearing",
      title: "A La Carte: Ear Cleaning",
      description: "Gentle, deep ear cleaning and inspection.",
      price: "$15"
    },
    {
      icon: "cruelty_free",
      title: "Cat Grooming",
      description: "Bath and sanitary trim for our feline friends. Conducted in a separate, quiet area.",
      price: "$85 - $120"
    },
    {
      icon: "stars",
      title: "Specialty Breed Cuts",
      description: "Expert scissoring and clipper work for Poodles, Spaniels, Terriers, etc.",
      price: "Quote Required"
    },
    {
      icon: "favorite",
      title: "Senior Pet Gentle Groom",
      description: "Slower pace, extra padding, and focus on comfort for older pets.",
      price: "Price + 15% Care Fee"
    },
    {
      icon: "content_cut",
      title: "De-Matting Service",
      description: "Note: Extensive matting may require a shorter 'comfort clip' for pet's wellbeing.",
      price: "$30+ (by assessment)"
    },
    {
      icon: "footprint",
      title: "Pawdicure",
      description: "Nail trim, filing, smoothing, and moisturizing paw balm application.",
      price: "$25"
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
              className="text-gray-900 text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => handleNavClick('/services')}
              className="text-primary text-sm font-bold leading-normal"
              style={{ color: '#2b8cee' }}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={() => handleNavClick('/about')}
              className="text-gray-900 text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              About Us
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
                className="block px-4 py-3 text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => handleNavClick('/services')}
                className="block px-4 py-3 text-primary text-sm font-bold hover:text-blue-600 transition-colors border-t border-gray-200"
                style={{ color: '#2b8cee' }}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => handleNavClick('/about')}
                className="block px-4 py-3 text-gray-700 text-sm font-medium leading-normal hover:text-primary transition-colors border-t border-gray-200"
              >
                About Us
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

      <div className="flex-grow">
        <div className="w-full bg-white py-8 md:py-12">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="relative overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col items-center justify-center text-center p-8 gap-6 shadow-lg group"
              data-alt="Happy dog getting groomed in a salon"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBljD5JBIFVj9Pq24MyRsB0RaLIgNU97D5hiBNRGN2bJZ0RemQlRRYgQ0XD8zZJpxm87dNzlNuL79a2Rn6GCzEgUSKPKHaATNUAQyIwlLr9PqbFpyv-rxkcpO-D0vTei1Ry0bfuEJ_1Ah3NXPJNPzxkSy6ADjw1Z_r8EIPZjTYYWfIdLvy1OZr8XFfDjjqV3qBjfOUCEal7cgXuQ3uMK_7bsOdDcW8vPVoMfKNO92tv3vXgedZxqONkKYa-aXnsSeYvruGS4-qOvoT6")`
              }}
            >
              <div className="flex flex-col gap-3 max-w-2xl z-10">
                <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Full Menu of Grooming Services
                </h1>
                <p className="text-slate-100 text-base md:text-lg font-normal leading-relaxed">
                  We offer a full menu of grooming services to keep your pet looking, feeling, and smelling wonderful. All grooms include a gentle bath with premium shampoo, conditioner, blow-dry, nail trim, ear cleaning, and a bandana or bow.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-50 py-12">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all">
                  <div className="flex-shrink-0">
                    <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary" style={{ color: '#2b8cee' }}>
                      <span className="material-symbols-outlined">{service.icon}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex-shrink-0 md:text-right pt-2 md:pt-0">
                    <span className="font-bold text-lg text-gray-900 block">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-50 pb-16">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 flex gap-4 items-start mb-12">
              <span className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5">info</span>
              <p className="text-blue-800 text-sm font-medium leading-relaxed">
                Prices are starting estimates. Final price may vary based on coat condition, size, and temperament. Please contact us for a precise quote!
              </p>
            </div>
            <div className="flex justify-center">
              <button 
                onClick={handleContactClick}
                className="flex min-w-[280px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 hover:bg-blue-600 text-white text-lg font-bold shadow-lg transition-all hover:-translate-y-1"
                style={{ backgroundColor: '#2b8cee' }}
              >
                <span className="truncate">Ready to Book? View Our Availability</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Same as other components */}
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
              (832) 510-6305
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

export default ServicesPage;