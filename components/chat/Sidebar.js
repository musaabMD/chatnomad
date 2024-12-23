// // // // components/chat/Sidebar.js
// // // "use client";


// // // // import React, { useState } from "react";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Search, Plus, Hash, Globe, Building2 } from "lucide-react";
// // // // import { cn } from "@/lib/utils";

// // // // export const Sidebar = ({ 
// // // //   channels, 
// // // //   activeChannel,
// // // //   setActiveChannel,
// // // //   onSelectItem,
// // // //   selectedItem
// // // // }) => {
// // // //   const [searchQuery, setSearchQuery] = useState("");
// // // //   const [activeTab, setActiveTab] = useState("countries");

// // // //   // Get all unique cities for the current active channel only
// // // //   const currentChannelCities = channels
// // // //     .find(channel => channel.country.toLowerCase() === activeChannel.toLowerCase())
// // // //     ?.cities || [];

// // // //   const filteredChannels = channels.filter(channel =>
// // // //     channel.country.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   const filteredCities = currentChannelCities.filter(city =>
// // // //     city.name.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   const ChannelButton = ({ item, type }) => {
// // // //     const isCountry = type === 'countries';
// // // //     const itemId = isCountry ? item.country : item.id;
// // // //     const currentCountry = channels.find(c => c.country.toLowerCase() === activeChannel.toLowerCase());
    
// // // //     const isSelected = selectedItem ? 
// // // //       (isCountry ? 
// // // //         selectedItem.type === 'country' && selectedItem.name.toLowerCase() === item.country.toLowerCase() :
// // // //         selectedItem.type === 'city' && selectedItem.name.toLowerCase() === item.name.toLowerCase()) : 
// // // //       false;
    
// // // //     return (
// // // //       <button
// // // //         className={cn(
// // // //           "w-full text-left px-3 py-2 rounded-md transition-colors",
// // // //           "flex items-center gap-2 text-sm group",
// // // //           "hover:bg-gray-200/70",
// // // //           isSelected ? "bg-gray-200 text-gray-900" : "text-gray-700"
// // // //         )}
// // // //         onClick={() => {
// // // //           if (isCountry) {
// // // //             onSelectItem?.({ 
// // // //               type: 'country', 
// // // //               name: item.country, 
// // // //               emoji: item.emoji 
// // // //             });
// // // //             setActiveChannel(item.country);
// // // //           } else {
// // // //             onSelectItem?.({ 
// // // //               type: 'city', 
// // // //               name: item.name, 
// // // //               emoji: currentCountry.emoji, 
// // // //               country: currentCountry.country 
// // // //             });
// // // //           }
// // // //         }}
// // // //       >
// // // //         <span className="text-base">{isCountry ? item.emoji : currentCountry.emoji}</span>
// // // //         <Hash className="h-3 w-3 text-gray-500" />
// // // //         <span className={cn(
// // // //           "flex-1 truncate",
// // // //           isSelected ? "font-bold" : "font-semibold"
// // // //         )}>
// // // //           {isCountry ? item.country : item.name}
// // // //         </span>
// // // //       </button>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div className="w-60 h-full bg-gray-100 border-r border-gray-200 flex flex-col">
// // // //       <div className="p-3 space-y-4 h-full flex flex-col">
// // // //         <div className="relative flex-shrink-0">
// // // //           <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
// // // //           <Input
// // // //             placeholder="Search..."
// // // //             value={searchQuery}
// // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // //             className="pl-8 h-9 bg-white border-gray-200"
// // // //           />
// // // //         </div>

// // // //         <div className="flex border-b border-gray-200 flex-shrink-0">
// // // //           <button
// // // //             onClick={() => setActiveTab("countries")}
// // // //             className={cn(
// // // //               "flex-1 px-4 py-2 text-sm font-medium transition-colors",
// // // //               "flex items-center justify-center gap-2",
// // // //               activeTab === "countries" 
// // // //                 ? "border-b-2 border-gray-900 text-gray-900" 
// // // //                 : "text-gray-600 hover:text-gray-900"
// // // //             )}
// // // //           >
// // // //             <Globe className="h-4 w-4" />
// // // //             Countries
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setActiveTab("cities")}
// // // //             className={cn(
// // // //               "flex-1 px-4 py-2 text-sm font-medium transition-colors",
// // // //               "flex items-center justify-center gap-2",
// // // //               activeTab === "cities" 
// // // //                 ? "border-b-2 border-gray-900 text-gray-900" 
// // // //                 : "text-gray-600 hover:text-gray-900"
// // // //             )}
// // // //           >
// // // //             <Building2 className="h-4 w-4" />
// // // //             Cities
// // // //           </button>
// // // //         </div>

