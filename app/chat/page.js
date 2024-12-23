// // // // // // // // // // app/chat/page.js
// // // // // // // // // "use client";
// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { ChatLayout, useTheme } from "@/components/chat/Layout";
// // // // // // // // // import { AppHeader } from "@/components/chat/AppHeader";
// // // // // // // // // import { Sidebar } from "@/components/chat/Sidebar";
// // // // // // // // // import { ChatHeader } from "@/components/chat/ChatHeader";
// // // // // // // // // import { ChatMessages } from "@/components/chat/ChatMessages";
// // // // // // // // // import { ChatInput } from "@/components/chat/ChatInput";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { ArrowRight, MessageSquare } from "lucide-react";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { travelData } from "@/app/data/data";
// // // // // // // // // import { cn } from "@/lib/utils";

// // // // // // // // // function ChatPage() {
// // // // // // // // //   const { currentTheme, themes } = useTheme();
// // // // // // // // //   const theme = themes[currentTheme];
// // // // // // // // //   const [showChat, setShowChat] = useState(false);
// // // // // // // // //   const [activeChannel, setActiveChannel] = useState("spain");
// // // // // // // // //   const [messages, setMessages] = useState(travelData.defaultMessages);
// // // // // // // // //   const [newMessage, setNewMessage] = useState("");
// // // // // // // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // // // // // // //   const [activeCity, setActiveCity] = useState(null);
// // // // // // // // //   const [bookmarkedItems, setBookmarkedItems] = useState([]);
// // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // // // // // //   const handleSendMessage = (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (!newMessage.trim()) return;

// // // // // // // // //     const currentChannel = travelData.channels.find(c => 
// // // // // // // // //       c.country.toLowerCase() === activeChannel.toLowerCase()
// // // // // // // // //     );
// // // // // // // // //     const cityTags = currentChannel?.cities
// // // // // // // // //       .map(city => city.name.toLowerCase())
// // // // // // // // //       .filter(cityName => 
// // // // // // // // //         newMessage.toLowerCase().includes(`#${cityName}`)
// // // // // // // // //       ) || [];

// // // // // // // // //     setMessages([
// // // // // // // // //       ...messages,
// // // // // // // // //       {
// // // // // // // // //         id: Date.now(),
// // // // // // // // //         content: newMessage,
// // // // // // // // //         username: "User",
// // // // // // // // //         timestamp: new Date().toISOString(),
// // // // // // // // //         isVerified: false,
// // // // // // // // //         role: "Traveler",
// // // // // // // // //         joinDate: "March 2024",
// // // // // // // // //         cities: cityTags
// // // // // // // // //       },
// // // // // // // // //     ]);
// // // // // // // // //     setNewMessage("");
// // // // // // // // //   };

// // // // // // // // //   const handleToggleBookmark = (item) => {
// // // // // // // // //     setBookmarkedItems(prev => {
// // // // // // // // //       const exists = prev.some(
// // // // // // // // //         bookmarked => 
// // // // // // // // //           bookmarked.type === item.type && 
// // // // // // // // //           bookmarked.name.toLowerCase() === item.name.toLowerCase()
// // // // // // // // //       );
      
// // // // // // // // //       if (exists) {
// // // // // // // // //         return prev.filter(
// // // // // // // // //           bookmarked => 
// // // // // // // // //             !(bookmarked.type === item.type && 
// // // // // // // // //               bookmarked.name.toLowerCase() === item.name.toLowerCase())
// // // // // // // // //         );
// // // // // // // // //       }
      
