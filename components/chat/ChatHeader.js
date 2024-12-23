// // // // import React, { useState } from 'react';
// // // // import { Card } from "@/components/ui/card";
// // // // import { Input } from "@/components/ui/input";
// // // // import { ThermometerSun, Users, Bookmark, Hash, Search, X } from "lucide-react";
// // // // import { cn } from "@/lib/utils";

// // // // export const ChatHeader = ({ 
// // // //   activeChannel, 
// // // //   activeCity,
// // // //   onCityClick,
// // // //   channels,
// // // //   bookmarkedItems = [],
// // // //   onToggleBookmark,
// // // //   onSearchMessages
// // // // }) => {
// // // //   const [searchValue, setSearchValue] = useState("");
// // // //   const currentChannel = channels.find(c => 
// // // //     c.country.toLowerCase() === activeChannel.toLowerCase()
// // // //   );
  
// // // //   if (!currentChannel) return null;
  
// // // //   const handleSearch = (e) => {
// // // //     setSearchValue(e.target.value);
// // // //     onSearchMessages?.(e.target.value);
// // // //   };

// // // //   const isBookmarked = bookmarkedItems.some(item => 
// // // //     item.type === 'country' && 
// // // //     item.name.toLowerCase() === activeChannel.toLowerCase()
// // // //   );

// // // //   return (
// // // //     <div className="sticky top-0 z-10 bg-white border-b">
// // // //       <div className="p-4">
// // // //         <div className="flex flex-col gap-4">
// // // //           <div className="flex items-center justify-between">
// // // //             <div className="flex items-center gap-3">
// // // //               <div className="flex items-center gap-2">
// // // //                 <span className="text-xl">{currentChannel.emoji}</span>
// // // //                 <h2 className="text-xl font-bold text-gray-900">
// // // //                   #{activeChannel}
// // // //                 </h2>
// // // //               </div>
// // // //               <span className="text-sm text-gray-500 border-l border-gray-200 pl-3">
// // // //                 {currentChannel.description}
// // // //               </span>
// // // //             </div>
// // // //             <div className="flex items-center gap-4 text-gray-600">
// // // //               <div className="flex items-center gap-2">
// // // //                 <ThermometerSun className="h-5 w-5" />
// // // //                 <span>{currentChannel.temperature}</span>
// // // //               </div>
// // // //               <div className="flex items-center gap-2">
// // // //                 <Users className="h-5 w-5" />
// // // //                 <span>{currentChannel.cities.length} cities</span>
// // // //               </div>
// // // //               <button 
// // // //                 className={cn(
// // // //                   "flex items-center gap-2 transition-colors",
// // // //                   isBookmarked ? "text-blue-600 hover:text-blue-700" : "hover:text-gray-900"
// // // //                 )}
// // // //                 onClick={() => onToggleBookmark?.({ 
// // // //                   type: 'country', 
// // // //                   name: activeChannel,
// // // //                   emoji: currentChannel.emoji 
// // // //                 })}
// // // //               >
// // // //                 <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
// // // //                 <span>{isBookmarked ? "Saved" : "Save"}</span>
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* City tags */}
// // // //           <div className="flex gap-2 flex-wrap">
// // // //             {currentChannel.cities.map((city) => {
// // // //               const isCityActive = activeCity?.name.toLowerCase() === city.name.toLowerCase();
// // // //               return (
// // // //                 <button
// // // //                   key={city.name}
// // // //                   onClick={() => onCityClick?.(city)}
// // // //                   className={cn(
// // // //                     "flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors",
// // // //                     "text-sm font-medium",
// // // //                     isCityActive 
// // // //                       ? "bg-gray-900 text-white" 
// // // //                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// // // //                   )}
// // // //                 >
// // // //                   <Hash className="h-3.5 w-3.5" />
// // // //                   {city.name}
// // // //                 </button>
// // // //               );
// // // //             })}
// // // //           </div>

// // // //           {/* Search box */}
// // // //           <div className="relative">
// // // //             <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
// // // //             <Input
// // // //               value={searchValue}
// // // //               onChange={handleSearch}
// // // //               placeholder="Search in conversation..."
// // // //               className="pl-8 h-9 w-full max-w-md bg-gray-50"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ChatHeader;
// // // // components/chat/ChatHeader.js
// // // import React, { useState } from 'react';
// // // import { Card } from "@/components/ui/card";
// // // import { Input } from "@/components/ui/input";
// // // import { ThermometerSun, Users, Bookmark, Search } from "lucide-react";
// // // import { cn } from "@/lib/utils";

// // // export const ChatHeader = ({ 
// // //   activeChannel,
// // //   channels,
// // //   bookmarkedItems = [],
// // //   onToggleBookmark,
// // //   onSearchMessages
// // // }) => {
// // //   const [searchValue, setSearchValue] = useState("");
// // //   const currentChannel = channels.find(c => 
// // //     c.country.toLowerCase() === activeChannel.toLowerCase()
// // //   );
  
