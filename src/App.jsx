import React, { useState } from 'react';
import { 
  Bus, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  CheckCircle, 
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  IndianRupee,
  Star,
  Share2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingModal, setBookingModal] = useState({ open: false, route: null });

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800';
  };

  const routes = [
    {
      id: 1,
      from: "Wakad",
      to: "Hinjewadi",
      price: "2,699",
      distance: "20 km",
      image: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&q=80&w=800",
      description: "Perfect for IT professionals commuting to Hinjewadi Phase 1, 2, or 3."
    },
    {
      id: 2,
      from: "Pimpri",
      to: "Hinjewadi",
      price: "3,300",
      distance: "30 km",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800",
      description: "Reliable connectivity from the heart of PCMC to the IT hub."
    },
    {
      id: 3,
      from: "Bhosari",
      to: "Chakan",
      price: "3,500",
      distance: "40 km",
      image: "https://images.unsplash.com/photo-1562620644-66ba4db3f972?auto=format&fit=crop&q=80&w=800",
      description: "Direct routes to Chakan Industrial area for manufacturing professionals."
    },
    {
      id: 4,
      from: "Wakad",
      to: "Chakan",
      price: "3,800",
      distance: "56 km",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
      description: "The most convenient way to reach Chakan from the Pune-Mumbai highway."
    }
  ];

  const shareOnWhatsApp = (route) => {
    const text = `Hey! Check out this office commute route on RouteSync: ${route.from} to ${route.to} for just ₹${route.price}/month. %0A%0AJoin me on the smart way to commute!`;
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Bus className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Route<span className="text-blue-600">Sync</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <NavLink href="#routes">Routes</NavLink>
              <NavLink href="#employees">Employees</NavLink>
              <NavLink href="#partners">Fleet Partners</NavLink>
              <button 
                onClick={() => document.getElementById('routes').scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Book Your Seat
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                #1 CORPORATE COMMUTE IN PUNE
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                Your Daily Office Commute, <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Made Simple</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Affordable, fixed, and reliable office transport. Connect with verified fleet operators like <span className="text-slate-900 font-bold">Junavane Travels</span> for a stress-free journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <button 
                   onClick={() => document.getElementById('routes').scrollIntoView({ behavior: 'smooth' })}
                   className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 group"
                >
                  View Routes <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-4 px-6 py-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex text-yellow-400"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                    <p className="text-xs font-bold text-slate-500">500+ Happy Commuters</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Fleet Bus" 
                  className="w-full aspect-[4/3] object-cover"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/90 backdrop-blur p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase">Verified Fleet</p>
                      <p className="font-extrabold text-slate-900">Junavane Travels</p>
                    </div>
                  </div>
                  <div className="bg-blue-600 px-3 py-1 rounded-lg text-white font-bold text-xs">
                    ACTIVE NOW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routes & Pricing */}
      <section id="routes" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-black mb-4">Popular Office Routes</h2>
            <p className="text-slate-500 text-lg">Daily two-way shared commutes from key residential areas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {routes.map((route) => (
              <div key={route.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col sm:flex-row">
                <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={route.from} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                          <MapPin size={12} /> Office Route
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">{route.from} ↔ {route.to}</h3>
                      </div>
                      <button 
                        onClick={() => shareOnWhatsApp(route)}
                        className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
                        title="Share on WhatsApp"
                      >
                        <Share2 size={20} />
                      </button>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {route.description}
                    </p>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="text-left">
                          <p className="text-2xl font-black text-blue-600">₹{route.price}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">Incl. all taxes</p>
                       </div>
                       <div className="h-10 w-px bg-slate-100"></div>
                       <div className="text-left">
                          <p className="text-lg font-bold text-slate-700">{route.distance}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase">Return Trip</p>
                       </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setBookingModal({ open: true, route })}
                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all"
                  >
                    Select Route
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section (Shortened for brevity) */}
      <section id="partners" className="py-24 bg-white text-center">
         <h2 className="text-4xl font-black mb-6">Partner With RouteSync</h2>
         <p className="text-slate-500 mb-8 max-w-xl mx-auto">Verified fleet operators like Junavane Travels grow with us.</p>
         <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all">
           Join as a Partner
         </button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t py-10 text-center">
         <p className="text-slate-400 text-sm font-bold">© 2024 RouteSync. Daily Office Commute, Made Simple.</p>
      </footer>

      {/* Booking Modal */}
      {bookingModal.open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="p-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black">Subscribe to Route</h3>
                <button onClick={() => setBookingModal({ open: false, route: null })}><X /></button>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                <p className="font-bold text-lg">{bookingModal.route.from} ↔ {bookingModal.route.to}</p>
                <p className="text-blue-600 font-black text-2xl">₹{bookingModal.route.price}/month</p>
              </div>
              <input type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-slate-50 border rounded-2xl mb-4 font-bold" />
              <input type="email" placeholder="Office Email" className="w-full px-5 py-4 bg-slate-50 border rounded-2xl mb-8 font-bold" />
              <button 
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black"
                onClick={() => {
                  alert("Interest registered! We will call you back.");
                  setBookingModal({ open: false, route: null });
                }}
              >
                Confirm Interest
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;