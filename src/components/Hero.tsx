import React from "react";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6">
      <div className="container mx-auto py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            <div className="relative w-48 sm:w-56 md:w-64 aspect-square">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://avatars.githubusercontent.com/u/28106814?v=4"
                  alt="Sirajul Islam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Hi,
                <br /> I'm{" "}
                <span className="text-indigo-600">Sirajul Islam</span> 👋
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-700 mb-6">
                Frontend Engineer crafting beautiful Web experiences
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                I specialize in building responsive, user-friendly Web
                applications using ReactJS, NodeJS and modern technologies.
                Currently seeking new opportunities to create impactful digital
                experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="mailto:shirajulislamparvez@gmail.com"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Mail size={20} />
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1Qq6Tnhqz6KVxAOSuymd447-0D3I0w_TD/view?usp=sharing"
                  download
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  <FileDown size={20} />
                  Download CV
                </a>
                <div className="flex gap-4 mt-4 sm:mt-0">
                  <a
                    href="https://github.com"
                    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