// // // //         <div className="flex-1 overflow-y-auto no-scrollbar">
// // // //           <div className="space-y-[2px] min-h-full">
// // // //             {activeTab === "countries" ? (
// // // //               <div className="space-y-[2px]">
// // // //                 {filteredChannels.map((channel) => (
// // // //                   <ChannelButton 
// // // //                     key={channel.country} 
// // // //                     item={channel}
// // // //                     type="countries"
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //               <div className="space-y-[2px]">
// // // //                 {filteredCities.map((city) => (
// // // //                   <ChannelButton
// // // //                     key={`${activeChannel}-${city.name}`}
// // // //                     item={city}
// // // //                     type="cities"
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>

// // // //         <button 
// // // //           className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200/70 text-gray-600 flex-shrink-0"
// // // //         >
// // // //           <Plus className="h-4 w-4" />
// // // //           <span className="text-sm font-medium">Add New</span>
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // import React, { useState } from "react";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Search, Plus, Hash } from "lucide-react";
// // // // import { cn } from "@/lib/utils";

// // // // export const Sidebar = ({ 
// // // //   channels, 
// // // //   activeChannel,
// // // //   setActiveChannel,
// // // //   onSelectItem,
// // // //   selectedItem
// // // // }) => {
// // // //   const [searchQuery, setSearchQuery] = useState("");

// // // //   const filteredChannels = channels.filter(channel =>
// // // //     channel.country.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   const ChannelButton = ({ item }) => {
// // // //     const isSelected = selectedItem ? 
// // // //       (selectedItem.type === 'country' && 
// // // //        selectedItem.name.toLowerCase() === item.country.toLowerCase()) : 
// // // //       false;
    
// // // //     return (
// // // //       <button
// // // //         className={cn(
// // // //           "w-full text-left px-3 py-2 rounded-md transition-colors",
// // // //           "flex items-center gap-2 text-sm group",
// // // //           "hover:bg-gray-200/70",
// // // //           isSelected ? "bg-gray-200 text-gray-900" : "text-gray-700"
// // // //         )}
// // // //         onClick={() => {
// // // //           onSelectItem?.({ 
// // // //             type: 'country', 
// // // //             name: item.country, 
// // // //             emoji: item.emoji 
// // // //           });
// // // //           setActiveChannel(item.country);
// // // //         }}
// // // //       >
// // // //         <span className="text-base">{item.emoji}</span>
// // // //         <Hash className="h-3 w-3 text-gray-500" />
// // // //         <span className={cn(
// // // //           "flex-1 truncate",
// // // //           isSelected ? "font-bold" : "font-semibold"
// // // //         )}>
// // // //           {item.country}
// // // //         </span>
// // // //       </button>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div className="w-60 h-full bg-gray-100 border-r border-gray-200 flex flex-col">
// // // //       <div className="p-3 space-y-4 h-full flex flex-col">
// // // //         <div className="relative flex-shrink-0">
// // // //           <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
// // // //           <Input
// // // //             placeholder="Search countries..."
// // // //             value={searchQuery}
// // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // //             className="pl-8 h-9 bg-white border-gray-200"
// // // //           />
// // // //         </div>

// // // //         <div className="flex-1 overflow-y-auto no-scrollbar">
// // // //           <div className="space-y-[2px]">
// // // //             {filteredChannels.map((channel) => (
// // // //               <ChannelButton 
// // // //                 key={channel.country} 
// // // //                 item={channel}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <button 
// // // //           className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200/70 text-gray-600 flex-shrink-0"
// // // //         >
// // // //           <Plus className="h-4 w-4" />
// // // //           <span className="text-sm font-medium">Add New</span>
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // "use client";
// // // import React, { useState } from "react";
// // // import { Input } from "@/components/ui/input";
// // // import { Search, Plus, Hash, Globe, Building2, ArrowRight, X } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { cn } from "@/lib/utils";
// // // import Link from 'next/link';

// // // export const Sidebar = ({ 
// // //   channels, 
// // //   activeChannel,
// // //   setActiveChannel,
// // //   onSelectItem,
// // //   selectedItem,
// // //   className,
// // //   onClose
// // // }) => {
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [activeTab, setActiveTab] = useState("countries");

