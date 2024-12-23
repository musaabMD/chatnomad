// // // components/chat/Message.js
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import { Badge } from "@/components/ui/badge";
// // import {
// //   HoverCard,
// //   HoverCardContent,
// //   HoverCardTrigger,
// // } from "@/components/ui/hover-card";
// // import { CalendarDays, MapPin, Hash } from "lucide-react";

// // export const Message = ({ message, channels = [] }) => {
// //   // Find country emoji for city tags
// //   const findCountryEmoji = (cityName) => {
// //     if (!Array.isArray(channels)) return null;
    
// //     for (const channel of channels) {
// //       const city = channel.cities.find(
// //         c => c.name.toLowerCase() === cityName.toLowerCase()
// //       );
// //       if (city) return channel.emoji;
// //     }
// //     return null;
// //   };

// //   // Parse city tags in message content (#cityname)
// //   const parseContent = (content) => {
// //     if (!content) return content;
    
// //     const parts = content.split(/(#[a-zA-Z]+)/g);
// //     return parts.map((part, index) => {
// //       if (part.startsWith('#')) {
// //         const name = part.slice(1); // Remove #
// //         const emoji = findCountryEmoji(name);
// //         return (
// //           <Badge 
// //             key={index} 
// //             variant="secondary" 
// //             className="mx-1 bg-gray-100 text-gray-900 border-0"
// //           >
// //             {emoji && <span className="mr-1">{emoji}</span>}
// //             <Hash className="w-3 h-3 mr-1" />
// //             {name}
// //           </Badge>
// //         );
// //       }
// //       return part;
// //     });
// //   };

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
// //                 {message.city && (
// //                   <Badge variant="outline" className="h-5 px-1">
// //                     <MapPin className="w-3 h-3 mr-1" />
// //                     {message.city}
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
// //           {parseContent(message.content)}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// "use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";
// import { CalendarDays, MapPin, Hash } from "lucide-react";

// const Message = ({ message, channels = [] }) => {
//   const findCountryEmoji = (cityName) => {
//     if (!Array.isArray(channels)) return null;
    
//     for (const channel of channels) {
//       const city = channel.cities.find(
//         c => c.name.toLowerCase() === cityName.toLowerCase()
//       );
//       if (city) return channel.emoji;
//     }
//     return null;
//   };

//   const parseContent = (content) => {
//     if (!content) return content;
    
//     const parts = content.split(/(#[a-zA-Z]+)/g);
//     return parts.map((part, index) => {
//       if (part.startsWith('#')) {
//         const name = part.slice(1);
//         const emoji = findCountryEmoji(name);
//         return (
//           <Badge 
//             key={index} 
//             variant="secondary" 
//             className="mx-1 bg-gray-100 text-gray-900 border-0"
//           >
//             {emoji && <span className="mr-1">{emoji}</span>}
//             <Hash className="w-3 h-3 mr-1" />
//             {name}
//           </Badge>
//         );
//       }
//       return part;
//     });
//   };

//   const formatTime = (timestamp) => {
//     const date = new Date(timestamp);
//     const now = new Date();
//     const diff = now - date;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);

//     if (days > 0) return `${days}d ago`;
//     if (hours > 0) return `${hours}h ago`;
//     if (minutes > 0) return `${minutes}m ago`;
//     return 'Just now';
//   };

