'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogIn, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change based on auth state
  const [userRole, setUserRole] = useState<'user' | 'admin'>('user'); // Change based on user role

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SP</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 hidden sm:block">
                Space Platform
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/spaces"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Spaces
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  href={userRole === 'admin' ? '/admin' : '/dashboard'}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </Link>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <User size={20} />
                  <span>Profile</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 absolute left-0 right-0 shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/spaces"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Spaces
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="border-t border-gray-200 pt-4 mt-2">
                {isLoggedIn ? (
                  <>
                    <Link
                      href={userRole === 'admin' ? '/admin' : '/dashboard'}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LayoutDashboard size={20} />
                      <span>Dashboard</span>
                    </Link>
                    <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">
                      <User size={20} />
                      <span>Profile</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn size={20} />
                      <span>Login</span>
                    </Link>
                    <Link
                      href="/register"
                      className="block w-full mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-lg font-medium hover:shadow-lg transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}