import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function ProductGrid() {
    // Optional chaining setup with fallback to safely handle empty state data
    const products = useSelector((state) => state.product?.filteredItems) || [];

    // Gracefully render an empty state message if no products match the search filter
    if (products.length === 0) {
        return (
            <div className="text-center my-16 px-4">
                <p className="text-zinc-500 text-lg">No products found matching your criteria.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-16 my-12 md:my-24">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;