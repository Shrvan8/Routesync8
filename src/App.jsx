import React, { useState, useEffect } from 'react';
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
  Share2,
  Target,
  Rocket,
  Award,
  Zap,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  MessageCircle
} from 'lucide-react';

/**
 * VS CODE USERS (Tailwind v3.4.19): 
 * The imports below are for your local machine. 
 * They are commented out here so the online preview doesn't crash.
 * UNCOMMENT THEM IN YOUR VS CODE.
 */
 import busHero from './assets/image_416df4.jpg';
 import busRoute1 from './assets/image_417145.jpg';
 import busRoute2 from './assets/image_416e17.jpg';
 import busRoute3 from './assets/image_416e39.jpg';
 import busRoute4 from './assets/image_4170f9.jpg';
 import busInterior from './assets/image_41713d.jpg';
 import busCockpit from './assets/image_41711b.jpg';
 import busBack from './assets/image_417179.jpg';

const App = () => {
  const [view, setView] = useState('home'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingModal, setBookingModal] = useState({ open: false, route: null });
  const [formData, setFormData] = useState({ name: '', email: '' });

  const contactInfo = {
    phone: "+91 85509 71138",
    whatsappNumber: "918550971138", // For WhatsApp URL (no + or spaces)
    email: "rishikeshdharade@gmail.com"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

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
      image: busRoute1,
      description: "Perfect for IT professionals commuting to Hinjewadi Phase 1, 2, or 3."
    },
    {
      id: 2,
      from: "Pimpri",
      to: "Hinjewadi",
      price: "3,300",
      distance: "30 km",
      image: busRoute2,
      description: "Reliable connectivity from the heart of PCMC to the IT hub."
    },
    {
      id: 3,
      from: "Bhosari",
      to: "Chakan",
      price: "3,500",
      distance: "40 km",
      image: busRoute3,
      description: "Direct routes to Chakan Industrial area for manufacturing professionals."
    },
    {
      id: 4,
      from: "Wakad",
      to: "Chakan",
      price: "3,800",
      distance: "56 km",
      image: busRoute4,
      description: "The most convenient way to reach Chakan from the Pune-Mumbai highway."
    }
  ];

  const shareOnWhatsApp = (route) => {
    const text = encodeURIComponent(`Hey! Check out this office commute route on RouteSync: ${route.from} to ${route.to} for just ₹${route.price}/month.\n\nJoin me on the smart way to commute!`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please enter your name and email.");
      return;
    }
    
    // Generate WhatsApp message
    const message = encodeURIComponent(
      `*New Booking Interest from RouteSync Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Route:* ${bookingModal.route.from} ↔ ${bookingModal.route.to}\n` +
      `*Monthly Price:* ₹${bookingModal.route.price}\n\n` +
      `I am interested in this route. Please contact me with more details.`
    );
    
    window.open(`https://wa.me/${contactInfo.whatsappNumber}?text=${message}`, '_blank');
    
    // Reset and close
    setBookingModal({ open: false, route: null });
    setFormData({ name: '', email: '' });
  };

  const Navigation = () => (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-blue-600 p-2 rounded-xl">
              <Bus className="text-white h-6 w-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Route<span className="text-blue-600">Sync</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10 font-bold text-slate-600">
            <button onClick={() => setView('home')} className={`hover:text-blue-600 transition-colors ${view === 'home' ? 'text-blue-600' : ''}`}>Home</button>
            <button onClick={() => setView('about')} className={`hover:text-blue-600 transition-colors ${view === 'about' ? 'text-blue-600' : ''}`}>About Us</button>
            <a href="#routes" onClick={(e) => { if(view !== 'home') { setView('home'); } }} className="hover:text-blue-600">Routes</a>
            <button 
              onClick={() => { setView('home'); setTimeout(() => document.getElementById('routes')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
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

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 font-bold flex flex-col">
          <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="text-left py-2">Home</button>
          <button onClick={() => { setView('about'); setIsMenuOpen(false); }} className="text-left py-2">About Us</button>
          <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="text-left py-2">Routes</button>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-slate-900 border-t py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid md:grid-cols-3 gap-12 mb-12 text-left">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Bus className="text-white h-5 w-5" />
              </div>
              <span className="text-2xl font-black">RouteSync</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Shared Office Commutes Made Easy. We help Pune's professionals commute smarter, safer, and cheaper every single day.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact Details</h4>
            <div className="space-y-4">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span className="font-bold">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span className="font-bold">{contactInfo.email}</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <div className="flex flex-col gap-3 font-bold text-slate-400">
              <button onClick={() => setView('home')} className="text-left hover:text-white">Home</button>
              <button onClick={() => setView('about')} className="text-left hover:text-white">About Us</button>
            </div>
          </div>
        </div>
        <p className="text-slate-500 text-xs font-bold pt-12 border-t border-slate-800 text-center">
          © 2024 RouteSync. All Rights Reserved. Maintained by Junavane Travels.
        </p>
      </div>
    </footer>
  );

  const HomeView = () => (
    <>
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
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
                Affordable, fixed, and reliable office transport. Connect with verified fleet operators for a stress-free journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <button 
                   onClick={() => document.getElementById('routes').scrollIntoView({ behavior: 'smooth' })}
                   className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 group"
                >
                  View Routes <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  Call Now <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src={busHero} 
                  alt="Our Bus" 
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-4xl font-black mb-4">Popular Office Routes</h2>
            <p className="text-slate-500 text-lg">Daily two-way shared commutes from key residential areas across Pune.</p>
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
                      <button onClick={() => shareOnWhatsApp(route)} className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"><Share2 size={20} /></button>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{route.description}</p>
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
                  <button onClick={() => setBookingModal({ open: true, route })} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all">Select Route</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const AboutView = () => (
    <div className="animate-in fade-in duration-500">
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">About RouteSync</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            RouteSync is a smart employee commute platform designed to simplify daily office travel for working professionals across Pune.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6"><Zap size={16} /> WHAT WE DO</div>
              <h3 className="text-4xl font-black mb-8 leading-tight">Matching Demand with Reliable Fleet Partners</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We aggregate employee demand across common office routes and match it with verified fleet partners. By offering seat-based monthly subscriptions, we ensure cost-effective travel for employees while improving vehicle utilization for fleet operators.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <img src={busCockpit} className="rounded-2xl h-40 w-full object-cover shadow-md" alt="Cockpit" onError={handleImageError} />
                 <img src={busBack} className="rounded-2xl h-40 w-full object-cover shadow-md" alt="Back" onError={handleImageError} />
              </div>
            </div>
            <div className="relative group">
               <img src={busInterior} className="rounded-[2.5rem] w-full h-[500px] object-cover shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-500" alt="Interior Comfort" onError={handleImageError} />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-8 py-4 rounded-2xl shadow-xl border border-white">
                  <p className="text-blue-600 font-black text-center text-xl">Premium Comfort</p>
                  <p className="text-slate-500 font-bold text-center text-sm">Real Photos of our Fleet</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navigation />
      
      <main>{view === 'home' ? <HomeView /> : <AboutView />}</main>
      
      <Footer />

      {/* Floating WhatsApp Support Button */}
      <a 
        href={`https://wa.me/${contactInfo.whatsappNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center animate-bounce"
        title="Chat with Support"
      >
        <MessageCircle size={32} />
      </a>

      {bookingModal.open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black">Subscribe to Route</h3>
                <button onClick={() => setBookingModal({ open: false, route: null })} className="p-2 hover:bg-slate-100 rounded-xl"><X /></button>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                <p className="font-bold text-lg text-slate-900">{bookingModal.route.from} ↔ {bookingModal.route.to}</p>
                <p className="text-blue-600 font-black text-3xl mt-1">₹{bookingModal.route.price}<span className="text-sm text-slate-400">/month</span></p>
              </div>
              
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/20 focus:outline-none" 
                  />
                  <input 
                    type="email" 
                    placeholder="Office Email Address" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold focus:ring-2 focus:ring-blue-600/20 focus:outline-none" 
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Confirm Interest on WhatsApp
                </button>
                <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">
                  Opens WhatsApp to share your details
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;