import React from 'react';
import homeBg from '../assets/homeBg.jpg';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/products/ProductSlice';



const categories = [
    "Shampoo",
    "Hair Set",
    "Tumeric Soap",
    "Face Wash",
    "Hair Oil",
    "Conditioner",
    "All",
    
    
];

function Home() {

    const dispatch = useDispatch();

    return (
        <div>
            <div className="bg"
            style={{ backgroundImage: `url(${homeBg})` }}>

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