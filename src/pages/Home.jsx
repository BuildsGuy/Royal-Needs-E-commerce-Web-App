import React from 'react';
import homeBg from '../assets/homeBg.jpg';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../features/products/ProductSlice';

const categories = [
    "All",
    "Shampoo",
    "Hair Set",
    "Tumeric Soap",
    "Face Wash",
    "Hair Oil",
    "Conditioner",
];

function Home() {
    const dispatch = useDispatch();
    // Optional: pull active category to style the active button conditionally if desired
    const activeCategory = useSelector((state) => state.product?.selectedCategory || "All");

    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Hero Section Container */}
            <div 
                className="w-full bg-cover bg-center min-h-[80vh] md:min-h-[85vh] flex items-center relative"
                style={{ backgroundImage: `url(${homeBg})` }}
            >
                {/* Hero Overlay Tint (Optional, ensures high contrast readability on dark/light text) */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 md:px-8 z-10">
                    <div className="max-w-md md:max-w-xl lg:max-w-2xl text-left py-16 md:py-24 flex flex-col items-start justify-center">
                        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-luxury italic font-bold leading-tight tracking-wide drop-shadow-sm w-full">
                            NATURALLY FORMULATED.<br/>
                            SCIENTIFICALLY REFINED.
                        </h2>
                        
                        {/* Hero Buttons wrapper - Perfectly aligned left for mobile and desktop layout */}
                        <div className="flex flex-row items-center justify-start gap-3 mt-6 w-full">
                            <button className="bg-black hover:bg-zinc-800 text-white font-bold py-2.5 px-5 sm:py-3 sm:px-8 rounded-full transition-colors duration-300 text-xs sm:text-sm md:text-base shadow-md flex-shrink-0">
                                Shop Now
                            </button>
                            <button className="bg-white hover:bg-zinc-200 text-black font-bold py-2.5 px-4 sm:py-3 sm:px-7 rounded-full transition-colors duration-300 text-xs sm:text-sm md:text-base shadow-md flex-shrink-0">
                                Contact Us
                            </button>
                        </div>
                        
                        <p className="max-w-lg text-stone-900 font-sans text-sm sm:text-base md:text-lg leading-relaxed tracking-wide mt-12 md:mt-16 bg-white/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-3 md:p-0 rounded-md w-full">
                            Experience the perfect harmony of clean, plant-based botanicals and advanced clinical science. 
                            High-performance elixirs engineered to deeply nourish your skin and revive your tresses.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="container mx-auto my-10 px-4 sm:px-6 md:px-8 flex-grow">
                {/* Scrollable Categories Navigation for Mobile, clean Flex for Desktop */}
                <div className="w-full overflow-x-auto pb-3 mb-6 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div className="flex sm:flex-wrap gap-2 md:gap-4 min-w-max sm:min-w-0">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat;
                            return (
                                <button 
                                    key={cat} 
                                    onClick={() => dispatch(setSelectedCategory(cat))}
                                    className={`py-2 px-4 md:px-5 rounded-md text-sm font-medium transition-all duration-200 active:scale-95 flex-shrink-0
                                        ${isActive 
                                            ? "bg-black text-white shadow-sm" 
                                            : "bg-gray-200 text-black hover:bg-zinc-300"
                                        }`} 
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div> 
                </div>

                {/* Product Grid Dynamic View */}
                <ProductGrid />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;