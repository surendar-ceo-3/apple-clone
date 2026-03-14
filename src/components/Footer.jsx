import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home']
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com']
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App']
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business']
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance']
    }
  ];

  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs text-gray-500 mb-8">
          *Listed pricing is Maximum Retail Price (inclusive of all taxes).
        </p>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-500 hover:text-gray-900 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6 mt-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900 hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Terms of Use</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Sales and Refunds</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Legal</a>
              <a href="#" className="hover:text-gray-900 hover:underline">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;