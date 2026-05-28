import React from 'react';
import logo from "../assets/hero.png"
import { FacebookLogo, TiktokLogoIcon, InstagramLogo, SnapchatLogoIcon } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="bg-slate-900 shadow-md">
            <div className="container mx-auto px-4">
                <div className="min-h-16">
                    <div className="flex justify-between items-center flex-col md:flex-row py-10">
                        <h2 className="text-4xl font-bold text-white">
                            Subscribe to our Newsletter
                        </h2>
                        <form className="md:w-1/3 w-full mt-8 md:mt-0 relative bg-white">
                            <input
                             type="text"
                             placeholder="Enter Your Email" 
                             className="py-4 px-4 rounded shadow-md w-full"
                             />
                            <button className="bg-gray-300 py-3 px-4 rounded-full absolute right-3 top-1">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <div className="bg-slate-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        <div>
                            <img src= {logo} className="my-4"/>
                            <p>
                                Your modern ecommerce website offering you the best products for 
                                your glow. Royal Needs and Cosmetics is here to satisfy all your needs.
                            </p>
                            <div className="flex items center gap-8 mt-5">
                                <FacebookLogo
                                size={40}
                                className="bg-white text-black rounded-md p-2" />
                                <TiktokLogoIcon
                                size={40}
                                className="bg-white text-black rounded-md p-2" />
                                <InstagramLogo
                                size={40}
                                className="bg-white text-black rounded-md p-2" />
                                <SnapchatLogoIcon
                                size={40}
                                className="bg-white text-black rounded-md p-2" />
                            </div>
                        </div>
                    <div>
                        <h2 className="text-2xl font-semibold my-4">Pages</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">FAQs</Link>
                            </li>
                            <li>
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold my-4">Category</h2>
                        <ul>
                            <li>
                                <Link to="/">Shampoos</Link>
                            </li>
                            <li>
                                <Link to="/">Soaps</Link>
                            </li>
                            <li>
                                <Link to="/">Conditioners</Link>
                            </li>
                            <li>
                                <Link to="/">Hair Oils</Link>
                            </li>
                            <li>
                                <Link to="/">Hair Foods</Link>
                            </li>
                            
                        </ul>

                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold my-4">Contact Us</h2>
                        <p>
                            Tema Community 8, GHANA
                        </p>
                        <p>
                            Email: rnhaircare@gmail.com
                        </p>
                        <p>
                            Phone: +233 24 675 8588
                        </p>
                    </div>
                    

                </div>
                </div>
            </div>

            <div className="container mx-auto text-center text-white py-4">
                <p>Copyright © 2026 Royal Needs and Cosmetics. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;