// // // // // // // // //       return [...prev, item];
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const handleSearchMessages = (query) => {
// // // // // // // // //     setSearchQuery(query);
// // // // // // // // //   };

// // // // // // // // //   const handleCityClick = (city) => {
// // // // // // // // //     setActiveCity(activeCity?.name === city.name ? null : city);
// // // // // // // // //   };

// // // // // // // // //   const filteredMessages = messages.filter(message => {
// // // // // // // // //     // First apply search filter
// // // // // // // // //     const matchesSearch = searchQuery ? 
// // // // // // // // //       message.content.toLowerCase().includes(searchQuery.toLowerCase()) :
// // // // // // // // //       true;

// // // // // // // // //     // Then apply city filter if active
// // // // // // // // //     const matchesCity = activeCity ? 
// // // // // // // // //       message.content.toLowerCase().includes(`#${activeCity.name.toLowerCase()}`) :
// // // // // // // // //       true;

// // // // // // // // //     return matchesSearch && matchesCity;
// // // // // // // // //   });

// // // // // // // // //   return (
// // // // // // // // //     <ChatLayout>
// // // // // // // // //       {!showChat ? (
// // // // // // // // //         <main className={cn(
// // // // // // // // //           "flex-1 flex items-center justify-center",
// // // // // // // // //           theme.primary
// // // // // // // // //         )}>
// // // // // // // // //           <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24 max-w-2xl mx-auto">
// // // // // // // // //             <h1 className={cn(
// // // // // // // // //               "text-4xl font-extrabold tracking-tight",
// // // // // // // // //               theme.sidebar.textActive
// // // // // // // // //             )}>
// // // // // // // // //               Connect with Travelers ⚡️
// // // // // // // // //             </h1>
// // // // // // // // //             <p className={theme.sidebar.text}>
// // // // // // // // //               Join our community of travelers, share experiences, and make new friends around the world.
// // // // // // // // //             </p>
// // // // // // // // //             <div className="flex flex-col sm:flex-row gap-4">
// // // // // // // // //               <Button
// // // // // // // // //                 onClick={() => setShowChat(true)}
// // // // // // // // //                 size="lg"
// // // // // // // // //                 className={cn(
// // // // // // // // //                   "gap-2",
// // // // // // // // //                   theme.input.bg,
// // // // // // // // //                   theme.channel.hover,
// // // // // // // // //                   theme.sidebar.textActive
// // // // // // // // //                 )}
// // // // // // // // //               >
// // // // // // // // //                 Open Chat
// // // // // // // // //                 <MessageSquare className="h-5 w-5" />
// // // // // // // // //               </Button>
// // // // // // // // //               <Button
// // // // // // // // //                 variant="outline"
// // // // // // // // //                 size="lg"
// // // // // // // // //                 asChild
// // // // // // // // //                 className={cn(
// // // // // // // // //                   "gap-2",
// // // // // // // // //                   theme.sidebar.text,
// // // // // // // // //                   "border-zinc-700 hover:bg-zinc-800"
// // // // // // // // //                 )}
// // // // // // // // //               >
// // // // // // // // //                 <Link href="/blog">
// // // // // // // // //                   Learn More
// // // // // // // // //                   <ArrowRight className="h-5 w-5" />
// // // // // // // // //                 </Link>
// // // // // // // // //               </Button>
// // // // // // // // //             </div>
// // // // // // // // //           </section>
// // // // // // // // //         </main>
// // // // // // // // //       ) : (
// // // // // // // // //         <div className={cn(
// // // // // // // // //           "flex-1 h-[calc(100vh-4rem)]",
// // // // // // // // //           theme.primary
// // // // // // // // //         )}>
// // // // // // // // //           <div className="flex flex-col h-full">
// // // // // // // // //             <AppHeader />
// // // // // // // // //             <div className="flex flex-1 overflow-hidden">
// // // // // // // // //               <Sidebar
// // // // // // // // //                 channels={travelData.channels}
// // // // // // // // //                 activeChannel={activeChannel}
// // // // // // // // //                 setActiveChannel={setActiveChannel}
// // // // // // // // //                 selectedItem={selectedItem}
// // // // // // // // //                 onSelectItem={setSelectedItem}
// // // // // // // // //               />
// // // // // // // // //               <div className="flex-1 flex flex-col">
// // // // // // // // //                 <ChatHeader 
// // // // // // // // //                   activeChannel={activeChannel}
// // // // // // // // //                   activeCity={activeCity}
// // // // // // // // //                   onCityClick={handleCityClick}
// // // // // // // // //                   channels={travelData.channels}
// // // // // // // // //                   bookmarkedItems={bookmarkedItems}
// // // // // // // // //                   onToggleBookmark={handleToggleBookmark}
// // // // // // // // //                   onSearchMessages={handleSearchMessages}
// // // // // // // // //                 />
// // // // // // // // //                 <ChatMessages 
// // // // // // // // //                   messages={filteredMessages}
// // // // // // // // //                   channels={travelData.channels}
// // // // // // // // //                 />
// // // // // // // // //                 <ChatInput
// // // // // // // // //                   newMessage={newMessage}
// // // // // // // // //                   setNewMessage={setNewMessage}
// // // // // // // // //                   handleSendMessage={handleSendMessage}
// // // // // // // // //                   placeholder={`Message #${activeChannel} ${activeCity ? `/ #${activeCity.name}` : ''}`}
// // // // // // // // //                 />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </ChatLayout>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default ChatPage;
// // // // // // // // // app/chat/page.js
// // // // // // // // "use client";
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { ChatLayout, useTheme } from "@/components/chat/Layout";
// // // // // // // // import { AppHeader } from "@/components/chat/AppHeader";
// // // // // // // // import { Sidebar } from "@/components/chat/Sidebar";
// // // // // // // // import { ChatHeader } from "@/components/chat/ChatHeader";
// // // // // // // // import { ChatMessages } from "@/components/chat/ChatMessages";
// // // // // // // // import { ChatInput } from "@/components/chat/ChatInput";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { ArrowRight, MessageSquare } from "lucide-react";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { travelData } from "@/app/data/data";
// // // // // // // // import { cn } from "@/lib/utils";

// // // // // // // // function ChatPage() {
// // // // // // // //   const { currentTheme, themes } = useTheme();
// // // // // // // //   const theme = themes[currentTheme];
  
// // // // // // // //   // UI State
// // // // // // // //   const [showChat, setShowChat] = useState(false);
// // // // // // // //   const [sidebarVisible, setSidebarVisible] = useState(true);
  
// // // // // // // //   // Chat State
// // // // // // // //   const [activeChannel, setActiveChannel] = useState("spain");
// // // // // // // //   const [messages, setMessages] = useState(travelData.defaultMessages);
// // // // // // // //   const [newMessage, setNewMessage] = useState("");
// // // // // // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // // // // // //   const [bookmarkedItems, setBookmarkedItems] = useState([]);
// // // // // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // // // // //   const handleSendMessage = (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     if (!newMessage.trim()) return;

// // // // // // // //     const currentChannel = travelData.channels.find(c => 
// // // // // // // //       c.country.toLowerCase() === activeChannel.toLowerCase()
// // // // // // // //     );
// // // // // // // //     const cityTags = currentChannel?.cities
// // // // // // // //       .map(city => city.name.toLowerCase())
// // // // // // // //       .filter(cityName => 
// // // // // // // //         newMessage.toLowerCase().includes(`#${cityName}`)
// // // // // // // //       ) || [];

// // // // // // // //     setMessages([
// // // // // // // //       ...messages,
// // // // // // // //       {
// // // // // // // //         id: Date.now(),
// // // // // // // //         content: newMessage,
// // // // // // // //         username: "User",
// // // // // // // //         timestamp: new Date().toISOString(),
// // // // // // // //         isVerified: false,
// // // // // // // //         role: "Traveler",
// // // // // // // //         joinDate: "March 2024",
// // // // // // // //         cities: cityTags
// // // // // // // //       },
// // // // // // // //     ]);
// // // // // // // //     setNewMessage("");
// // // // // // // //   };

// // // // // // // //   const handleToggleBookmark = (item) => {
// // // // // // // //     setBookmarkedItems(prev => {
// // // // // // // //       const exists = prev.some(
// // // // // // // //         bookmarked => 
// // // // // // // //           bookmarked.type === item.type && 
// // // // // // // //           bookmarked.name.toLowerCase() === item.name.toLowerCase()
// // // // // // // //       );
      
// // // // // // // //       if (exists) {
// // // // // // // //         return prev.filter(
// // // // // // // //           bookmarked => 
// // // // // // // //             !(bookmarked.type === item.type && 
// // // // // // // //               bookmarked.name.toLowerCase() === item.name.toLowerCase())
// // // // // // // //         );
// // // // // // // //       }
      
// // // // // // // //       return [...prev, item];
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const handleSearchMessages = (query) => {
// // // // // // // //     setSearchQuery(query);
// // // // // // // //   };

// // // // // // // //   const filteredMessages = messages.filter(message => {
// // // // // // // //     if (!searchQuery) return true;
// // // // // // // //     return message.content.toLowerCase().includes(searchQuery.toLowerCase());
// // // // // // // //   });

// // // // // // // //   return (
// // // // // // // //     <ChatLayout>
// // // // // // // //       {!showChat ? (
// // // // // // // //         <main className={cn(
// // // // // // // //           "flex-1 flex items-center justify-center",
// // // // // // // //           theme.primary
// // // // // // // //         )}>
// // // // // // // //           <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24 max-w-2xl mx-auto">
// // // // // // // //             <h1 className={cn(
// // // // // // // //               "text-4xl font-extrabold tracking-tight",
// // // // // // // //               theme.sidebar.textActive
// // // // // // // //             )}>
// // // // // // // //               Connect with Travelers ⚡️
// // // // // // // //             </h1>
// // // // // // // //             <p className={theme.sidebar.text}>
// // // // // // // //               Join our community of travelers, share experiences, and make new friends around the world.
// // // // // // // //             </p>
// // // // // // // //             <div className="flex flex-col sm:flex-row gap-4">
// // // // // // // //               <Button
// // // // // // // //                 onClick={() => setShowChat(true)}
// // // // // // // //                 size="lg"
// // // // // // // //                 className={cn(
// // // // // // // //                   "gap-2",
// // // // // // // //                   theme.input.bg,
// // // // // // // //                   theme.channel.hover,
// // // // // // // //                   theme.sidebar.textActive
// // // // // // // //                 )}
// // // // // // // //               >
// // // // // // // //                 Open Chat
// // // // // // // //                 <MessageSquare className="h-5 w-5" />
// // // // // // // //               </Button>
// // // // // // // //               <Button
// // // // // // // //                 variant="outline"
// // // // // // // //                 size="lg"
// // // // // // // //                 asChild
// // // // // // // //                 className={cn(
// // // // // // // //                   "gap-2",
// // // // // // // //                   theme.sidebar.text,
// // // // // // // //                   "border-zinc-700 hover:bg-zinc-800"
// // // // // // // //                 )}
// // // // // // // //               >
// // // // // // // //                 <Link href="/blog">
// // // // // // // //                   Learn More
// // // // // // // //                   <ArrowRight className="h-5 w-5" />
// // // // // // // //                 </Link>
// // // // // // // //               </Button>
// // // // // // // //             </div>
// // // // // // // //           </section>
// // // // // // // //         </main>
// // // // // // // //       ) : (
// // // // // // // //         <div className={cn(
// // // // // // // //           "flex-1 h-[calc(100vh-4rem)]",
// // // // // // // //           theme.primary
// // // // // // // //         )}>
// // // // // // // //           <div className="flex flex-col h-full">
// // // // // // // //             <AppHeader onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
// // // // // // // //             <div className="flex flex-1 overflow-hidden">
// // // // // // // //               <Sidebar
// // // // // // // //                 channels={travelData.channels}
// // // // // // // //                 activeChannel={activeChannel}
// // // // // // // //                 setActiveChannel={setActiveChannel}
// // // // // // // //                 selectedItem={selectedItem}
// // // // // // // //                 onSelectItem={setSelectedItem}
// // // // // // // //                 className={cn(
// // // // // // // //                   "fixed lg:relative lg:translate-x-0 z-30",
// // // // // // // //                   sidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // // // // //                 )}
// // // // // // // //               />
// // // // // // // //               <div className="flex-1 flex flex-col">
// // // // // // // //                 <ChatHeader 
// // // // // // // //                   activeChannel={activeChannel}
// // // // // // // //                   channels={travelData.channels}
// // // // // // // //                   bookmarkedItems={bookmarkedItems}
// // // // // // // //                   onToggleBookmark={handleToggleBookmark}
// // // // // // // //                   onSearchMessages={handleSearchMessages}
// // // // // // // //                 />
// // // // // // // //                 <ChatMessages 
// // // // // // // //                   messages={filteredMessages}
// // // // // // // //                   channels={travelData.channels}
// // // // // // // //                 />
// // // // // // // //                 <ChatInput
// // // // // // // //                   newMessage={newMessage}
// // // // // // // //                   setNewMessage={setNewMessage}
// // // // // // // //                   handleSendMessage={handleSendMessage}
// // // // // // // //                   placeholder={`Message #${activeChannel}`}
// // // // // // // //                   currentTheme={currentTheme}
// // // // // // // //                 />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </ChatLayout>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default ChatPage;
// // // // // // // // app/chat/page.js
// // // // // // // "use client";
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { ChatLayout } from "@/components/chat/Layout";
// // // // // // // import { AppHeader } from "@/components/chat/AppHeader";
// // // // // // // import { Sidebar } from "@/components/chat/Sidebar";
// // // // // // // import { ChatMessages } from "@/components/chat/ChatMessages";
// // // // // // // import { ChatInput } from "@/components/chat/ChatInput";
// // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // import { Hash } from "lucide-react";
// // // // // // // import { cn } from "@/lib/utils";
// // // // // // // import { travelData } from "@/app/data/data";

// // // // // // // function ChatPage() {
// // // // // // //   // UI State
// // // // // // //   const [sidebarVisible, setSidebarVisible] = useState(true);
// // // // // // //   const [showChat, setShowChat] = useState(true);
  
// // // // // // //   // Chat State
// // // // // // //   const [activeChannel, setActiveChannel] = useState("spain");
// // // // // // //   const [messages, setMessages] = useState(travelData.defaultMessages);
// // // // // // //   const [newMessage, setNewMessage] = useState("");
// // // // // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // // // // //   const [bookmarkedItems, setBookmarkedItems] = useState([]);
// // // // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // // // //   // Hide sidebar when entering chat on mobile
// // // // // // //   useEffect(() => {
// // // // // // //     if (showChat && window.innerWidth < 1024) {
// // // // // // //       setSidebarVisible(false);
// // // // // // //     }
// // // // // // //   }, [showChat]);

// // // // // // //   const handleSendMessage = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (!newMessage.trim()) return;

// // // // // // //     const currentChannel = travelData.channels.find(c => 
// // // // // // //       c.country.toLowerCase() === activeChannel.toLowerCase()
// // // // // // //     );
// // // // // // //     const cityTags = currentChannel?.cities
// // // // // // //       .map(city => city.name.toLowerCase())
// // // // // // //       .filter(cityName => 
// // // // // // //         newMessage.toLowerCase().includes(`#${cityName}`)
// // // // // // //       ) || [];

// // // // // // //     setMessages([
// // // // // // //       ...messages,
// // // // // // //       {
// // // // // // //         id: Date.now(),
// // // // // // //         content: newMessage,
// // // // // // //         username: "User",
// // // // // // //         timestamp: new Date().toISOString(),
// // // // // // //         isVerified: false,
// // // // // // //         role: "Traveler",
// // // // // // //         joinDate: "March 2024",
// // // // // // //         cities: cityTags
// // // // // // //       },
// // // // // // //     ]);
// // // // // // //     setNewMessage("");
// // // // // // //   };

// // // // // // //   const handleToggleBookmark = (item) => {
// // // // // // //     setBookmarkedItems(prev => {
// // // // // // //       const exists = prev.some(
// // // // // // //         bookmarked => 
// // // // // // //           bookmarked.type === item.type && 
// // // // // // //           bookmarked.name.toLowerCase() === item.name.toLowerCase()
// // // // // // //       );
      
// // // // // // //       if (exists) {
// // // // // // //         return prev.filter(
// // // // // // //           bookmarked => 
// // // // // // //             !(bookmarked.type === item.type && 
// // // // // // //               bookmarked.name.toLowerCase() === item.name.toLowerCase())
// // // // // // //         );
// // // // // // //       }
      
// // // // // // //       return [...prev, item];
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleSearchMessages = (query) => {
// // // // // // //     setSearchQuery(query);
// // // // // // //   };

// // // // // // //   const filteredMessages = messages.filter(message => {
// // // // // // //     if (!searchQuery) return true;
// // // // // // //     return message.content.toLowerCase().includes(searchQuery.toLowerCase());
// // // // // // //   });

// // // // // // //   // Toggle button with alternating colors
// // // // // // //   const SidebarToggle = () => (
// // // // // // //     <Button
// // // // // // //       variant="ghost"
// // // // // // //       size="icon"
// // // // // // //       className={cn(
// // // // // // //         "fixed bottom-20 right-4 z-50 rounded-full w-12 h-12",
// // // // // // //         "shadow-lg lg:hidden transition-colors duration-500",
// // // // // // //         sidebarVisible
// // // // // // //           ? "bg-indigo-600 hover:bg-indigo-700"
// // // // // // //           : "bg-purple-600 hover:bg-purple-700",
// // // // // // //         "text-white"
// // // // // // //       )}
// // // // // // //       onClick={() => setSidebarVisible(!sidebarVisible)}
// // // // // // //     >
// // // // // // //       <Hash className="h-5 w-5" />
// // // // // // //     </Button>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-[#5A00FF]">
// // // // // // //       <div className="flex h-screen overflow-hidden">
// // // // // // //         {/* Overlay */}
// // // // // // //         {sidebarVisible && (
// // // // // // //           <div 
// // // // // // //             className="fixed inset-0 bg-black/20 z-20 lg:hidden"
// // // // // // //             onClick={() => setSidebarVisible(false)}
// // // // // // //           />
// // // // // // //         )}

// // // // // // //         {/* Sidebar */}
// // // // // // //         <Sidebar
// // // // // // //           channels={travelData.channels}
// // // // // // //           activeChannel={activeChannel}
// // // // // // //           setActiveChannel={setActiveChannel}
// // // // // // //           selectedItem={selectedItem}
// // // // // // //           onSelectItem={setSelectedItem}
// // // // // // //           onClose={() => setSidebarVisible(false)}
// // // // // // //           className={cn(
// // // // // // //             "fixed lg:relative lg:translate-x-0 z-30 h-full",
// // // // // // //             "transition-transform duration-300 ease-in-out",
// // // // // // //             sidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // // // //           )}
// // // // // // //         />

// // // // // // //         {/* Main Content */}
// // // // // // //         <div className="flex-1 flex flex-col bg-white w-full">
// // // // // // //           <AppHeader onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
// // // // // // //           <div className="flex-1 overflow-hidden relative">
// // // // // // //             <ChatMessages 
// // // // // // //               messages={filteredMessages}
// // // // // // //               channels={travelData.channels}
// // // // // // //             />
// // // // // // //             <ChatInput
// // // // // // //               newMessage={newMessage}
// // // // // // //               setNewMessage={setNewMessage}
// // // // // // //               handleSendMessage={handleSendMessage}
// // // // // // //               placeholder={`Message #${activeChannel}`}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Floating Toggle Button */}
// // // // // // //         <SidebarToggle />
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default ChatPage;
// // // // // // "use client";
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { ChatLayout } from "@/components/chat/Layout";
// // // // // // import { AppHeader } from "@/components/chat/AppHeader";
// // // // // // import { Sidebar } from "@/components/chat/Sidebar";
// // // // // // import { ChatMessages } from "@/components/chat/ChatMessages";
// // // // // // import { ChatInput } from "@/components/chat/ChatInput";
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { cn } from "@/lib/utils";
// // // // // // import { travelData } from "@/app/data/data";

// // // // // // function ChatPage() {
// // // // // //   const [sidebarVisible, setSidebarVisible] = useState(true);
// // // // // //   const [activeChannel, setActiveChannel] = useState("spain");
// // // // // //   const [messages, setMessages] = useState(travelData.defaultMessages);
// // // // // //   const [newMessage, setNewMessage] = useState("");
// // // // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // // // //   const [bookmarkedItems, setBookmarkedItems] = useState([]);
// // // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // // //   // Hide sidebar on mobile by default
// // // // // //   useEffect(() => {
// // // // // //     if (window.innerWidth < 1024) {
// // // // // //       setSidebarVisible(false);
// // // // // //     }
// // // // // //   }, []);

// // // // // //   const handleSendMessage = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!newMessage.trim()) return;

// // // // // //     const currentChannel = travelData.channels.find(c => 
// // // // // //       c.country.toLowerCase() === activeChannel.toLowerCase()
// // // // // //     );
    
// // // // // //     setMessages([
// // // // // //       ...messages,
// // // // // //       {
// // // // // //         id: Date.now(),
// // // // // //         content: newMessage,
// // // // // //         username: "User",
// // // // // //         timestamp: new Date().toISOString(),
// // // // // //         isVerified: false,
// // // // // //         role: "Traveler",
// // // // // //         joinDate: "March 2024"
// // // // // //       },
// // // // // //     ]);
// // // // // //     setNewMessage("");
// // // // // //   };

// // // // // //   const handleSearchMessages = (query) => {
// // // // // //     setSearchQuery(query);
// // // // // //   };

// // // // // //   const filteredMessages = messages.filter(message => {
// // // // // //     if (!searchQuery) return true;
// // // // // //     return message.content.toLowerCase().includes(searchQuery.toLowerCase());
// // // // // //   });

// // // // // //   return (
// // // // // //     <div className="h-screen w-full flex flex-col bg-[#5A00FF]">
// // // // // //       {/* Main container */}
// // // // // //       <div className="flex h-full overflow-hidden">
// // // // // //         {/* Overlay for mobile */}
// // // // // //         {sidebarVisible && (
// // // // // //           <div 
// // // // // //             className="fixed inset-0 bg-black/20 z-20 lg:hidden"
// // // // // //             onClick={() => setSidebarVisible(false)}
// // // // // //           />
// // // // // //         )}

// // // // // //         {/* Sidebar */}
// // // // // //         <Sidebar
// // // // // //           channels={travelData.channels}
// // // // // //           activeChannel={activeChannel}
// // // // // //           setActiveChannel={setActiveChannel}
// // // // // //           selectedItem={selectedItem}
// // // // // //           onSelectItem={setSelectedItem}
// // // // // //           onClose={() => setSidebarVisible(false)}
// // // // // //           className={cn(
// // // // // //             "fixed lg:relative lg:translate-x-0 z-30 h-full",
// // // // // //             "transition-transform duration-300 ease-in-out",
// // // // // //             sidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // // //           )}
// // // // // //         />

// // // // // //         {/* Main content area */}
// // // // // //         <div className="flex-1 flex flex-col min-w-0 bg-white">
// // // // // //           <AppHeader onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
          
// // // // // //           <div className="flex-1 flex flex-col relative overflow-hidden">
// // // // // //             <ChatMessages 
// // // // // //               messages={filteredMessages}
// // // // // //               channels={travelData.channels}
// // // // // //             />
            
// // // // // //             <div className="sticky bottom-0 w-full bg-white border-t">
// // // // // //               <ChatInput
// // // // // //                 newMessage={newMessage}
// // // // // //                 setNewMessage={setNewMessage}
// // // // // //                 handleSendMessage={handleSendMessage}
// // // // // //                 placeholder={`Message #${activeChannel}`}
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default ChatPage;
// // // // // "use client";
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { ChatLayout } from "@/components/chat/Layout";
// // // // // import { AppHeader } from "@/components/chat/AppHeader";
// // // // // import { Sidebar } from "@/components/chat/Sidebar";
// // // // // import { ChatMessages } from "@/components/chat/ChatMessages";
// // // // // import { ChatInput } from "@/components/chat/ChatInput";
// // // // // import { ChatHeader } from "@/components/chat/ChatHeader";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { ArrowRight, MessageSquare } from "lucide-react";
// // // // // import Link from "next/link";
// // // // // import { cn } from "@/lib/utils";
// // // // // import { travelData } from "@/app/data/data";

// // // // // function ChatPage() {
// // // // //   const [showChat, setShowChat] = useState(false);
// // // // //   const [sidebarVisible, setSidebarVisible] = useState(true);
// // // // //   const [activeChannel, setActiveChannel] = useState("spain");
// // // // //   const [messages, setMessages] = useState(travelData.defaultMessages);
// // // // //   const [newMessage, setNewMessage] = useState("");
// // // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // // //   const [bookmarkedItems, setBookmarkedItems] = useState([]);
// // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // //   // Hide sidebar on mobile by default
// // // // //   useEffect(() => {
// // // // //     if (window.innerWidth < 1024) {
// // // // //       setSidebarVisible(false);
// // // // //     }
// // // // //   }, []);

// // // // //   const handleSendMessage = (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!newMessage.trim()) return;

// // // // //     const currentChannel = travelData.channels.find(c => 
// // // // //       c.country.toLowerCase() === activeChannel.toLowerCase()
// // // // //     );
    
// // // // //     setMessages([
// // // // //       ...messages,
// // // // //       {
// // // // //         id: Date.now(),
// // // // //         content: newMessage,
// // // // //         username: "User",
// // // // //         timestamp: new Date().toISOString(),
// // // // //         isVerified: false,
// // // // //         role: "Traveler",
// // // // //         joinDate: "March 2024"
// // // // //       },
// // // // //     ]);
// // // // //     setNewMessage("");
// // // // //   };

// // // // //   const handleToggleBookmark = (item) => {
// // // // //     setBookmarkedItems(prev => {
// // // // //       const exists = prev.some(
// // // // //         bookmarked => 
// // // // //           bookmarked.type === item.type && 
// // // // //           bookmarked.name.toLowerCase() === item.name.toLowerCase()
// // // // //       );
      
// // // // //       if (exists) {
// // // // //         return prev.filter(
// // // // //           bookmarked => 
// // // // //             !(bookmarked.type === item.type && 
// // // // //               bookmarked.name.toLowerCase() === item.name.toLowerCase())
// // // // //         );
// // // // //       }
      
// // // // //       return [...prev, item];
// // // // //     });
// // // // //   };

// // // // //   const handleSearchMessages = (query) => {
// // // // //     setSearchQuery(query);
// // // // //   };

// // // // //   if (!showChat) {
// // // // //     return (
// // // // //       <div className="min-h-screen bg-white">
// // // // //         <main className="flex-1 flex items-center justify-center">
// // // // //           <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24 max-w-2xl mx-auto">
// // // // //             <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
// // // // //               Connect with Travelers ⚡️
// // // // //             </h1>
// // // // //             <p className="text-gray-600">
// // // // //               Join our community of travelers, share experiences, and make new friends around the world.
// // // // //             </p>
// // // // //             <div className="flex flex-col sm:flex-row gap-4">
// // // // //               <Button
// // // // //                 onClick={() => setShowChat(true)}
// // // // //                 size="lg"
// // // // //                 className="gap-2 bg-[#5A00FF] hover:bg-[#4800CC]"
// // // // //               >
// // // // //                 Open Chat
// // // // //                 <MessageSquare className="h-5 w-5" />
// // // // //               </Button>
// // // // //               <Button
// // // // //                 variant="outline"
// // // // //                 size="lg"
// // // // //                 className="gap-2"
// // // // //               >
// // // // //                 Upgrade Now
// // // // //                 <ArrowRight className="h-5 w-5" />
// // // // //               </Button>
// // // // //             </div>
// // // // //           </section>
// // // // //         </main>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="h-screen w-full flex flex-col bg-white">
// // // // //       <div className="flex h-full overflow-hidden">
// // // // //         {/* Overlay for mobile */}
// // // // //         {sidebarVisible && (
// // // // //           <div 
// // // // //             className="fixed inset-0 bg-black/20 z-20 lg:hidden"
// // // // //             onClick={() => setSidebarVisible(false)}
// // // // //           />
// // // // //         )}

// // // // //         {/* Sidebar */}
// // // // //         <Sidebar
// // // // //           channels={travelData.channels}
// // // // //           activeChannel={activeChannel}
// // // // //           setActiveChannel={setActiveChannel}
// // // // //           selectedItem={selectedItem}
// // // // //           onSelectItem={setSelectedItem}
// // // // //           onClose={() => setSidebarVisible(false)}
// // // // //           className={cn(
// // // // //             "fixed lg:relative lg:translate-x-0 z-30 h-full",
// // // // //             "transition-transform duration-300 ease-in-out",
// // // // //             sidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // // //           )}
// // // // //         />

// // // // //         {/* Main content area */}
// // // // //         <div className="flex-1 flex flex-col min-w-0 bg-white">
// // // // //           <AppHeader onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
// // // // //           <ChatHeader 
// // // // //             activeChannel={activeChannel}
// // // // //             channels={travelData.channels}
// // // // //             bookmarkedItems={bookmarkedItems}
// // // // //             onToggleBookmark={handleToggleBookmark}
// // // // //             onSearchMessages={handleSearchMessages}
// // // // //           />
          
// // // // //           <div className="flex-1 flex flex-col relative overflow-hidden">
// // // // //             <ChatMessages 
// // // // //               messages={filteredMessages}
// // // // //               channels={travelData.channels}
// // // // //             />
            
// // // // //             <div className="sticky bottom-0 w-full bg-white border-t">
// // // // //               <ChatInput
// // // // //                 newMessage={newMessage}
// // // // //                 setNewMessage={setNewMessage}
// // // // //                 handleSendMessage={handleSendMessage}
// // // // //                 placeholder={`Message #${activeChannel}`}
// // // // //               />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default ChatPage;

// // // // "use client";
// // // // import React, { useState, useEffect } from "react";
// // // // import AppHeader from "@/components/chat/AppHeader";
// // // // import Sidebar from "@/components/chat/Sidebar";
// // // // import ChatMessages from "@/components/chat/ChatMessages";
// // // // import ChatInput from "@/components/chat/ChatInput";
// // // // import ChatHeader from "@/components/chat/ChatHeader";
// // // // import { Button } from "@/components/ui/button";
// // // // import { ArrowRight, MessageSquare } from "lucide-react";
// // // // import { cn } from "@/lib/utils";

// // // // const ChatPage = () => {
// // // //   const [showChat, setShowChat] = useState(false);
// // // //   const [sidebarVisible, setSidebarVisible] = useState(true);
// // // //   const [activeChannel, setActiveChannel] = useState("spain");
// // // //   const [messages, setMessages] = useState([
// // // //     // Add some sample messages here
// // // //     {
// // // //       id: 1,
// // // //       content: "Welcome to TravelChat!",
// // // //       username: "System",
// // // //       timestamp: new Date().toISOString(),
// // // //       isVerified: true,
// // // //       role: "System",
// // // //       joinDate: "January 2024"
// // // //     }
// // // //   ]);
// // // //   const [newMessage, setNewMessage] = useState("");
// // // //   const [selectedItem, setSelectedItem] = useState(null);
// // // //   const [bookmarkedItems, setBookmarkedItems] = useState([]);
// // // //   const [searchQuery, setSearchQuery] = useState("");

// // // //   // Sample channels data
// // // //   const channels = [
// // // //     {
// // // //       country: "Spain",
// // // //       emoji: "🇪🇸",
// // // //       description: "Explore beautiful Spain",
// // // //       temperature: "25°C",
// // // //       cities: [
// // // //         { name: "Barcelona" },
// // // //         { name: "Madrid" },
// // // //         { name: "Valencia" }
// // // //       ]
// // // //     },
// // // //     {
// // // //       country: "France",
// // // //       emoji: "🇫🇷",
// // // //       description: "Discover magical France",
// // // //       temperature: "22°C",
// // // //       cities: [
// // // //         { name: "Paris" },
// // // //         { name: "Lyon" },
// // // //         { name: "Marseille" }
// // // //       ]
// // // //     }
// // // //   ];

// // // //   // Hide sidebar on mobile by default
// // // //   useEffect(() => {
// // // //     if (window.innerWidth < 1024) {
// // // //       setSidebarVisible(false);
// // // //     }
// // // //   }, []);

// // // //   const handleSendMessage = (e) => {
// // // //     e.preventDefault();
// // // //     if (!newMessage.trim()) return;

// // // //     const currentChannel = channels.find(c => 
// // // //       c.country.toLowerCase() === activeChannel.toLowerCase()
// // // //     );
    
// // // //     setMessages([
// // // //       ...messages,
// // // //       {
// // // //         id: Date.now(),
// // // //         content: newMessage,
// // // //         username: "User",
// // // //         timestamp: new Date().toISOString(),
// // // //         isVerified: false,
// // // //         role: "Traveler",
// // // //         joinDate: "March 2024"
// // // //       },
// // // //     ]);
// // // //     setNewMessage("");
// // // //   };

// // // //   const handleToggleBookmark = (item) => {
// // // //     setBookmarkedItems(prev => {
// // // //       const exists = prev.some(
// // // //         bookmarked => 
// // // //           bookmarked.type === item.type && 
// // // //           bookmarked.name.toLowerCase() === item.name.toLowerCase()
// // // //       );
      
// // // //       if (exists) {
// // // //         return prev.filter(
// // // //           bookmarked => 
// // // //             !(bookmarked.type === item.type && 
// // // //               bookmarked.name.toLowerCase() === item.name.toLowerCase())
// // // //         );
// // // //       }
      
// // // //       return [...prev, item];
// // // //     });
// // // //   };

// // // //   const handleSearchMessages = (query) => {
// // // //     setSearchQuery(query);
// // // //   };

// // // //   const handleSelectItem = (item) => {
// // // //     setSelectedItem(item);
// // // //     if (window.innerWidth < 1024) {
// // // //       setSidebarVisible(false); // Hide sidebar on mobile after selection
// // // //     }
// // // //   };

  
// // // //   const filteredMessages = messages.filter(message => {
// // // //     if (!searchQuery) return true;
// // // //     return message.content.toLowerCase().includes(searchQuery.toLowerCase());
// // // //   });

// // // //   if (!showChat) {
// // // //     return (
// // // //       <div className="min-h-screen bg-white">
// // // //         <main className="flex-1 flex items-center justify-center">
// // // //           <section className="flex flex-col items-center justify-center text-center gap-12 px-8 py-24 max-w-2xl mx-auto">
// // // //             <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
// // // //               Connect with Travelers ⚡️
// // // //             </h1>
// // // //             <p className="text-gray-600">
// // // //               Join our community of travelers, share experiences, and make new friends around the world.
// // // //             </p>
// // // //             <div className="flex flex-col sm:flex-row gap-4">
// // // //               <Button
// // // //                 onClick={() => setShowChat(true)}
// // // //                 size="lg"
// // // //                 className="gap-2 bg-[#5A00FF] hover:bg-[#4800CC]"
// // // //               >
// // // //                 Open Chat
// // // //                 <MessageSquare className="h-5 w-5" />
// // // //               </Button>
// // // //               <Button
// // // //                 variant="outline"
// // // //                 size="lg"
// // // //                 className="gap-2"
// // // //               >
// // // //                 Upgrade Now
// // // //                 <ArrowRight className="h-5 w-5" />
// // // //               </Button>
// // // //             </div>
// // // //           </section>
// // // //         </main>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="h-screen w-full flex flex-col bg-white">
// // // //       {/* Main container */}
// // // //       <div className="flex h-full overflow-hidden">
// // // //         {/* Overlay for mobile */}
// // // //         {sidebarVisible && (
// // // //           <div 
// // // //             className="fixed inset-0 bg-black/20 z-20 lg:hidden"
// // // //             onClick={() => setSidebarVisible(false)}
// // // //           />
// // // //         )}

// // // //         {/* Sidebar */}
// // // //         <Sidebar
// // // //           channels={channels}
// // // //           activeChannel={activeChannel}
// // // //           setActiveChannel={setActiveChannel}
// // // //           selectedItem={selectedItem}
// // // //           onSelectItem={handleSelectItem}
// // // //           onClose={() => setSidebarVisible(false)}
// // // //           className={cn(
// // // //             "fixed lg:relative lg:translate-x-0 z-30 h-full",
// // // //             "transition-transform duration-300 ease-in-out",
// // // //             sidebarVisible ? "translate-x-0" : "-translate-x-full"
// // // //           )}
// // // //         />

// // // //         {/* Main content area */}
// // // //         <div className="flex-1 flex flex-col min-w-0 h-screen">
// // // //           {/* Fixed headers */}
// // // //           <div className="flex-none">
// // // //             <AppHeader onToggleSidebar={() => setSidebarVisible(!sidebarVisible)} />
// // // //             <ChatHeader 
// // // //               activeChannel={activeChannel}
// // // //               channels={channels}
// // // //               bookmarkedItems={bookmarkedItems}
// // // //               onToggleBookmark={handleToggleBookmark}
// // // //               onSearchMessages={handleSearchMessages}
// // // //             />
// // // //           </div>
          
// // // //           {/* Scrollable messages */}
// // // //           <div className="flex-1 overflow-hidden relative">
// // // //             <ChatMessages 
// // // //               messages={filteredMessages}
// // // //               channels={channels}
// // // //             />
// // // //           </div>

// // // //           {/* Fixed input */}
// // // //           <div className="flex-none">
// // // //             <ChatInput
// // // //               newMessage={newMessage}
// // // //               setNewMessage={setNewMessage}
// // // //               handleSendMessage={handleSendMessage}
// // // //               placeholder={`Message #${activeChannel}`}
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };


// // // // export default ChatPage;
// // // // app/chat/page.js
// // // "use client";

// // // import { useState } from 'react';
// // // import ChatHeader from '@/components/chat/ChatHeader';
// // // import ChatMessages from '@/components/chat/ChatMessages';
// // // import ChatInput from '@/components/chat/ChatInput';
// // // import { useChatMessages } from '@/app/hooks/useChatMessages';
// // // import { ChatLayout } from '@/components/chat/Layout';

// // // export default function ChatPage() {
// // //   const [newMessage, setNewMessage] = useState('');
// // //   const { messages, isLoading, sendMessage } = useChatMessages('bangkok');

// // //   const handleSendMessage = async (e) => {
// // //     e.preventDefault();
// // //     if (!newMessage.trim()) return;

// // //     const success = await sendMessage(newMessage);
// // //     if (success) {
// // //       setNewMessage('');
// // //     }
// // //   };

// // //   return (
// // //     <ChatLayout>
// // //       <ChatHeader
// // //         activeChannel="bangkok"
// // //         channels={[
// // //           {
// // //             country: 'Thailand',
// // //             emoji: '🇹🇭',
// // //             description: 'City of Angels - Street Food Paradise',
// // //             temperature: '32°C',
// // //             cities: [{ name: 'Bangkok' }]
// // //           }
// // //         ]}
// // //       />
// // //       <ChatMessages 
// // //         messages={messages}
// // //         isLoading={isLoading}
// // //       />
// // //       <ChatInput
// // //         newMessage={newMessage}
// // //         setNewMessage={setNewMessage}
// // //         handleSendMessage={handleSendMessage}
// // //         placeholder="Message #bangkok"
// // //       />
// // //     </ChatLayout>
// // //   );
// // // }
// // // app/chat/page.js
// // import { Suspense } from 'react';
// // import { ChatLayout } from '@/components/chat/Layout';
// // import dynamic from 'next/dynamic';

// // // Dynamically import the chat component to avoid SSR issues with Supabase client
// // const ChatRoom = dynamic(() => import('./ChatRoom'), {
// //   ssr: false,
// //   loading: () => (
// //     <div className="flex-1 flex items-center justify-center">
// //       <div className="animate-pulse">Loading chat...</div>
// //     </div>
// //   ),
// // });

// // export default function ChatPage() {
// //   return (
// //     <Suspense fallback={
// //       <div className="flex-1 flex items-center justify-center">
// //         <div className="animate-pulse">Loading chat room...</div>
// //       </div>
// //     }>
// //       <ChatLayout>
// //         <ChatRoom />
// //       </ChatLayout>
// //     </Suspense>
// //   );
// // }
// // // app/chat/page.js
// // import ChatWrapper from '@/components/chat/ChatWrapper';

// // export default function ChatPage() {
// //   return <ChatWrapper />;
// // }
// import ChatWrapper from "@/components/chat/ChatWrapper";
// import Sidebar from "@/components/chat/Sidebar";
// import ChatMessages from "@/components/chat/ChatMessages";
// import ChatInput from "@/components/chat/ChatInput";

// export default function ChatPage() {
//   const channels = [
//     { country: "Thailand", emoji: "🇹🇭", cities: [{ name: "Bangkok" }] },
//   ];

//   return (
//     <ChatWrapper>
//       <div className="flex h-screen">
//         <Sidebar channels={channels} activeChannel="Thailand" />
//         <div className="flex flex-1 flex-col">
//           <ChatMessages messages={[]} channels={channels} />
//           <ChatInput
//             newMessage=""
//             setNewMessage={() => {}}
//             handleSendMessage={() => {}}
//             placeholder="Type your message..."
//           />
//         </div>
//       </div>
//     </ChatWrapper>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import ChatWrapper from "@/components/chat/ChatWrapper";
// import Sidebar from "@/components/chat/Sidebar";
// import ChatMessages from "@/components/chat/ChatMessages";
// import ChatInput from "@/components/chat/ChatInput";

// export default function ChatPage() {
//   const [activeChannel, setActiveChannel] = useState("General");
//   const [newMessage, setNewMessage] = useState("");

//   const channels = [
//     { country: "Thailand", emoji: "🇹🇭", cities: [{ name: "Bangkok" }] },
//   ];

//   const handleSendMessage = (message) => {
//     if (!message.trim()) return;
//     console.log(`Message sent to channel ${activeChannel}: ${message}`);
//     setNewMessage(""); // Reset message input
//   };

//   return (
//     <ChatWrapper>
//       <div className="flex h-screen">
//         {/* Sidebar */}
//         <Sidebar
//           channels={channels}
//           activeChannel={activeChannel}
//           setActiveChannel={setActiveChannel}
//         />

//         {/* Chat Content */}
//         <div className="flex-1 flex flex-col">
//           {/* Messages */}
//           <ChatMessages messages={[]} channels={channels} />

//           {/* Input */}
//           <ChatInput
//             newMessage={newMessage}
//             setNewMessage={setNewMessage}
//             handleSendMessage={() => handleSendMessage(newMessage)}
//             placeholder={`Message #${activeChannel}`}
//           />
//         </div>
//       </div>
//     </ChatWrapper>
//   );
// }

'use client';

import { useState } from 'react';
import ChatRoom from './ChatRoom';
import Sidebar from '@/components/chat/Sidebar';

export default function ChatPage() {
  const [activeChannel, setActiveChannel] = useState("bangkok");
  
  const channels = [
    { 
      country: "Thailand", 
      emoji: "🇹🇭", 
      cities: [{ name: "Bangkok" }] 
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar
        channels={channels}
        activeChannel={activeChannel}
        setActiveChannel={setActiveChannel}
      />
      <div className="flex-1">
        <ChatRoom />
      </div>
    </div>
  );
}