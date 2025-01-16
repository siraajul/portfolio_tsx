import React from "react";
import { Code2, Palette, Layout, Sparkles, TabletSmartphone } from "lucide-react";

const skills = [
   {
    category: "Mobile App Development",
    icon: <TabletSmartphone className="w-6 h-6" />,
    items: [
      "Flutter",
      "SwiftUI",
    ],
  },
  {
    category: "Web Development",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      " HTML5 - CSS3",
      "JavaScript - TypeScript",
      "React",
      "NEXT.js",
    ],
  },
  {
    category: "UI/UX & Styling",
    icon: <Palette className="w-6 h-6" />,
    items: [
      "Tailwind CSS",
      "Responsive Design",
      "Next UI",
      "AntDesign",
    ],
  },
  
  {
    category: "Additional Skills",
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      "RESTful APIs",
      "Performance Optimization",
      "Firebase",
      "Appwrite"
      "GetX",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="skills">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-sm sm:text-base text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 text-gray-900">
            GitHub Contributions
          </h3>
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/4f46e5/siraajul`}
              alt="GitHub Contributions Graph"
              className="w-full min-w-[600px] h-auto"
            />
            <p className="text-center text-sm sm:text-base text-gray-600 mt-4">
              View my complete contribution history on{" "}
              <a
                href="https://github.com/siraajul"
                className="text-indigo-600 hover:text-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