// // //   // Get all unique cities for the current active channel
// // //   const currentChannelCities = channels
// // //     .find(channel => channel.country.toLowerCase() === activeChannel.toLowerCase())
// // //     ?.cities || [];

// // //   // Double the channels and cities for testing scroll
// // //   const testChannels = [...channels, ...channels.map(ch => ({
// // //     ...ch,
// // //     country: `${ch.country} (2)`,
// // //   }))];

// // //   const testCities = [...currentChannelCities, ...currentChannelCities.map(city => ({
// // //     ...city,
// // //     name: `${city.name} (2)`,
// // //   }))];

// // //   const filteredChannels = testChannels.filter(channel =>
// // //     channel.country.toLowerCase().includes(searchQuery.toLowerCase())
// // //   );

// // //   const filteredCities = testCities.filter(city =>
// // //     city.name.toLowerCase().includes(searchQuery.toLowerCase())
// // //   );

// // //   const ListItem = ({ item, type }) => {
// // //     const isCountry = type === 'countries';
// // //     const currentCountry = channels.find(c => 
// // //       c.country.toLowerCase() === activeChannel.toLowerCase()
// // //     );
    
// // //     const isSelected = selectedItem ? 
// // //       (isCountry ? 
// // //         selectedItem.type === 'country' && selectedItem.name.toLowerCase() === item.country?.toLowerCase() :
// // //         selectedItem.type === 'city' && selectedItem.name.toLowerCase() === item.name?.toLowerCase()) : 
// // //       false;
    
// // //     return (
// // //       <button
// // //         className={cn(
// // //           "w-full text-left px-3 py-2 rounded-md transition-colors",
// // //           "flex items-center gap-2 text-sm group",
// // //           "hover:bg-gray-200/70",
// // //           isSelected ? "bg-gray-200 text-gray-900" : "text-gray-700"
// // //         )}
// // //         onClick={() => {
// // //           if (isCountry) {
// // //             onSelectItem?.({ 
// // //               type: 'country', 
// // //               name: item.country, 
// // //               emoji: item.emoji 
// // //             });
// // //             setActiveChannel(item.country);
// // //           } else {
// // //             onSelectItem?.({ 
// // //               type: 'city', 
// // //               name: item.name, 
// // //               emoji: currentCountry.emoji, 
// // //               country: currentCountry.country 
// // //             });
// // //           }
// // //         }}
// // //       >
// // //         <span className="text-base">
// // //           {isCountry ? item.emoji : currentCountry.emoji}
// // //         </span>
// // //         <Hash className="h-3 w-3 text-gray-500" />
// // //         <span className={cn(
// // //           "flex-1 truncate",
// // //           isSelected ? "font-bold" : "font-semibold"
// // //         )}>
// // //           {isCountry ? item.country : item.name}
// // //         </span>
// // //       </button>
// // //     );
// // //   };

// // //   return (
// // //     <div className={cn(
// // //       "w-[280px] h-full bg-white border-r border-gray-200 flex flex-col",
// // //       "lg:w-60 shadow-lg lg:shadow-none",
// // //       className
// // //     )}>
// // //       {/* Close button for mobile */}
// // //       <button
// // //         className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
// // //         onClick={onClose}
// // //       >
// // //         <X className="h-5 w-5" />
// // //       </button>
      
// // //       <div className="p-3 space-y-4 h-full flex flex-col">
// // //         <div className="relative flex-shrink-0">
// // //           <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
// // //           <Input
// // //             placeholder={`Search ${activeTab}...`}
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)}
// // //             className="pl-8 h-9 bg-white border-gray-200"
// // //           />
// // //         </div>

// // //         <div className="flex border-b border-gray-200 flex-shrink-0">
// // //           <button
// // //             onClick={() => setActiveTab("countries")}
// // //             className={cn(
// // //               "flex-1 px-4 py-2 text-sm font-medium transition-colors",
// // //               "flex items-center justify-center gap-2",
// // //               activeTab === "countries" 
// // //                 ? "border-b-2 border-gray-900 text-gray-900" 
// // //                 : "text-gray-600 hover:text-gray-900"
// // //             )}
// // //           >
// // //             <Globe className="h-4 w-4" />
// // //             Countries
// // //           </button>
// // //           <button
// // //             onClick={() => setActiveTab("cities")}
// // //             className={cn(
// // //               "flex-1 px-4 py-2 text-sm font-medium transition-colors",
// // //               "flex items-center justify-center gap-2",
// // //               activeTab === "cities" 
// // //                 ? "border-b-2 border-gray-900 text-gray-900" 
// // //                 : "text-gray-600 hover:text-gray-900"
// // //             )}
// // //           >
// // //             <Building2 className="h-4 w-4" />
// // //             Cities
// // //           </button>
// // //         </div>

