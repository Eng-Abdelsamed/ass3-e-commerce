'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAddressCard,
    faBars,
    faCartShopping,
    faChevronDown,
    faHeart,
    faMagnifyingGlass,
    faPhone,
    faRightFromBracket,
    faUserPlus,
    faTshirt,
    faPersonDress,
    faBaby,
    faSprayCanSparkles,
    faLaptop,
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/images/freshcart-logo.svg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <header className="bg-white">
                <div className="w-full mx-auto px-6 lg:px-10">
                    {/* Top Navbar - Desktop Only */}
                    <div className='hidden lg:flex justify-between items-center text-sm border-b border-gray-200 py-2 text-gray-600'>
                        <ul className='flex gap-6 items-center'>
                            <li className="flex items-center gap-2 hover:text-green-500 transition-colors duration-200">
                                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                                <a href="tel:+ (800) 123-4567">+ (800) 123-4567</a>
                            </li>
                            <li className="flex items-center gap-2 hover:text-green-500 transition-colors duration-200">
                                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
                            </li>
                        </ul>
                        <ul className="flex gap-6 items-center">
                            <li className="hover:text-green-500 transition-colors duration-200">
                                <Link href="/track-order">Track Order</Link>
                            </li>
                            <li className="hover:text-green-500 transition-colors duration-200">
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className="hover:text-green-500 transition-colors duration-200">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="flex gap-4 items-center">
                            <ul className="flex gap-4 items-center border-r border-gray-200 pr-4">
                                <select className="bg-transparent border-none text-sm cursor-pointer focus:outline-none hover:text-green-500 transition-colors duration-200">
                                    <option value="">AED</option>
                                    <option value="">SAR</option>
                                    <option value="">EGP</option>
                                </select>
                            </ul>
                            <ul className="flex gap-4 items-center">
                                <select className="bg-transparent border-none text-sm cursor-pointer focus:outline-none hover:text-green-500 transition-colors duration-200">
                                    <option value="en">English</option>
                                    <option value="ar">Arabic</option>
                                </select>
                            </ul>
                        </div>
                    </div>

                    {/* Main Navigation */}
                    <nav className="flex items-center justify-between py-4 gap-4 lg:gap-8">
                        {/* Hamburger Button - Mobile/Tablet Only */}
                        <button
                            className="lg:hidden text-gray-700 focus:outline-none"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
                        </button>

                        <h1 className="shrink-0">
                            <Link href="/">
                                <Image src={logo} alt="FRESH CART LOGO" className="h-8 lg:h-10 w-auto" />
                            </Link>
                        </h1>

                        <search className="flex-1 max-w-xl relative hidden lg:flex">
                            <input type="text" className="w-full py-2.5 px-4 pr-12 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200" placeholder="Search products..." />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </search>

                        <ul className="flex items-center gap-4 lg:gap-6">
                            <li>
                                <Link href="/wishlist" className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors duration-200">
                                    <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                                    <span className="hidden lg:inline text-sm">Wishlist</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors duration-200 relative">
                                    <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
                                    <span className="hidden lg:inline text-sm">Cart</span>
                                </Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href="/account" className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors duration-200">
                                    <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                                    <span className="text-sm">Account</span>
                                </Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href="/signup" className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors duration-200">
                                    <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5" />
                                    <span className="text-sm">Sign up</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Category Navigation - Desktop Only */}
                <nav className="bg-gray-200 block border-t border-gray-100">
                    <div className="w-full mx-auto px-6 lg:px-10">
                        <div className="flex items-center gap-8 py-3">
                            <div ref={dropdownRef} className="relative">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200"
                                >
                                    <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
                                    <span>All Categories</span>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-64 py-2 z-50 transition-all duration-200 transform origin-top ${isOpen
                                        ? 'opacity-100 scale-y-100 visible'
                                        : 'opacity-0 scale-y-0 invisible'
                                        }`}
                                >
                                    <ul>
                                        <li>
                                            <Link
                                                href="/categories/mens-fashion"
                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                                            >
                                                <FontAwesomeIcon icon={faTshirt} className="w-5 h-5 text-green-500" />
                                                <span>Men&apos;s Fashion</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/categories/womens-fashion"
                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                                            >
                                                <FontAwesomeIcon icon={faPersonDress} className="w-5 h-5 text-green-500" />
                                                <span>Women&apos;s Fashion</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/categories/baby-toys"
                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                                            >
                                                <FontAwesomeIcon icon={faBaby} className="w-5 h-5 text-green-500" />
                                                <span>Baby & Toys</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/categories/beauty-health"
                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                                            >
                                                <FontAwesomeIcon icon={faSprayCanSparkles} className="w-5 h-5 text-green-500" />
                                                <span>Beauty & Health</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/categories/electronics"
                                                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                                            >
                                                <FontAwesomeIcon icon={faLaptop} className="w-5 h-5 text-green-500" />
                                                <span>Electronics</span>
                                            </Link>
                                        </li>
                                        <li className="border-t border-dashed border-gray-200 mt-2 pt-2">
                                            <Link
                                                href="/categories"
                                                className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                                            >
                                                <span>View All Categories</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul className="flex items-center gap-6 text-gray-700 font-medium">
                                <li className="hover:text-green-500 transition-colors duration-200">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="hover:text-green-500 transition-colors duration-200">
                                    <Link href="/recently-added">Recently Added</Link>
                                </li>
                                <li className="hover:text-green-500 transition-colors duration-200">
                                    <Link href="/featured-products">Featured Products</Link>
                                </li>
                                <li className="hover:text-green-500 transition-colors duration-200">
                                    <Link href="/offers">Offers</Link>
                                </li>
                                <li className="hover:text-green-500 transition-colors duration-200">
                                    <Link href="/brands">Brands</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-99 lg:hidden animate-in fade-in duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Menu */}
            <aside
                className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white z-100 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                        <Image src={logo} alt="FRESH CART LOGO" className="h-8 w-auto" />
                    </Link>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {/* Sidebar Search */}
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full py-2.5 px-4 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-green-500"
                            placeholder="Search products..."
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4 hide-on-mobile absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Main Menu Sections */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">Main Menu</h3>
                        <nav className="space-y-1">
                            <Link href="/wishlist" className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all font-medium" onClick={() => setIsSidebarOpen(false)}>
                                <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-green-500" />
                                <span>Wishlist</span>
                            </Link>
                            <Link href="/cart" className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all font-medium" onClick={() => setIsSidebarOpen(false)}>
                                <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5 text-green-500" />
                                <span>Cart</span>
                            </Link>
                            <Link href="/account" className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all font-medium" onClick={() => setIsSidebarOpen(false)}>
                                <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-green-500" />
                                <span>Account</span>
                            </Link>
                        </nav>
                    </div>

                    {/* Account Section */}
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">Account</h3>
                        <nav className="space-y-1">
                            <Link href="/signup" className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all font-medium" onClick={() => setIsSidebarOpen(false)}>
                                <FontAwesomeIcon icon={faUserPlus} className="w-5 h-5 text-green-500" />
                                <span>Sign up</span>
                            </Link>
                            <Link href="/login" className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all font-medium" onClick={() => setIsSidebarOpen(false)}>
                                <FontAwesomeIcon icon={faAddressCard} className="w-5 h-5 text-green-500" />
                                <span>Login</span>
                            </Link>
                            <button className="w-full flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all font-medium text-left">
                                <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5 text-red-500" />
                                <span>Logout</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    )
}
