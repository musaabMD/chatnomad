// // // // // // // components/chat/ChatMessages.js
// // // // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // // // import { Message } from "./Message";
// // // // // // import { useEffect, useRef } from "react";

// // // // // // export const ChatMessages = ({ messages, channels }) => {
// // // // // //   const scrollRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     if (scrollRef.current) {
// // // // // //       const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
// // // // // //       if (scrollArea) {
// // // // // //         scrollArea.scrollTop = scrollArea.scrollHeight;
// // // // // //       }
// // // // // //     }
// // // // // //   }, [messages]);

// // // // // //   return (
// // // // // //     <ScrollArea
// // // // // //       ref={scrollRef}
// // // // // //       className="flex-1 h-[calc(100vh-13rem)]"
// // // // // //     >
// // // // // //       <div className="flex flex-col py-4">
// // // // // //         {messages.length === 0 ? (
// // // // // //           <div className="flex-1 flex items-center justify-center text-muted-foreground">
// // // // // //             No messages yet. Start the conversation!
// // // // // //           </div>
// // // // // //         ) : (
// // // // // //           messages.map((message) => (
// // // // // //             <Message
// // // // // //               key={message.id}
// // // // // //               message={message}
// // // // // //               channels={channels}
// // // // // //             />
// // // // // //           ))
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </ScrollArea>
// // // // // //   );
// // // // // // };
// // // // // // components/chat/ChatMessages.js
// // // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // // import { Message } from "./Message";
// // // // // import { useEffect, useRef } from "react";

// // // // // export const ChatMessages = ({ messages, channels }) => {
// // // // //   const scrollRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     if (scrollRef.current) {
// // // // //       const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
// // // // //       if (scrollArea) {
// // // // //         scrollArea.scrollTop = scrollArea.scrollHeight;
// // // // //       }
// // // // //     }
// // // // //   }, [messages]);

// // // // //   return (
// // // // //     <ScrollArea
// // // // //       ref={scrollRef}
// // // // //       className="flex-1 h-[calc(100vh-13rem)]"
// // // // //     >
// // // // //       <div className="flex flex-col py-4">
// // // // //         {messages.length === 0 ? (
// // // // //           <div className="flex-1 flex items-center justify-center text-muted-foreground">
// // // // //             No messages yet. Start the conversation!
// // // // //           </div>
// // // // //         ) : (
// // // // //           messages.map((message) => (
// // // // //             <Message
// // // // //               key={message.id}
// // // // //               message={message}
// // // // //               channels={channels}
// // // // //             />
// // // // //           ))
// // // // //         )}
// // // // //       </div>
// // // // //     </ScrollArea>
// // // // //   );
// // // // // };
// // // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // // import Message from "./Message";
// // // // import { useEffect, useRef } from "react";

// // // // const ChatMessages = ({ messages, channels }) => {
// // // //   const scrollRef = useRef(null);
  
// // // //   useEffect(() => {
// // // //     if (scrollRef.current) {
// // // //       const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
// // // //       if (scrollArea) {
// // // //         scrollArea.scrollTop = scrollArea.scrollHeight;
// // // //       }
// // // //     }
// // // //   }, [messages]);

// // // //   return (
// // // //     <ScrollArea
// // // //       ref={scrollRef}
// // // //       className="flex-1 h-[calc(100vh-13rem)]"
// // // //     >
// // // //       <div className="flex flex-col py-4">
// // // //         {messages.length === 0 ? (
// // // //           <div className="flex-1 flex items-center justify-center text-muted-foreground">
// // // //             No messages yet. Start the conversation!
// // // //           </div>
// // // //         ) : (
// // // //           messages.map((message) => (
// // // //             <Message
// // // //               key={message.id}
// // // //               message={message}
// // // //               channels={channels}
// // // //             />
// // // //           ))
// // // //         )}
// // // //       </div>
// // // //     </ScrollArea>
// // // //   );
// // // // };

// // // // export default ChatMessages;
// // // "use client";

// // // import { ScrollArea } from "@/components/ui/scroll-area";
// // // import Message from "./Message";
// // // import { useEffect, useRef } from "react";

// // // const ChatMessages = ({ messages, channels }) => {
// // //   const scrollRef = useRef(null);

// // //   useEffect(() => {
// // //     if (scrollRef.current) {
// // //       const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
// // //       if (scrollArea) {
// // //         scrollArea.scrollTop = scrollArea.scrollHeight;
// // //       }
// // //     }
// // //   }, [messages]);

