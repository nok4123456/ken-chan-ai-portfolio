import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e2540] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Contact Me</h3>
            <p className="mb-1">Email: nok4123456@gmail.com</p>
            <p>Location: Hong Kong</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Social Media</h3>
            <ul>
              <li className="mb-1">
                <a
                  href="https://www.linkedin.com/in/chan-ken-863348236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="https://github.com/nok4123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Ken Chan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