//   return (
//     <div className="group flex items-start space-x-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors">
//       <HoverCard>
//         <HoverCardTrigger asChild>
//           <Avatar className="cursor-pointer h-8 w-8">
//             <AvatarImage 
//               src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${message.username}`} 
//               alt={message.username} 
//             />
//             <AvatarFallback>{message.username[0].toUpperCase()}</AvatarFallback>
//           </Avatar>
//         </HoverCardTrigger>
//         <HoverCardContent className="w-80">
//           <div className="flex justify-between space-x-4">
//             <Avatar>
//               <AvatarImage 
//                 src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${message.username}`} 
//                 alt={message.username} 
//               />
//               <AvatarFallback>{message.username[0].toUpperCase()}</AvatarFallback>
//             </Avatar>
//             <div className="space-y-1">
//               <h4 className="text-sm font-semibold">{message.username}</h4>
//               <div className="flex gap-2">
//                 {message.isVerified && (
//                   <Badge variant="secondary" className="h-5 px-1">verified</Badge>
//                 )}
//                 {message.city && (
//                   <Badge variant="outline" className="h-5 px-1">
//                     <MapPin className="w-3 h-3 mr-1" />
//                     {message.city}
//                   </Badge>
//                 )}
//               </div>
//               <div className="flex items-center pt-2">
//                 <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
//                 <span className="text-xs text-muted-foreground">
//                   Joined {message.joinDate}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </HoverCardContent>
//       </HoverCard>

//       <div className="flex-1 min-w-0">
//         <div className="flex items-center gap-2">
//           <span className="font-semibold hover:underline cursor-pointer truncate">
//             {message.username}
//           </span>
//           {message.isVerified && (
//             <Badge variant="secondary" className="h-5 px-1">verified</Badge>
//           )}
//           <span className="text-xs text-muted-foreground whitespace-nowrap">
//             {formatTime(message.timestamp)}
//           </span>
//         </div>

//         <div className="text-sm leading-relaxed break-words mt-1">
//           {parseContent(message.content)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;
"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { 
  CalendarDays, 
  MapPin, 
  Hash,
  MessageSquare,
  Bookmark,
  BookmarkCheck 
} from "lucide-react";

const Message = React.memo(({ message, channels = [] }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const findCountryEmoji = (cityName) => {
    if (!Array.isArray(channels)) return null;
    
    for (const channel of channels) {
      const city = channel.cities.find(
        c => c.name.toLowerCase() === cityName.toLowerCase()
      );
      if (city) return channel.emoji;
    }
    return null;
  };

  const parseContent = (content) => {
    if (!content) return content;
    
    const parts = content.split(/(#[a-zA-Z]+)/g);
    return parts.map((part, index) => {
      if (part.startsWith('#')) {
        const name = part.slice(1);
        const emoji = findCountryEmoji(name);
        return (
          <Badge 
            key={index} 
            variant="secondary" 
            className="mx-1 bg-gray-100 text-gray-900 border-0"
          >
            {emoji && <span className="mr-1">{emoji}</span>}
            <Hash className="w-3 h-3 mr-1" />
            {name}
          </Badge>
        );
      }
      return part;
    });
  };

  return (
    <div className="group flex items-start space-x-3 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Avatar className="cursor-pointer h-8 w-8">
            <AvatarImage 
              src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${message.username}`} 
              alt={message.username} 
            />
            <AvatarFallback>{message.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage 
                src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${message.username}`} 
                alt={message.username} 
              />
              <AvatarFallback>{message.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{message.username}</h4>
              <div className="flex gap-2">
                {message.isVerified && (
                  <Badge variant="secondary" className="h-5 px-1">verified</Badge>
                )}
                {message.city && (
                  <Badge variant="outline" className="h-5 px-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {message.city}
                  </Badge>
                )}
              </div>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined {message.joinDate}
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold hover:underline cursor-pointer truncate">
            {message.username}
          </span>
          {message.isVerified && (
            <Badge variant="secondary" className="h-5 px-1">verified</Badge>
          )}
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {formatTime(message.timestamp)}
          </span>
        </div>

        <div className="text-sm leading-relaxed break-words mt-1">
          {parseContent(message.content)}
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
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2"
          >
            {message.bookmarked ? (
              <BookmarkCheck className="w-4 h-4" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
});

Message.displayName = 'Message';

const ChatMessages = React.memo(({ messages, channels }) => {
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
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
});

ChatMessages.displayName = 'ChatMessages';

export default ChatMessages;