import React from 'react';

export interface IconTooltipLinkProps {
  href: string;
  ariaLabel: string;
  tooltipText: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  tooltipId: string;
  variant: 'purple' | 'red';
}

export default function IconTooltipLink({ href, ariaLabel, tooltipText, icon, tooltipId, variant }: IconTooltipLinkProps) {
  const isPurple = variant === 'purple';
  
  const linkBaseClass = "p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-110 shadow-sm flex items-center justify-center focus-visible:ring-2 focus-visible:outline-none";
  const linkVariantClass = isPurple
    ? "hover:bg-purple-100 dark:hover:bg-purple-950/50 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-800 focus-visible:ring-purple-500"
    : "hover:bg-red-100 dark:hover:bg-red-950/50 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-900 focus-visible:ring-red-500";
    
  const tooltipBaseClass = "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-xs font-semibold text-white rounded-md opacity-0 scale-75 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:scale-100 transition-all duration-200 origin-bottom pointer-events-none whitespace-nowrap shadow-lg z-20 flex items-center gap-1";
  const tooltipVariantClass = isPurple ? "bg-purple-600 dark:bg-purple-500" : "bg-red-600 dark:bg-red-500";
  
  const arrowVariantClass = isPurple
    ? "border-t-purple-600 dark:border-t-purple-500"
    : "border-t-red-600 dark:border-t-red-500";

  return (
    <div className="relative group/tooltip">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${linkBaseClass} ${linkVariantClass}`}
        aria-label={ariaLabel}
        aria-describedby={tooltipId}
      >
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </a>
      <span 
        id={tooltipId}
        role="tooltip"
        className={`${tooltipBaseClass} ${tooltipVariantClass}`}
      >
        {tooltipText}
        <span className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${arrowVariantClass}`}></span>
      </span>
    </div>
  );
}
