import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '', inline = false }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if content contains LaTeX markers like $...$ or $$...$$
    if (content.includes('$')) {
      const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[^\$]*?\$)/g);
      const renderedHtml = parts
        .map((part) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            const math = part.slice(2, -2).trim();
            try {
              return katex.renderToString(math, { displayMode: true, throwOnError: false });
            } catch {
              return `<span>${part}</span>`;
            }
          } else if (part.startsWith('$') && part.endsWith('$')) {
            const math = part.slice(1, -1).trim();
            try {
              return katex.renderToString(math, { displayMode: false, throwOnError: false });
            } catch {
              return `<span>${part}</span>`;
            }
          }
          // Regular text
          return part.replace(/\n/g, '<br/>');
        })
        .join('');

      containerRef.current.innerHTML = renderedHtml;
    } else {
      // If no dollar signs, check if it's a pure formula or plain text
      containerRef.current.textContent = content;
    }
  }, [content]);

  return <span ref={containerRef} className={`inline-block leading-relaxed ${className}`} />;
};

export default MathRenderer;
