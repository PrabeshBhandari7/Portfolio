import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-white">
      <div className="container mx-auto max-w-7xl border-t border-gray-800 pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand Logo styled like screenshot */}
          <div className="text-xl md:text-2xl font-black uppercase cursor-pointer tracking-wider text-white" id='#Header'>
            PORTFOLIO<span className="text-[#06a2c2]">.</span>
          </div>

          {/* Social Icons (GitHub, LinkedIn, Instagram) */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/prabesh1222/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#06a2c2] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prabesh-bhandari-766a10361"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#06a2c2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/prabesh_bhandari123/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#06a2c2] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Rights Reserved */}
          <div className="text-sm text-gray-500">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;