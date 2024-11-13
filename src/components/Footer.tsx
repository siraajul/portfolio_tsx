import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Sirajul Islam</p>
            <p className="text-gray-400">Frontend Engineer</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/siraajul"
              className="hover:text-indigo-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/siraajul/"
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shirajulislamparvez@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Sirajul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
