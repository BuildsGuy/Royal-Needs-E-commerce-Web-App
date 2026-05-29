import React from 'react';
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) =>
        state.product?.items?.find((p) => p.id === parseInt(id))
    );

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="text-center max-w-sm mx-auto bg-gray-50 rounded-lg p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Product Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-2 transition-colors">
                        <ArrowLeft size={16} /> Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
            <div className="max-w-6xl mx-auto">
                {/* Back Button Link */}
                <Link 
                    to="/" 
                    className="mb-6 md:mb-8 inline-flex items-center gap-2 text-zinc-600 hover:text-black font-medium text-sm group transition-colors"
                >
                    <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                    Back to Products
                </Link>

                {/* Main Content Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                    
                    {/* Image Container Panel - Fixed forced 600px container to be perfectly responsive */}
                    <div className="w-full max-w-xl mx-auto bg-white border border-gray-100 shadow-md p-4 sm:p-6 rounded-md flex items-center justify-center h-64 sm:h-96 md:h-[450px] lg:h-[500px]">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    
                    {/* Product Specs Details Panel */}
                    <div className="flex flex-col h-full justify-center pt-2 md:pt-0">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            {product.title}
                        </h1>
                        
                        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                            {product.description}
                        </p>
                        
                        {/* Price Tag */}
                        <div className="mb-6">
                            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                                GHC {Number(product.price).toFixed(2)}
                            </span>
                        </div>
                        
                        {/* Category Label Section */}
                        {product.category && (
                            <div className="mb-8">
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Category</h3>
                                <span className="inline-block bg-gray-200 text-gray-800 rounded-full px-4 py-1 text-xs sm:text-sm font-medium">
                                    {product.category}
                                </span>
                            </div>
                        )}
                        
                        {/* Interactive Add to Cart CTA Button */}
                        <div className="w-full mt-auto">
                            <button className="w-full md:w-auto min-w-[200px] bg-zinc-200 text-gray-900 px-8 py-3.5 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-zinc-300 active:scale-[0.99] transition-all text-sm sm:text-base shadow-sm">
                                <ShoppingCart size={20} /> 
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetails;