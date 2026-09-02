import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  currentPage: string;
  parentPath?: string;
  parentName?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  currentPage,
  parentPath,
  parentName,
}) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {parentPath && parentName && (
            <>
              <li>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </li>
              <li>
                <Link
                  to={parentPath}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  {parentName}
                </Link>
              </li>
            </>
          )}
          <li>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          </li>
          <li className="font-semibold text-slate-900 dark:text-white" aria-current="page">
            {currentPage}
          </li>
        </ol>
      </div>

      {/* Structured Data for Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://srijankipharma.com/"
            },
            ...(parentPath && parentName ? [{
              "@type": "ListItem",
              "position": 2,
              "name": parentName,
              "item": `https://srijankipharma.com${parentPath}`
            }] : []),
            {
              "@type": "ListItem",
              "position": parentPath ? 3 : 2,
              "name": currentPage,
              "item": window.location.href
            }
          ]
        })}
      </script>
    </nav>
  );
};
