"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Welcome to Webild
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This is a demo page showcasing the theme system. No navbar or sections have been configured in the plan yet.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Light Theme Active</h3>
              <p className="text-gray-600">Primary: Light Blue (#0197f6)</p>
              <p className="text-gray-600">Secondary: Teal (#03dac5)</p>
              <p className="text-gray-600">Background: Light Blue (#e8f5ff)</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Theme System</h3>
              <p className="text-gray-600">Border Radius: Rounded</p>
              <p className="text-gray-600">Button Variant: Text Stagger</p>
              <p className="text-gray-600">Text Animation: Entrance Slide</p>
            </div>
          </div>
          
          <div className="pt-8">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}