// // //         <div className="flex-1 overflow-y-auto no-scrollbar">
// // //           <div className="space-y-[2px] min-h-full">
// // //             {activeTab === "countries" ? (
// // //               <div className="space-y-[2px]">
// // //                 {filteredChannels.map((channel) => (
// // //                   <ListItem 
// // //                     key={channel.country} 
// // //                     item={channel}
// // //                     type="countries"
// // //                   />
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <div className="space-y-[2px]">
// // //                 {filteredCities.map((city) => (
// // //                   <ListItem
// // //                     key={`${activeChannel}-${city.name}`}
// // //                     item={city}
// // //                     type="cities"
// // //                   />
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>

// // //         <div className="space-y-2 flex-shrink-0">
// // //           <Link href={`/browse/${activeTab}`}>
// // //             <Button 
// // //               variant="outline" 
// // //               className="w-full justify-between"
// // //             >
// // //               Browse All {activeTab}
// // //               <ArrowRight className="h-4 w-4" />
// // //             </Button>
// // //           </Link>
          
// // //           <Button 
// // //             className="w-full justify-between"
// // //           >
// // //             Add New {activeTab === 'countries' ? 'Country' : 'City'}
// // //             <Plus className="h-4 w-4" />
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // "use client";

// // import React, { useState } from "react";
// // import { Input } from "@/components/ui/input";
// // import { Search, Plus, Hash, Globe, Building2, ArrowRight, X } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { cn } from "@/lib/utils";
// // import Link from 'next/link';

// // const Sidebar = ({ 
// //   channels, 
// //   activeChannel,
// //   setActiveChannel,
// //   onSelectItem,
// //   selectedItem,
// //   className,
// //   onClose
// // }) => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [activeTab, setActiveTab] = useState("countries");

// //   const currentChannelCities = channels
// //     .find(channel => channel.country.toLowerCase() === activeChannel.toLowerCase())
// //     ?.cities || [];

// //   const testChannels = [...channels, ...channels.map(ch => ({
// //     ...ch,
// //     country: `${ch.country} (2)`,
// //   }))];

// //   const testCities = [...currentChannelCities, ...currentChannelCities.map(city => ({
// //     ...city,
// //     name: `${city.name} (2)`,
// //   }))];

// //   const filteredChannels = testChannels.filter(channel =>
// //     channel.country.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   const filteredCities = testCities.filter(city =>
// //     city.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   const ListItem = ({ item, type }) => {
// //     const isCountry = type === 'countries';
// //     const currentCountry = channels.find(c => 
// //       c.country.toLowerCase() === activeChannel.toLowerCase()
// //     );
    
// //     const isSelected = selectedItem ? 
// //       (isCountry ? 
// //         selectedItem.type === 'country' && selectedItem.name.toLowerCase() === item.country?.toLowerCase() :
// //         selectedItem.type === 'city' && selectedItem.name.toLowerCase() === item.name?.toLowerCase()) : 
// //       false;
    
// //     return (
// //       <button
// //         className={cn(
// //           "w-full text-left px-3 py-2 rounded-md transition-colors",
// //           "flex items-center gap-2 text-sm group",
// //           "hover:bg-gray-200/70",
// //           isSelected ? "bg-gray-200 text-gray-900" : "text-gray-700"
// //         )}
// //         onClick={() => {
// //           if (isCountry) {
// //             onSelectItem?.({ 
// //               type: 'country', 
// //               name: item.country, 
// //               emoji: item.emoji 
// //             });
// //             setActiveChannel(item.country);
// //           } else {
// //             onSelectItem?.({ 
// //               type: 'city', 
// //               name: item.name, 
// //               emoji: currentCountry.emoji, 
// //               country: currentCountry.country 
// //             });
// //           }
// //         }}
// //       >
// //         <span className="text-base">
// //           {isCountry ? item.emoji : currentCountry.emoji}
// //         </span>
// //         <Hash className="h-3 w-3 text-gray-500" />
// //         <span className={cn(
// //           "flex-1 truncate",
// //           isSelected ? "font-bold" : "font-semibold"
// //         )}>
// //           {isCountry ? item.country : item.name}
// //         </span>
// //       </button>
// //     );
// //   };

