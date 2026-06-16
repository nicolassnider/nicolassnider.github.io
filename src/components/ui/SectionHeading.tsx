import React from 'react';

interface SectionHeadingProps {
  title: string;
  colorClass: string;
}

export default function SectionHeading({ title, colorClass = "bg-blue-600" }: { title: string, colorClass?: string }) {
  return (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center">
      <span className={`w-8 h-1 mr-4 rounded-full ${colorClass}`}></span>
      {title}
    </h2>
  );
}
