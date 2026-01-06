import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const contactInfo = [
    {
      icon: "location_on",
      title: "Visit Us",
      content: "1515 Spell St Houston, TX 77022",
      href: "https://maps.google.com",
      type: "link"
    },
    {
      icon: "call",
      title: "Call Us",
      content: "(832) 510-6305",
      href: "tel:8325106305",
      type: "link"
    },
    {
      icon: "mail",
      title: "Email Us",
      content: "Rhonda.Gibson@mail.com",
      href: "mailto:Rhonda.Gibson@mail.com",
      type: "link"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed", closed: true }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
          <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
        </svg>
      )
    },
    {
      name: "Instagram",
      icon: (
        <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-2.37 1.938c-2.349.047-2.658.082-3.11.106-.494.026-.762.112-1.036.218-.353.137-.622.312-.9.59-.278.278-.453.547-.59.902-.106.274-.192.542-.218 1.036-.024.453-.059.762-.106 3.11v4.57c.047 2.349.082 2.658.106 3.11.026.494.112.762.218 1.036.137.353.312.622.59.9.278.278.547.453.902.59.274.106.542.192 1.036.218.453.024.762.059 3.11.106h4.57c2.349-.047 2.658-.082 3.11-.106.494-.026.762-.112 1.036-.218.353-.137.622-.312.9-.59.278-.278.453-.547.59-.902.106-.274.192-.542.218-1.036.024-.453.059-.762.106-3.11v-4.57c-.047-2.349-.082-2.658-.106-3.11-.026-.494-.112-.762-.218-1.036-.137-.353-.312-.622-.59-.9-.278-.278-.547-.453-.902-.59-.274-.106-.542-.192-1.036-.218-.453-.024-.762-.059-3.11-.106h-4.57zm5.54 1.432c.596 0 1.08.484 1.08 1.08s-.484 1.08-1.08 1.08-1.08-.484-1.08-1.08.484-1.08 1.08-1.08zm-5.54 2.863c2.596 0 4.707 2.111 4.707 4.707 0 2.596-2.111 4.707-4.707 4.707-2.596 0-4.707-2.111-4.707-4.707 0-2.596 2.111-4.707 4.707-4.707zm0 1.762c-1.626 0-2.945 1.32-2.945 2.945 0 1.626 1.32 2.945 2.945 2.945 1.626 0 2.945-1.32 2.945-2.945 0-1.626-1.32-2.945-2.945-2.945z" fillRule="evenodd"></path>
        </svg>
      )
    },
    {
      name: "Twitter",
      icon: (
        <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
        </svg>
      )
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
              Rhonda's Grooming
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
              className="text-primary text-sm font-medium leading-normal"
              style={{ color: '#2b8cee' }}
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
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <div className="py-12 px-4 sm:px-10 flex justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="flex flex-col gap-3">
              <h1 className="text-gray-900 text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Get in Touch</h1>
              <p className="text-blue-800 text-lg font-normal leading-normal">We can't wait to meet your furry friend.</p>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-10 flex justify-center pb-20">
          <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Contact Information */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl border border-gray-200 bg-white transition hover:shadow-md">
                    <div className="flex-shrink-0 size-12 rounded-full bg-blue-50 flex items-center justify-center text-primary" style={{ color: '#2b8cee' }}>
                      <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                      {item.type === "link" ? (
                        <a 
                          className="text-blue-800 text-sm hover:underline" 
                          href={item.href} 
                          target={item.href.startsWith('http') ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span className="text-blue-800 text-sm">{item.content}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-gray-900">Business Hours</h2>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-sm font-bold text-gray-900">Day</th>
                        <th className="px-6 py-4 text-sm font-bold text-gray-900">Hours</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {businessHours.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-blue-800 text-sm">{item.day}</td>
                          <td className={`px-6 py-4 text-sm font-medium ${item.closed ? 'text-red-500' : 'text-gray-900'}`}>
                            {item.hours}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-4">
               
                <div className="flex gap-4">
                
                    
                  
                </div>
              </div>
            </div>

            {/* Right Column - Booking and Contact Form */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Booking Card */}
              <div 
                className="rounded-2xl p-8 text-center text-white shadow-lg flex flex-col items-center justify-center gap-4"
                style={{ background: 'linear-gradient(to right, #2b8cee, #3b82f6)' }}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">Ready for a trim?</h2>
                  <p className="text-blue-100">Book your appointment online instantly. No phone tag required.</p>
                </div>
                <a 
                  className="mt-2 w-full max-w-sm rounded-full bg-white py-3.5 px-6 text-base font-bold shadow-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group"
                  href="#"
                  style={{ color: '#2b8cee' }}
                >
                  <span className="material-symbols-outlined group-hover:animate-pulse">calendar_month</span>
                  Book an Appointment Online
                </a>
              </div>

              {/* Contact Form */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form action="#" className="flex flex-col gap-5" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-900" htmlFor="name">Name</label>
                      <input 
                        className="w-full rounded-lg border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-primary placeholder:text-gray-400 border" 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-900" htmlFor="email">Email</label>
                      <input 
                        className="w-full rounded-lg border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-primary placeholder:text-gray-400 border" 
                        id="email" 
                        name="email" 
                        placeholder="john@example.com" 
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-900" htmlFor="phone">Phone</label>
                      <input 
                        className="w-full rounded-lg border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-primary placeholder:text-gray-400 border" 
                        id="phone" 
                        name="phone" 
                        placeholder="(555) 123-4567" 
                        type="tel"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-gray-900" htmlFor="pet_info">Pet's Name/Service Needed</label>
                      <input 
                        className="w-full rounded-lg border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-primary placeholder:text-gray-400 border" 
                        id="pet_info" 
                        name="pet_info" 
                        placeholder="e.g. Max - Nail Trim" 
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-900" htmlFor="message">Message</label>
                    <textarea 
                      className="w-full rounded-lg border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-primary focus:ring-primary placeholder:text-gray-400 border resize-none" 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your pet's needs..." 
                      rows="4"
                    ></textarea>
                  </div>

                  <button 
                    className="mt-2 w-full rounded-lg py-3 px-6 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-all"
                    type="submit"
                    style={{ backgroundColor: '#2b8cee' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-gray-900">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined text-xl" style={{ color: '#2b8cee' }}>pets</span>
              </div>
              <Link to="/" className="font-bold text-lg">Rhonda's</Link>
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
              Rhonda.Gibson@mail.com
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
               515 Spell St Houston, TX 77022
            </div>
          </div>

          
        </div>

        <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">© 2026 Rhonda's Pet Grooming. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;