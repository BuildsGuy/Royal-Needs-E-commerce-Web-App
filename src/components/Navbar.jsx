import { UserIcon, ShoppingCart, Menu, X } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.png';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/products/ProductSlice';

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.product.searchTerm);

    const handleUser = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md w-full">
            {/* Top Bar: Navigation Links & User Menu */}
            <div className="py-4 border-b border-gray-100">
                <nav className="container mx-auto flex justify-between items-center px-4 md:px-6 relative">
                    {/* Navigation Links */}
                    <ul className="flex gap-4 sm:gap-6 text-sm font-medium text-gray-700">
                        <li>
                            <Link to="/" className="hover:text-black transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-black transition-colors">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-black transition-colors">FAQs</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-black transition-colors">Contact</Link>
                        </li>
                    </ul>

                    {/* User Profile Trigger & Dropdown Menu */}
                    <div className="relative">
                        <button 
                            onClick={handleUser}
                            aria-label="User menu"
                            className="focus:outline-none block"
                        >
                            <UserIcon 
                                size={40}
                                className="bg-gray-200 p-2 text-black rounded cursor-pointer hover:bg-gray-300 transition-colors" 
                            />
                        </button>

                        {/* Dropdown Card */}
                        {isOpen && (
                            <ul className="absolute right-0 top-12 z-50 bg-white shadow-xl border border-gray-100 rounded-md p-4 w-40 flex flex-col gap-3 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                                <li>
                                    <Link to="/" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Sign in</Link>
                                </li>
                                <li>
                                    <Link to="/" className="block text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>My Account</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>

            {/* Main Bar: Logo, Search, and Cart */}
            <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
                <div className="flex justify-between items-center gap-4">
                    {/* Brand Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/" className="rounded">
                            <img src={hero} alt="logo" className="w-28 md:w-32 rounded object-contain" />
                        </Link>
                    </div> 

                    {/* Desktop Search Input */}
                    <form className="w-full max-w-xl md:block hidden mx-4">
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Search Product..." 
                                className="bg-zinc-100 rounded-md border border-zinc-300 focus:border-zinc-400 focus:bg-white focus:outline-none py-2.5 px-4 w-full transition-all text-sm"
                                value={searchTerm}
                                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                            />
                        </div>
                    </form>

                    {/* Shopping Cart */}
                    <div className="flex-shrink-0">
                        <Link to="/" aria-label="Shopping Cart">
                            <ShoppingCart size={44} className="cursor-pointer bg-gray-100 p-2.5 rounded-full hover:bg-gray-200 transition-colors" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Search Input (Visible only on smaller screens) */}
                <form className="w-full mt-4 md:hidden block">
                    <input 
                        type="text" 
                        placeholder="Search Product..." 
                        className="bg-zinc-100 rounded-md border border-zinc-300 focus:outline-none py-2.5 px-4 w-full text-sm"
                        value={searchTerm}
                        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    />
                </form>
            </div>
        </header>
    );
}

export default Navbar;