// // //   if (!currentChannel) return null;
  
// // //   const handleSearch = (e) => {
// // //     setSearchValue(e.target.value);
// // //     onSearchMessages?.(e.target.value);
// // //   };

// // //   const isBookmarked = bookmarkedItems.some(item => 
// // //     item.type === 'country' && 
// // //     item.name.toLowerCase() === activeChannel.toLowerCase()
// // //   );

// // //   return (
// // //     <div className="sticky top-0 z-10 bg-white border-b">
// // //       <div className="p-4">
// // //         <div className="flex flex-col gap-4">
// // //           <div className="flex items-center justify-between">
// // //             <div className="flex items-center gap-3">
// // //               <div className="flex items-center gap-2">
// // //                 <span className="text-xl">{currentChannel.emoji}</span>
// // //                 <h2 className="text-xl font-bold text-gray-900">
// // //                   #{activeChannel}
// // //                 </h2>
// // //               </div>
// // //               <span className="hidden sm:inline text-sm text-gray-500 border-l border-gray-200 pl-3">
// // //                 {currentChannel.description}
// // //               </span>
// // //             </div>
// // //             <div className="flex items-center gap-4 text-gray-600">
// // //               <div className="hidden sm:flex items-center gap-2">
// // //                 <ThermometerSun className="h-5 w-5" />
// // //                 <span>{currentChannel.temperature}</span>
// // //               </div>
// // //               <div className="hidden sm:flex items-center gap-2">
// // //                 <Users className="h-5 w-5" />
// // //                 <span>{currentChannel.cities.length} cities</span>
// // //               </div>
// // //               <button 
// // //                 className={cn(
// // //                   "flex items-center gap-2 transition-colors",
// // //                   isBookmarked ? "text-blue-600 hover:text-blue-700" : "hover:text-gray-900"
// // //                 )}
// // //                 onClick={() => onToggleBookmark?.({ 
// // //                   type: 'country', 
// // //                   name: activeChannel,
// // //                   emoji: currentChannel.emoji 
// // //                 })}
// // //               >
// // //                 <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
// // //                 <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Search box */}
// // //           <div className="relative">
// // //             <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
// // //             <Input
// // //               value={searchValue}
// // //               onChange={handleSearch}
// // //               placeholder="Search in conversation..."
// // //               className="pl-8 h-9 w-full max-w-md bg-gray-50"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // import React from 'react';
// // import { Card } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { ThermometerSun, Users, Bookmark, Search, Hash } from "lucide-react";
// // import { cn } from "@/lib/utils";

// // export const ChatHeader = ({ 
// //   activeChannel,
// //   channels,
// //   bookmarkedItems = [],
// //   onToggleBookmark,
// //   onSearchMessages
// // }) => {
// //   const currentChannel = channels.find(c => 
// //     c.country.toLowerCase() === activeChannel.toLowerCase()
// //   );
  
// //   if (!currentChannel) return null;
  
// //   const isBookmarked = bookmarkedItems.some(item => 
// //     item.type === 'country' && 
// //     item.name.toLowerCase() === activeChannel.toLowerCase()
// //   );

// //   return (
// //     <div className="sticky top-0 z-10 bg-white border-b">
// //       <div className="p-4">
// //         <div className="flex flex-col gap-4">
// //           <div className="flex items-center justify-between">
// //             <div className="flex items-center gap-3">
// //               <div className="flex items-center gap-2">
// //                 <span className="text-xl">{currentChannel.emoji}</span>
// //                 <h2 className="text-xl font-bold text-gray-900">
// //                   #{activeChannel}
// //                 </h2>
// //               </div>
// //               <span className="hidden sm:inline text-sm text-gray-500 border-l border-gray-200 pl-3">
// //                 {currentChannel.description}
// //               </span>
// //             </div>
// //             <div className="flex items-center gap-4 text-gray-600">
// //               <div className="hidden sm:flex items-center gap-2">
// //                 <ThermometerSun className="h-5 w-5" />
// //                 <span>{currentChannel.temperature}</span>
// //               </div>
// //               <div className="hidden sm:flex items-center gap-2">
// //                 <Users className="h-5 w-5" />
// //                 <span>{currentChannel.cities.length} cities</span>
// //               </div>
// //               <button 
// //                 className={cn(
// //                   "flex items-center gap-2 transition-colors",
// //                   isBookmarked ? "text-blue-600 hover:text-blue-700" : "hover:text-gray-900"
// //                 )}
// //                 onClick={() => onToggleBookmark?.({ 
// //                   type: 'country', 
// //                   name: activeChannel,
// //                   emoji: currentChannel.emoji 
// //                 })}
// //               >
// //                 <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
// //                 <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
// //               </button>
// //             </div>
// //           </div>

