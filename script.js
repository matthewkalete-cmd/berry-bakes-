import React, { useState } from 'react';
import { ChefHat, BookOpen, Utensils, Info, Send, MoveDown, Star, Clock, Globe } from 'lucide-react';

// --- THE 50 ITEM MENU ---
const MENU_ITEMS = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  name: [
    "Truffle Pasta", "Spicy Jollof", "Golden Pad Thai", "Wagyu Tacos", "Honey Glazed Salmon",
    "Saffron Risotto", "Crispy Peking Duck", "Smoked Brisket", "Garlic Butter Lobster", "Moroccan Tajine"
  ][i % 10] + ` ${Math.floor(i / 10) + 1}`,
  price: (Math.random() * 20 + 15).toFixed(2),
  image: `https://picsum.photos/seed/${i + 50}/400/300`,
  desc: "A masterclass in global flavors, prepared with Grandma's secret spices."
}));

export default function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3d2b1f] via-[#5c4033] to-[#2b1d16] text-stone-100 font-sans selection:bg-orange-500">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ChefHat className="text-orange-500" />
          <span className="font-black tracking-tighter text-xl">WE COOK</span>
        </div>
        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
          <button onClick={() => setTab('home')} className={tab === 'home' ? 'text-orange-500' : ''}>Home</button>
          <button onClick={() => setTab('menu')} className={tab === 'menu' ? 'text-orange-500' : ''}>Menu</button>
          <button onClick={() => setTab('about')} className={tab === 'about' ? 'text-orange-500' : ''}>About</button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {tab === 'home' && (
        <section className="pt-32 px-6 flex flex-col items-center text-center">
          <div data-aos="fade-up">
            <h1 className="text-6xl font-black mb-4 leading-tight">TASTE THE <br/> <span className="text-orange-500">EXTRAORDINARY</span></h1>
            <p className="text-stone-400 max-w-md mx-auto mb-8">50 Hand-crafted masterpieces delivered from Grandma's hearth to your table.</p>
          </div>
          
          {/* Scroll Trigger Image - The "Floating Bread" effect */}
          <div className="relative mt-10" data-aos="zoom-in" data-aos-delay="300">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600" 
              className="rounded-full w-64 h-64 object-cover border-8 border-white/10 shadow-2xl animate-[spin_20s_linear_infinite]"
              alt="Artisan Bread"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-orange-600 px-6 py-2 rounded-full font-bold shadow-xl">
               Scroll to Explore
            </div>
          </div>
        </section>
      )}

      {/* MENU PAGE (50 ITEMS) */}
      {tab === 'menu' && (
        <section className="pt-28 pb-20 px-6">
          <div className="text-center mb-12">
             <h2 className="text-4xl font-black italic">The Grand Selection</h2>
             <p className="text-orange-400 font-bold">50 Choices • 1 Soul</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {MENU_ITEMS.map((item) => (
              <div 
                key={item.id} 
                data-aos="fade-up" 
                className="bg-white/5 border border-white/10 p-4 rounded-3xl flex gap-4 hover:bg-white/10 transition-all group"
              >
                <img src={item.image} className="w-24 h-24 rounded-2xl object-cover group-hover:scale-105 transition-transform" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="text-orange-500 font-black">${item.price}</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">{item.desc}</p>
                  <button className="mt-3 text-[10px] uppercase font-black tracking-widest bg-stone-100 text-black px-3 py-1 rounded-full">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABOUT PAGE */}
      {tab === 'about' && (
        <section className="pt-32 px-8 max-w-2xl mx-auto pb-20">
          <div data-aos="fade-right">
            <h2 className="text-5xl font-black mb-6">Our <span className="text-orange-500">Story</span></h2>
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-64 object-cover rounded-[40px] mb-8 shadow-2xl"
              alt="Kitchen"
            />
            <p className="text-xl leading-relaxed text-stone-300 font-serif italic mb-6">
              "We Cook isn't just a business; it's a heritage. We spent decades traveling the globe, learning that the secret ingredient isn't a spice—it's time."
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-orange-600/20 p-6 rounded-3xl border border-orange-500/30">
                  <Star className="text-orange-500 mb-2" />
                  <h4 className="font-bold">5-Star Quality</h4>
                  <p className="text-xs opacity-70">Sourced from local organic farms.</p>
               </div>
               <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                  <Globe className="text-orange-500 mb-2" />
                  <h4 className="font-bold">Global Fusion</h4>
                  <p className="text-xs opacity-70">Recipes from 4 different continents.</p>
               </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer / Contact Trigger */}
      <footer className="p-10 text-center border-t border-white/5 mt-10">
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">Est. 1984 • We Cook Global</p>
      </footer>
    </div>
  );
}


