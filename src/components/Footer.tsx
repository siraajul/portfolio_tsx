import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-base sm:text-lg font-semibold">Sirajul Islam</p>
            <p className="text-sm sm:text-base text-gray-400">
              Frontend Engineer
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/siraajul"
              className="hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} sm:size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/siraajul/"
              className="hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} sm:size={24} />
            </a>
            <a
              href="mailto:shirajulislamparvez@gmail.com"
              className="hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} sm:size={24} />
            </a>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Sirajul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