// //           {/* City tags */}
// //           <div className="flex gap-2 flex-wrap">
// //             {currentChannel.cities.map((city) => (
// //               <button
// //                 key={city.name}
// //                 className="flex items-center gap-1 px-3 py-1.5 rounded-full 
// //                          bg-gray-100 text-gray-700 hover:bg-gray-200
// //                          text-sm font-medium transition-colors"
// //               >
// //                 <Hash className="h-3.5 w-3.5" />
// //                 {city.name}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// "use client";

// import React from 'react';
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { ThermometerSun, Users, Bookmark, Search, Hash } from "lucide-react";
// import { cn } from "@/lib/utils";

// const ChatHeader = ({
//   activeChannel,
//   channels,
//   bookmarkedItems = [],
//   onToggleBookmark,
//   onSearchMessages
// }) => {
//   const currentChannel = channels.find(c =>
//     c.country.toLowerCase() === activeChannel.toLowerCase()
//   );
  
//   if (!currentChannel) return null;
  
//   const isBookmarked = bookmarkedItems.some(item =>
//     item.type === 'country' &&
//     item.name.toLowerCase() === activeChannel.toLowerCase()
//   );

//   return (
//     <div className="sticky top-0 z-10 bg-white border-b">
//       <div className="p-4">
//         <div className="flex flex-col gap-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="flex items-center gap-2">
//                 <span className="text-xl">{currentChannel.emoji}</span>
//                 <h2 className="text-xl font-bold text-gray-900">
//                   #{activeChannel}
//                 </h2>
//               </div>
//               <span className="hidden sm:inline text-sm text-gray-500 border-l border-gray-200 pl-3">
//                 {currentChannel.description}
//               </span>
//             </div>
//             <div className="flex items-center gap-4 text-gray-600">
//               <div className="hidden sm:flex items-center gap-2">
//                 <ThermometerSun className="h-5 w-5" />
//                 <span>{currentChannel.temperature}</span>
//               </div>
//               <div className="hidden sm:flex items-center gap-2">
//                 <Users className="h-5 w-5" />
//                 <span>{currentChannel.cities.length} cities</span>
//               </div>
//               <button
//                 className={cn(
//                   "flex items-center gap-2 transition-colors",
//                   isBookmarked ? "text-blue-600 hover:text-blue-700" : "hover:text-gray-900"
//                 )}
//                 onClick={() => onToggleBookmark?.({
//                   type: 'country',
//                   name: activeChannel,
//                   emoji: currentChannel.emoji
//                 })}
//               >
//                 <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
//                 <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
//               </button>
//             </div>
//           </div>

//           {/* City tags */}
//           <div className="flex gap-2 flex-wrap">
//             {currentChannel.cities.map((city) => (
//               <button
//                 key={city.name}
//                 className="flex items-center gap-1 px-3 py-1.5 rounded-full
//                          bg-gray-100 text-gray-700 hover:bg-gray-200
//                          text-sm font-medium transition-colors"
//               >
//                 <Hash className="h-3.5 w-3.5" />
//                 {city.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatHeader;
"use client";
import React from 'react';
import { ThermometerSun, Users, Bookmark, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const ChatHeader = ({
  activeChannel,
  channels,
  bookmarkedItems = [],
  onToggleBookmark,
  onSearchMessages
}) => {
  const currentChannel = channels.find(c => 
    c.country.toLowerCase() === activeChannel.toLowerCase()
  );
  
  if (!currentChannel) return null;
  
  const isBookmarked = bookmarkedItems.some(item =>
    item.type === 'country' &&
    item.name.toLowerCase() === activeChannel.toLowerCase()
  );

  return (
    <div className="sticky top-0 z-10 bg-white border-b">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">{currentChannel.emoji}</span>
              <h2 className="text-xl font-bold text-gray-900">
                #{activeChannel}
              </h2>
            </div>
            <span className="hidden sm:inline text-sm text-gray-500 border-l border-gray-200 pl-3">
              {currentChannel.description}
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="hidden sm:flex items-center gap-2">
              <ThermometerSun className="h-5 w-5" />
              <span>{currentChannel.temperature}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{currentChannel.cities.length} cities</span>
            </div>
            <button
              className={cn(
                "flex items-center gap-2 transition-colors",
                isBookmarked ? "text-blue-600 hover:text-blue-700" : "hover:text-gray-900"
              )}
              onClick={() => onToggleBookmark?.({
                type: 'country',
                name: activeChannel,
                emoji: currentChannel.emoji
              })}
            >
              <Bookmark className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
              <span className="hidden sm:inline">{isBookmarked ? "Saved" : "Save"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;