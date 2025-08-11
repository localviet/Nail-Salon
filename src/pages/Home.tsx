import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock, Star, Share } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: 'Classic Manicure', price: '$35', duration: '45 min' },
    { name: 'Gel Manicure', price: '$45', duration: '60 min' },
    { name: 'Luxury Pedicure', price: '$55', duration: '75 min' },
    { name: 'Nail Art Design', price: '$65', duration: '90 min' },
    { name: 'French Tips', price: '$40', duration: '50 min' },
    { name: 'Acrylic Extensions', price: '$70', duration: '120 min' }
  ];

  const reviews = [
    { name: 'Sarah M.', rating: 5, text: 'Absolutely love this place! The floral atmosphere is so relaxing and my nails look amazing.' },
    { name: 'Emma L.', rating: 5, text: 'Best nail salon in town! The attention to detail is incredible and staff is so friendly.' },
    { name: 'Maria G.', rating: 5, text: 'I come here monthly and never disappointed. Beautiful work every time!' }
  ];

  return (
    <>  
      <div className="min-h-screen min-w-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🌸</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-primary bg-clip-text text-transparent">
                  Nail Pro
                </h1>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">Home</a>
                <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">Services</a>
                <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">Gallery</a>
                <a href="#reviews" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">Reviews</a>
                <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors duration-300">Contact</a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Home</a>
                  <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Services</a>
                  <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Gallery</a>
                  <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Reviews</a>
                  <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-600">Contact</a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative pb-20 pt-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className='flex items-center justify-center'>
              <div className="mb-8">
                <img src="/nailproicon.png" alt="" className="w-48 md:w-72" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Where Beauty
                <span className="block bg-gradient-to-r from-pink-600 to-primary bg-clip-text text-transparent">
                  Blooms
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience luxury nail care in our serene floral paradise. Every detail crafted with love and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Book Appointment
              </button>
              <button className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300">
                View Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Services
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Indulge in our premium nail care services, each designed to pamper and perfect your nails
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-pink-100"
                >
                  <div className="text-4xl mb-4">🌸</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <div className="flex justify-between items-center text-gray-600 mb-4">
                    <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-primary text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Work
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through our stunning nail art creations and transformations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1,2,3,4,5,6,7,8].map((item) => (
                <div 
                  key={item}
                  className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">💅</div>
                    <div className="text-sm text-gray-600">Nail Art {item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read testimonials from our satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-pink-100"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="font-semibold text-pink-600">- {review.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-pink-100 to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Visit Us Today
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Book your appointment and experience the luxury of Nail Pro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-primary p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                    <p className="text-gray-600">123 Beauty Boulevard<br />Norfolk, VA 23510</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-primary p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                    <p className="text-gray-600">(757) 555-NAIL</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-primary p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Hours</h4>
                    <div className="text-gray-600">
                      <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a href="#" className="bg-gradient-to-r from-pink-500 to-primary p-3 rounded-full hover:shadow-lg transition-all duration-300">
                    <Share className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-pink-500 to-primary p-3 rounded-full hover:shadow-lg transition-all duration-300">
                    <Share className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-gradient-to-r from-pink-500 to-primary p-3 rounded-full hover:shadow-lg transition-all duration-300">
                    <Share className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-2 shadow-lg h-150 md:h-100">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.922164481145!2d-76.22204012280497!3d36.916125361154016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba96d492dae269%3A0xfd4ea355f7dca49a!2sNailpro!5e0!3m2!1sen!2sus!4v1754941829728!5m2!1sen!2sus"
                 className='w-full h-full border-0' loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🌸</span>
                  </div>
                  <h5 className="text-xl font-bold">Nail Pro</h5>
                </div>
                <p className="text-gray-400">
                  Where beauty blooms and dreams come true. Experience luxury nail care like never before.
                </p>
              </div>
              
              <div>
                <h6 className="font-semibold mb-4">Quick Links</h6>
                <div className="space-y-2">
                  <a href="#services" className="block text-gray-400 hover:text-secondary transition-colors duration-300">Services</a>
                  <a href="#gallery" className="block text-gray-400 hover:text-secondary transition-colors duration-300">Gallery</a>
                  <a href="#reviews" className="block text-gray-400 hover:text-secondary transition-colors duration-300">Reviews</a>
                  <a href="#contact" className="block text-gray-400 hover:text-secondary transition-colors duration-300">Contact</a>
                </div>
              </div>
              
              <div>
                <h6 className="font-semibold mb-4">Contact Info</h6>
                <div className="space-y-2 text-gray-400">
                  <p>123 Beauty Boulevard</p>
                  <p>Norfolk, VA 23510</p>
                  <p>(757) 555-NAIL</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Nail Pro Salon. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>

  );
};

export default Home;