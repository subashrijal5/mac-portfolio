import React from 'react';

interface V2DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const V2Dialog: React.FC<V2DialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-[2px]" 
        onClick={onClose} 
      />
      <div className="
        relative 
        w-[400px]
        bg-white/90 dark:bg-[#323232]/90
        rounded-lg
        shadow-2xl shadow-black/20
        backdrop-blur-xl
        overflow-hidden
        flex flex-col
      ">
        {/* Header with window controls */}
        <div className="h-12 relative flex items-center justify-center border-b border-black/10 dark:border-white/10">
          <div className="absolute left-3 top-4 flex items-center gap-2">
            <button 
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/90 transition-colors"
            />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            What's New in V2
          </h3>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <span className="i-carbon-rocket text-3xl text-blue-500" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Check out the new version
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Experience the next evolution with powerful new features 
                and a fresh new look.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="i-carbon-paint-brush text-blue-500" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Modern UI</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="i-carbon-moon text-purple-500" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Dark Mode</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="i-carbon-flash text-yellow-500" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Fast & Smooth</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/5 dark:bg-white/5">
              <span className="i-carbon-template text-green-500" />
              <span className="text-sm text-gray-700 dark:text-gray-200">New Useful features</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="
          p-4
          flex justify-end gap-2 
          bg-gray-50/80 dark:bg-[#292929]/80
          border-t border-black/10 dark:border-white/10
        ">
          <button
            onClick={onClose}
            className="
              px-4 py-1.5
              text-sm font-medium
              text-gray-600 dark:text-gray-300
              bg-white dark:bg-[#3a3a3a]
              border border-gray-200 dark:border-gray-600
              rounded-md
              hover:bg-gray-50 dark:hover:bg-[#404040]
              transition-colors
            "
          >
            Not Now
          </button>
          <a
            href="https://v2.subashrijal.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-1.5
              text-sm font-medium
              bg-blue-500 hover:bg-blue-600
              text-white
              rounded-md
              transition-colors
            "
          >
            Try V2
          </a>
        </div>
      </div>
    </div>
  );
};

export default V2Dialog;