// //   return (
// //     <div className={cn(
// //       "w-[280px] h-full bg-white border-r border-gray-200 flex flex-col",
// //       "lg:w-60 shadow-lg lg:shadow-none",
// //       className
// //     )}>
// //       {/* Close button for mobile */}
// //       <button
// //         className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
// //         onClick={onClose}
// //       >
// //         <X className="h-5 w-5" />
// //       </button>
      
// //       <div className="p-3 space-y-4 h-full flex flex-col">
// //         <div className="relative flex-shrink-0">
// //           <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
// //           <Input
// //             placeholder={`Search ${activeTab}...`}
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             className="pl-8 h-9 bg-white border-gray-200"
// //           />
// //         </div>

// //         <div className="flex border-b border-gray-200 flex-shrink-0">
// //           <button
// //             onClick={() => setActiveTab("countries")}
// //             className={cn(
// //               "flex-1 px-4 py-2 text-sm font-medium transition-colors",
// //               "flex items-center justify-center gap-2",
// //               activeTab === "countries" 
// //                 ? "border-b-2 border-gray-900 text-gray-900" 
// //                 : "text-gray-600 hover:text-gray-900"
// //             )}
// //           >
// //             <Globe className="h-4 w-4" />
// //             Countries
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("cities")}
// //             className={cn(
// //               "flex-1 px-4 py-2 text-sm font-medium transition-colors",
// //               "flex items-center justify-center gap-2",
// //               activeTab === "cities" 
// //                 ? "border-b-2 border-gray-900 text-gray-900" 
// //                 : "text-gray-600 hover:text-gray-900"
// //             )}
// //           >
// //             <Building2 className="h-4 w-4" />
// //             Cities
// //           </button>
// //         </div>

// //         <div className="flex-1 overflow-y-auto no-scrollbar">
// //           <div className="space-y-[2px] min-h-full">
// //             {activeTab === "countries" ? (
// //               <div className="space-y-[2px]">
// //                 {filteredChannels.map((channel) => (
// //                   <ListItem 
// //                     key={channel.country} 
// //                     item={channel}
// //                     type="countries"
// //                   />
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className="space-y-[2px]">
// //                 {filteredCities.map((city) => (
// //                   <ListItem
// //                     key={`${activeChannel}-${city.name}`}
// //                     item={city}
// //                     type="cities"
// //                   />
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         <div className="space-y-2 flex-shrink-0">
// //           <Link href={`/browse/${activeTab}`}>
// //             <Button 
// //               variant="outline" 
// //               className="w-full justify-between"
// //             >
// //               Browse All {activeTab}
// //               <ArrowRight className="h-4 w-4" />
// //             </Button>
// //           </Link>
          
// //           <Button 
// //             className="w-full justify-between"
// //           >
// //             Add New {activeTab === 'countries' ? 'Country' : 'City'}
// //             <Plus className="h-4 w-4" />
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// "use client";

// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Search, Plus, Hash, Globe, Building2, ArrowRight, X } from "lucide-react";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// const Sidebar = ({
//   channels,
//   activeChannel,
//   setActiveChannel,
//   onClose,
// }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("countries");

//   const filteredChannels = channels.filter((channel) =>
//     channel.country.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredCities = channels
//     .find((channel) => channel.country === activeChannel)
//     ?.cities.filter((city) =>
//       city.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//   return (
//     <div className={cn("w-72 bg-white border-r flex flex-col")}>
//       <button
//         className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
//         onClick={onClose}
//       >
//         <X className="h-5 w-5" />
//       </button>

//       <div className="p-4 space-y-4">
//         <div className="relative">
//           <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
//           <Input
//             placeholder={`Search ${activeTab}...`}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="pl-8"
//           />
//         </div>

