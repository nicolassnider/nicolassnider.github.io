import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center">
          <span className="w-8 h-1 bg-green-500 mr-4 rounded-full"></span>
          Education & Languages
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">Academic</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Universidad del Salvador (USAL)</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Bachelor of Science in Computer Engineering</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-between mt-4">
                <span>Buenos Aires, Argentina</span>
                <span>Jan 2010 – Jul 2021</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">Languages</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span className="font-semibold text-gray-900 dark:text-white">Spanish</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold rounded-full">Native</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span className="font-semibold text-gray-900 dark:text-white">English</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold rounded-full">C2 Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
