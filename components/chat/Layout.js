// // components/chat/Layout.js
// "use client";

// import { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext();

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export const themes = {
//   light: {
//     name: "Light",
//     primary: "bg-white",
//     hover: "hover:bg-gray-100",
//     sidebar: {
//       bg: "bg-gray-100",
//       hover: "hover:bg-gray-200",
//       active: "bg-gray-200",
//       text: "text-gray-600",
//       textActive: "text-gray-900",
//     },
//     channel: {
//       hover: "hover:bg-gray-200",
//       active: "bg-gray-200",
//       text: "text-gray-600",
//       textActive: "text-gray-900",
//     },
//     input: {
//       bg: "bg-white",
//       border: "border-gray-200",
//       text: "text-gray-900",
//       placeholder: "placeholder-gray-400",
//     },
//     header: {
//       bg: "bg-white",
//       border: "border-gray-200",
//       text: "text-gray-900",
//     },
//   },
// };

// export function ThemeProvider({ children }) {
//   const [currentTheme, setCurrentTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function ChatLayout({ children }) {
//   const { currentTheme, themes } = useTheme();
//   const theme = themes[currentTheme];

//   return (
//     <div className="fixed inset-0 flex flex-col">
//       <div className="flex-1 flex overflow-hidden">
//         <main className="flex-1 flex relative">
//           <div className="w-full flex flex-col">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
'use client';
import { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
export const themes = {
  light: {
    name: "Light",
    primary: "bg-white",
    hover: "hover:bg-gray-100",
    sidebar: {
      bg: "bg-gray-100",
      hover: "hover:bg-gray-200",
      active: "bg-gray-200",
      text: "text-gray-600",
      textActive: "text-gray-900",
    },
    channel: {
      hover: "hover:bg-gray-200",
      active: "bg-gray-200",
      text: "text-gray-600",
      textActive: "text-gray-900",
    },
    input: {
      bg: "bg-white",
      border: "border-gray-200",
      text: "text-gray-900",
      placeholder: "placeholder-gray-400",
    },
    header: {
      bg: "bg-white",
      border: "border-gray-200",
      text: "text-gray-900",
    },
  },
};
export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function ChatLayout({ children }) {
  const { currentTheme, themes } = useTheme();
  const theme = themes[currentTheme];
  return (
    <div className="fixed inset-0 flex flex-col bg-background">
      <div className="flex-1 flex overflow-hidden">
        <main className="flex-1 flex relative">
          <div className="w-full flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 