//         <div className="flex">
//           <button
//             onClick={() => setActiveTab("countries")}
//             className={cn(
//               "flex-1 py-2 text-sm font-medium",
//               activeTab === "countries" ? "text-gray-900" : "text-gray-600"
//             )}
//           >
//             <Globe className="h-4 w-4 mr-2" />
//             Countries
//           </button>
//           <button
//             onClick={() => setActiveTab("cities")}
//             className={cn(
//               "flex-1 py-2 text-sm font-medium",
//               activeTab === "cities" ? "text-gray-900" : "text-gray-600"
//             )}
//           >
//             <Building2 className="h-4 w-4 mr-2" />
//             Cities
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto">
//           {(activeTab === "countries" ? filteredChannels : filteredCities).map(
//             (item, index) => (
//               <button
//                 key={index}
//                 className="w-full px-4 py-2 text-left hover:bg-gray-200"
//                 onClick={() => setActiveChannel(item.name || item.country)}
//               >
//                 <Hash className="mr-2" />
//                 {item.name || item.country}
//               </button>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Plus, Hash, Globe, Building2, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = ({
  channels,
  activeChannel,
  setActiveChannel,
  onSelectItem,
  selectedItem,
  className,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("countries");

  // Filtered data for active tabs
  const filteredChannels = channels.filter((channel) =>
    channel.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentChannelCities =
    channels.find(
      (channel) => channel.country.toLowerCase() === activeChannel.toLowerCase()
    )?.cities || [];

  const filteredCities = currentChannelCities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ListItem = ({ item, type }) => {
    const isCountry = type === "countries";
    const currentCountry = channels.find(
      (c) => c.country.toLowerCase() === activeChannel.toLowerCase()
    );

    const isSelected = selectedItem
      ? isCountry
        ? selectedItem.type === "country" &&
          selectedItem.name.toLowerCase() === item.country?.toLowerCase()
        : selectedItem.type === "city" &&
          selectedItem.name.toLowerCase() === item.name?.toLowerCase()
      : false;

    return (
      <button
        className={cn(
          "w-full text-left px-3 py-2 rounded-md transition-colors",
          "flex items-center gap-2 text-sm group",
          "hover:bg-gray-200/70",
          isSelected ? "bg-gray-200 text-gray-900" : "text-gray-700"
        )}
        onClick={() => {
          if (isCountry) {
            onSelectItem?.({
              type: "country",
              name: item.country,
              emoji: item.emoji,
            });
            setActiveChannel(item.country);
          } else {
            onSelectItem?.({
              type: "city",
              name: item.name,
              emoji: currentCountry.emoji,
              country: currentCountry.country,
            });
          }
        }}
      >
        <span className="text-base">
          {isCountry ? item.emoji : currentCountry.emoji}
        </span>
        <Hash className="h-3 w-3 text-gray-500" />
        <span
          className={cn(
            "flex-1 truncate",
            isSelected ? "font-bold" : "font-semibold"
          )}
        >
          {isCountry ? item.country : item.name}
        </span>
      </button>
    );
  };

  return (
    <div
      className={cn(
        "w-[280px] h-full bg-white border-r border-gray-200 flex flex-col",
        "lg:w-60 shadow-lg lg:shadow-none",
        className
      )}
    >
      {/* Close button for mobile */}
      {onClose && (
        <button
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      )}

      <div className="p-3 space-y-4 h-full flex flex-col">
        {/* Search Bar */}
        <div className="relative flex-shrink-0">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-9 bg-white border-gray-200"
          />
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-gray-200 flex-shrink-0">
          <button
            onClick={() => setActiveTab("countries")}
            className={cn(
              "flex-1 px-4 py-2 text-sm font-medium transition-colors",
              "flex items-center justify-center gap-2",
              activeTab === "countries"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            <Globe className="h-4 w-4" />
            Countries
          </button>
          <button
            onClick={() => setActiveTab("cities")}
            className={cn(
              "flex-1 px-4 py-2 text-sm font-medium transition-colors",
              "flex items-center justify-center gap-2",
              activeTab === "cities"
                ? "border-b-2 border-gray-900 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            <Building2 className="h-4 w-4" />
            Cities
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="space-y-[2px]">
            {activeTab === "countries"
              ? filteredChannels.map((channel) => (
                  <ListItem
                    key={channel.country}
                    item={channel}
                    type="countries"
                  />
                ))
              : filteredCities.map((city) => (
                  <ListItem
                    key={`${activeChannel}-${city.name}`}
                    item={city}
                    type="cities"
                  />
                ))}
          </div>
        </div>

        {/* Add New Button */}
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200/70 text-gray-600 flex-shrink-0">
          <Plus className="h-4 w-4" />
          <span className="text-sm font-medium">Add New</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