// // //   return (
// // //     <ScrollArea
// // //       ref={scrollRef}
// // //       className="flex-1 h-[calc(100vh-13rem)]"
// // //     >
// // //       <div className="flex flex-col py-4">
// // //         {messages.length === 0 ? (
// // //           <div className="flex-1 flex items-center justify-center text-muted-foreground">
// // //             No messages yet. Start the conversation!
// // //           </div>
// // //         ) : (
// // //           messages.map((message) => (
// // //             <Message
// // //               key={message.id}
// // //               message={message}
// // //               channels={channels}
// // //             />
// // //           ))
// // //         )}
// // //       </div>
// // //     </ScrollArea>
// // //   );
// // // };

// // // export default ChatMessages;
// // "use client";

// // import React, { useState, useEffect, useRef } from 'react';
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import {
// //   HoverCard,
// //   HoverCardContent,
// //   HoverCardTrigger,
// // } from "@/components/ui/hover-card";
// // import { 
// //   CalendarDays, 
// //   MapPin, 
// //   Hash, 
// //   MessageSquare, 
// //   Filter 
// // } from "lucide-react";

// // // Separate Message component to keep things organized
// // const Message = ({ message, channels = [] }) => {
// //   const formatTime = (timestamp) => {
// //     const date = new Date(timestamp);
// //     const now = new Date();
// //     const diff = now - date;
// //     const minutes = Math.floor(diff / 60000);
// //     const hours = Math.floor(minutes / 60);
// //     const days = Math.floor(hours / 24);

// //     if (days > 0) return `${days}d ago`;
// //     if (hours > 0) return `${hours}h ago`;
// //     if (minutes > 0) return `${minutes}m ago`;
// //     return 'Just now';
// //   };

// //   return (
// //     <div className="group flex items-start space-x-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors">
// //       <HoverCard>
// //         <HoverCardTrigger asChild>
// //           <Avatar className="cursor-pointer h-8 w-8">
// //             <AvatarImage 
// //               src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${message.username}`} 
// //               alt={message.username} 
// //             />
// //             <AvatarFallback>{message.username[0].toUpperCase()}</AvatarFallback>
// //           </Avatar>
// //         </HoverCardTrigger>
// //         <HoverCardContent className="w-80">
// //           <div className="flex justify-between space-x-4">
// //             <Avatar>
// //               <AvatarImage 
// //                 src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${message.username}`} 
// //                 alt={message.username} 
// //               />
// //               <AvatarFallback>{message.username[0].toUpperCase()}</AvatarFallback>
// //             </Avatar>
// //             <div className="space-y-1">
// //               <h4 className="text-sm font-semibold">{message.username}</h4>
// //               <div className="flex gap-2">
// //                 {message.isVerified && (
// //                   <Badge variant="secondary" className="h-5 px-1">verified</Badge>
// //                 )}
// //                 {message.role && (
// //                   <Badge variant="outline" className="h-5 px-1">
// //                     {message.role}
// //                   </Badge>
// //                 )}
// //               </div>
// //               <div className="flex items-center pt-2">
// //                 <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
// //                 <span className="text-xs text-muted-foreground">
// //                   Joined {message.joinDate}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </HoverCardContent>
// //       </HoverCard>

// //       <div className="flex-1 min-w-0">
// //         <div className="flex items-center gap-2">
// //           <span className="font-semibold hover:underline cursor-pointer truncate">
// //             {message.username}
// //           </span>
// //           {message.isVerified && (
// //             <Badge variant="secondary" className="h-5 px-1">verified</Badge>
// //           )}
// //           <span className="text-xs text-muted-foreground whitespace-nowrap">
// //             {formatTime(message.timestamp)}
// //           </span>
// //         </div>

// //         <div className="text-sm leading-relaxed break-words mt-1">
// //           {message.content}
// //         </div>

// //         <div className="flex items-center gap-2 mt-2">
// //           <Button 
// //             variant="ghost" 
// //             size="sm"
// //             className="h-8 px-2"
// //           >
// //             <MessageSquare className="w-4 h-4 mr-1" />
// //             Reply
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Messages container component
// // const ChatMessages = ({ messages, channels }) => {
// //   const scrollRef = useRef(null);

// //   useEffect(() => {
// //     if (scrollRef.current) {
// //       const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
// //       if (scrollArea) {
// //         scrollArea.scrollTop = scrollArea.scrollHeight;
// //       }
// //     }
// //   }, [messages]);

// //   // Group messages by date
// //   const groupedMessages = React.useMemo(() => {
// //     const groups = {};
// //     messages.forEach(msg => {
// //       const date = new Date(msg.timestamp).toLocaleDateString();
// //       if (!groups[date]) {
// //         groups[date] = [];
// //       }
// //       groups[date].push(msg);
// //     });
// //     return groups;
// //   }, [messages]);

// //   return (
// //     <ScrollArea ref={scrollRef} className="flex-1 h-[calc(100vh-13rem)]">
// //       <div className="flex flex-col py-4">
// //         {messages.length === 0 ? (
// //           <div className="flex-1 flex items-center justify-center text-muted-foreground">
// //             No messages yet. Start the conversation!
// //           </div>
// //         ) : (
// //           Object.entries(groupedMessages).map(([date, msgs]) => (
// //             <div key={date}>
// //               <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 py-2 px-4 text-sm font-medium text-gray-500">
// //                 {date}
// //               </div>
// //               {msgs.map((message) => (
// //                 <Message
// //                   key={message.id}
// //                   message={message}
// //                   channels={channels}
// //                 />
// //               ))}
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </ScrollArea>
// //   );
// // };

// // export default ChatMessages;
// "use client";

// import { ScrollArea } from "@/components/ui/scroll-area";
// import Message from "./Message";
// import { useEffect, useRef } from "react";

// const ChatMessages = ({ messages, channels }) => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
//       if (scrollArea) {
//         scrollArea.scrollTop = scrollArea.scrollHeight;
//       }
//     }
//   }, [messages]);

//   return (
//     <ScrollArea ref={scrollRef} className="flex-1 h-[calc(100vh-13rem)]">
//       <div className="flex flex-col py-4">
//         {messages.length === 0 ? (
//           <div className="flex-1 flex items-center justify-center text-muted-foreground">
//             No messages yet. Start the conversation!
//           </div>
//         ) : (
//           messages.map((message) => (
//             <Message key={message.id} message={message} channels={channels} />
//           ))
//         )}
//       </div>
//     </ScrollArea>
//   );
// };

// export default ChatMessages;

'use client';

import React, { useEffect, useRef } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { 
  CalendarDays, 
  MessageSquare
} from "lucide-react";

const Message = ({ message }) => {
  console.log('Rendering message:', message);

  const formatTime = (timestamp) => {
    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) {
        console.error('Invalid timestamp:', timestamp);
        return 'Invalid date';
      }
      return date.toLocaleTimeString();
    } catch (error) {
      console.error('Error formatting time:', error);
      return 'Error';
    }
  };

  return (
    <div className="group flex items-start space-x-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Avatar className="cursor-pointer h-8 w-8">
            <AvatarImage 
              src={message.users?.avatar_url || `https://api.dicebear.com/7.x/adventurer/svg?seed=${message.users?.username || 'anonymous'}`}
              alt={message.users?.username || 'Anonymous'} 
            />
            <AvatarFallback>{(message.users?.username?.[0] || 'A').toUpperCase()}</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage 
                src={message.users?.avatar_url || `https://api.dicebear.com/7.x/adventurer/svg?seed=${message.users?.username || 'anonymous'}`}
                alt={message.users?.username || 'Anonymous'} 
              />
              <AvatarFallback>{(message.users?.username?.[0] || 'A').toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{message.users?.username || 'Anonymous'}</h4>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  {formatTime(message.created_at)}
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold hover:underline cursor-pointer truncate">
            {message.users?.username || 'Anonymous'}
          </span>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {formatTime(message.created_at)}
          </span>
        </div>

        <div className="text-sm leading-relaxed break-words mt-1">
          {message.content}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Button 
            variant="ghost" 
            size="sm"
            className="h-8 px-2"
          >
            <MessageSquare className="w-4 h-4 mr-1" />
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
};

const ChatMessages = ({ messages = [], channels = [] }) => {
  console.log('ChatMessages received messages:', messages);
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log('Messages changed:', messages);
    if (scrollRef.current) {
      const scrollArea = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <ScrollArea ref={scrollRef} className="flex-1 h-[calc(100vh-13rem)]">
      <div className="flex flex-col py-4">
        {messages.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              channels={channels}
            />
          ))
        )}
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;