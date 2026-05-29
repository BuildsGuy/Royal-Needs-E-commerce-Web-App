import React from 'react';
import homeBg from '../assets/homeBg.jpg';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
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

    return (
        <div>
            <div className="bg"
            style={{ backgroundImage: `url(${homeBg})` }}>
                <div className="max-w-md md:max-w-xl text-left px-4 sm:px-0 ml-2 md:ml-8 lg:ml-20 py-30">
                <h2 className="text-white text-6xl md:text-6xl lg:text-7xl font-luxury italic font-bold leading-tight tracking-wide">
                    NATURALLY FORMULATED.<br/>
                    SCIENTIFICALLY REFINED.
                </h2>
                <button className="bg-black hover:bg-zinc-800 text-white font-bold py-3 px-8 rounded-full mt-4 ml-4 transition-colors duration-300">
                    Shop Now
                </button>
                <button className="bg-white hover:bg-zinc-300 text-black font-bold py-3 px-7 rounded-full mt-4 ml-4 transition-colors duration-300">
                    Contact Us
                </button>
                
                    <p className="max-w-lg text-stone-800 font-sans md:text-lg leading-relaxed tracking-wide mt-16">
                    Experience the perfect harmony of clean, plant-based botanicals and advanced clinical science. 
                    High-performance elixirs engineered to deeply nourish your skin and revive your tresses.
                    </p>
                
                </div>
            </div>

                



            <div className="container mx-auto my-10 px-4">
               <div className="flex gap-4">
                {categories.map((cat) => {
                    return (
                        <button 
                        className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105
                        hover:bg-zinc-400 transition-all ease-in" 
                        key={cat} 
                        onClick={() => dispatch(setSelectedCategory(cat))}
                        >
                        {cat}
                    </button>
                    );
                })}
                </div> 

                <ProductGrid/>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;