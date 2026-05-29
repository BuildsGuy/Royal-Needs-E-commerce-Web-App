import { Link } from "react-router-dom";
import React from "react";

function ProductCard({ product }) {
    // Graceful fallback values to prevent errors if data is missing
    const { id, image, title = "", description = "", price = "0.00" } = product || {};
    
    return (
        <Link to={`/product/${id}`} className="block group">
            <div className="bg-white shadow-lg rounded-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col">
                
                {/* Image Container with fixed aspect ratio */}
                <div className="w-full bg-white p-4 flex items-center justify-center h-48 sm:h-56 md:h-64 flex-shrink-0">
                    <img 
                        src={image} 
                        alt={title} 
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
                
                {/* Content Area */}
                <div className="bg-gray-50 p-4 flex flex-col flex-grow">
                    {/* Title with smart responsive truncation */}
                    <h2 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-1 mb-3 min-h-[1.5rem] md:min-h-[1.75rem]">
                        {title}
                    </h2>
                    
                    {/* Description with responsive multi-line truncation */}
                    <p className="text-xs md:text-sm text-zinc-500 border-b border-zinc-200 pb-4 line-clamp-2 flex-grow min-h-[2.5rem] md:min-h-[3rem]">
                        {description}
                    </p>
                    
                    {/* Footer Section */}
                    <div className="flex justify-between items-center mt-4 pt-1">
                        <p className="text-lg md:text-xl font-bold text-gray-900">
                            GHC {Number(price).toFixed(2)}
                        </p>
                        <p className="text-xs md:text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                            View Details
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;