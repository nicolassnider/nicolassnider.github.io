import React from 'react';

interface SectionHeadingProps {
  title: string;
  number?: string;
  colorClass?: string;
}

export default function SectionHeading({
  title,
  number,
  colorClass = 'bg-blue-600'
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-10" data-aos="fade-right">
      <span className={`w-8 h-1 rounded-full ${colorClass}`}></span>
      {number && (
        <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200/60 dark:border-blue-800/60 select-none">
          {number}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
    </div>
  );
}
