import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 text-center space-y-4">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold">Sikkim Government Secondary School</h3>
          <p className="text-sm text-gray-400">
            Offering a perfect blend of tradition and modern education.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8H7v4H4v3h3v7h3v-7h3l1-3h-4V9c0-.5.2-1 1-1h3V5h-3c-2.8 0-5 2.2-5 5v2z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 5.92V6a10.66 10.66 0 01-6-2 4.48 4.48 0 001.39 6.14A4.4 4.4 0 012 9.71v.05A4.48 4.48 0 004.47 15a4.52 4.52 0 01-2 .07A4.48 4.48 0 006 17.21a9 9 0 01-5.6 1.94A9.18 9.18 0 010 19a12.78 12.78 0 006.92 2c8.31 0 12.87-6.92 12.87-12.91q0-.29-.01-.57A9.35 9.35 0 0023 3z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2C4.45 2 2 4.46 2 7.75v8.5C2 19.54 4.46 22 7.75 22h8.5c3.3 0 5.75-2.46 5.75-5.75v-8.5C22 4.46 19.54 2 16.25 2h-8.5zm8.25 4c.67 0 1.2.53 1.2 1.2v1.6c0 .67-.53 1.2-1.2 1.2h-1.6a1.2 1.2 0 01-1.2-1.2V7.2c0-.67.53-1.2 1.2-1.2h1.6zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; 2025 Sikkim Government Secondary School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
