// // // // // // // components/chat/ChatInput.js
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import { Input } from "@/components/ui/input";
// // // // // // import { Plus, Send, Volume2 } from "lucide-react";
// // // // // // import { useState, useEffect } from 'react';
// // // // // // import {
// // // // // //   DropdownMenu,
// // // // // //   DropdownMenuContent,
// // // // // //   DropdownMenuItem,
// // // // // //   DropdownMenuTrigger,
// // // // // // } from "@/components/ui/dropdown-menu";

// // // // // // export const ChatInput = ({
// // // // // //   newMessage,
// // // // // //   setNewMessage,
// // // // // //   handleSendMessage,
// // // // // //   currentTheme,
// // // // // //   placeholder
// // // // // // }) => {
// // // // // //   const [currentSound, setCurrentSound] = useState('1');
  
// // // // // //   useEffect(() => {
// // // // // //     const savedSound = localStorage.getItem('preferredSound') || '1';
// // // // // //     setCurrentSound(savedSound);
// // // // // //   }, []);

// // // // // //   const playSound = () => {
// // // // // //     const audio = new Audio(`/sounds/notifications/${currentSound}.mp3`);
// // // // // //     audio.play().catch(error => console.log('Error playing sound:', error));
// // // // // //   };

// // // // // //   const onSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!newMessage.trim()) return;
    
// // // // // //     // Play send sound
// // // // // //     playSound();
    
// // // // // //     // Store the current message for the auto-reply
// // // // // //     const currentMsg = newMessage;
    
// // // // // //     // Call original handler
// // // // // //     handleSendMessage(e);
    
// // // // // //     // Simulate bot reply after 1 second
// // // // // //     setTimeout(() => {
// // // // // //       playSound();
      
// // // // // //       // Create a synthetic event with the auto-reply message
// // // // // //       const autoReplyEvent = {
// // // // // //         preventDefault: () => {},
// // // // // //         target: {
// // // // // //           value: `Auto reply to: "${currentMsg}"`
// // // // // //         }
// // // // // //       };
      
// // // // // //       // Set the new message for the auto-reply
// // // // // //       setNewMessage(`Auto reply to: "${currentMsg}"`);
      
// // // // // //       // Call handleSendMessage with the auto-reply
// // // // // //       handleSendMessage(autoReplyEvent);
      
// // // // // //       // Clear the message after sending
// // // // // //       setNewMessage('');
// // // // // //     }, 1000);
// // // // // //   };

// // // // // //   const changeSound = (soundNumber) => {
// // // // // //     setCurrentSound(soundNumber);
// // // // // //     localStorage.setItem('preferredSound', soundNumber);
// // // // // //     // Play sample of selected sound
// // // // // //     const audio = new Audio(`/sounds/notifications/${soundNumber}.mp3`);
// // // // // //     audio.play().catch(error => console.log('Error playing sound:', error));
// // // // // //   };

// // // // // //   return (
// // // // // //     <form onSubmit={onSubmit} className="border-t p-4">
// // // // // //       <div className="flex items-center space-x-2">
// // // // // //         <Button type="button" size="icon" variant="ghost">
// // // // // //           <Plus className="h-5 w-5" />
// // // // // //         </Button>
        
// // // // // //         <Input
// // // // // //           value={newMessage}
// // // // // //           onChange={(e) => setNewMessage(e.target.value)}
// // // // // //           placeholder={placeholder || "Message #channel (use #cityname to tag cities)"}
// // // // // //           className="flex-1"
// // // // // //         />

// // // // // //         <DropdownMenu>
// // // // // //           <DropdownMenuTrigger asChild>
// // // // // //             <Button variant="ghost" size="icon">
// // // // // //               <Volume2 className="h-5 w-5" />
// // // // // //             </Button>
// // // // // //           </DropdownMenuTrigger>
// // // // // //           <DropdownMenuContent align="end">
// // // // // //             {[1, 2, 3, 4, 5].map((number) => (
// // // // // //               <DropdownMenuItem
// // // // // //                 key={number}
// // // // // //                 onClick={() => changeSound(number.toString())}
// // // // // //                 className="cursor-pointer"
// // // // // //               >
// // // // // //                 Sound {number}
// // // // // //               </DropdownMenuItem>
// // // // // //             ))}
// // // // // //           </DropdownMenuContent>
// // // // // //         </DropdownMenu>
        
// // // // // //         <Button
// // // // // //           type="submit"
// // // // // //           size="icon"
// // // // // //           disabled={!newMessage}
// // // // // //         >
// // // // // //           <Send className="h-5 w-5" />
// // // // // //         </Button>
// // // // // //       </div>
// // // // // //     </form>
// // // // // //   );
// // // // // // };  
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { Plus, Send } from "lucide-react";

// // // // // export const ChatInput = ({
// // // // //   newMessage,
// // // // //   setNewMessage,
// // // // //   handleSendMessage,
// // // // //   placeholder
// // // // // }) => {
// // // // //   return (
// // // // //     <form onSubmit={handleSendMessage} className="px-4 py-3 bg-white">
// // // // //       <div className="flex items-center gap-2">
// // // // //         <Button type="button" size="icon" variant="ghost">
// // // // //           <Plus className="h-5 w-5" />
// // // // //         </Button>
        
// // // // //         <Input
// // // // //           value={newMessage}
// // // // //           onChange={(e) => setNewMessage(e.target.value)}
// // // // //           placeholder={placeholder || "Message #channel"}
// // // // //           className="flex-1"
// // // // //         />
        
// // // // //         <Button
// // // // //           type="submit"
// // // // //           size="icon"
// // // // //           disabled={!newMessage}
// // // // //           className="shrink-0"
// // // // //         >
// // // // //           <Send className="h-5 w-5" />
// // // // //         </Button>
// // // // //       </div>
// // // // //     </form>
// // // // //   );
// // // // // };
// // // // "use client";

// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Plus, Send, Volume2 } from "lucide-react";
// // // // import { useState, useEffect } from 'react';
// // // // import {
// // // //   DropdownMenu,
// // // //   DropdownMenuContent,
// // // //   DropdownMenuItem,
// // // //   DropdownMenuTrigger,
// // // // } from "@/components/ui/dropdown-menu";

// // // // const ChatInput = ({
// // // //   newMessage,
// // // //   setNewMessage,
// // // //   handleSendMessage,
// // // //   placeholder
// // // // }) => {
// // // //   const [currentSound, setCurrentSound] = useState('1');

// // // //   useEffect(() => {
// // // //     const savedSound = localStorage.getItem('preferredSound') || '1';
// // // //     setCurrentSound(savedSound);
// // // //   }, []);

// // // //   const playSound = () => {
// // // //     const audio = new Audio(`/sounds/notifications/${currentSound}.mp3`);
// // // //     audio.play().catch(error => console.log('Error playing sound:', error));
// // // //   };

// // // //   const onSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (!newMessage.trim()) return;
    
// // // //     // Play send sound
// // // //     playSound();
// // // //     handleSendMessage(e);
// // // //   };

// // // //   const changeSound = (soundNumber) => {
// // // //     setCurrentSound(soundNumber);
// // // //     localStorage.setItem('preferredSound', soundNumber);
// // // //     // Play sample of selected sound
// // // //     const audio = new Audio(`/sounds/notifications/${soundNumber}.mp3`);
// // // //     audio.play().catch(error => console.log('Error playing sound:', error));
// // // //   };

// // // //   return (
// // // //     <form onSubmit={onSubmit} className="px-4 py-3 bg-white">
// // // //       <div className="flex items-center gap-2">
// // // //         <Button type="button" size="icon" variant="ghost">
// // // //           <Plus className="h-5 w-5" />
// // // //         </Button>
        
// // // //         <Input
// // // //           value={newMessage}
// // // //           onChange={(e) => setNewMessage(e.target.value)}
// // // //           placeholder={placeholder || "Message #channel"}
// // // //           className="flex-1"
// // // //         />

// // // //         <DropdownMenu>
// // // //           <DropdownMenuTrigger asChild>
// // // //             <Button variant="ghost" size="icon">
// // // //               <Volume2 className="h-5 w-5" />
// // // //             </Button>
// // // //           </DropdownMenuTrigger>
// // // //           <DropdownMenuContent align="end">
// // // //             {[1, 2, 3, 4, 5].map((number) => (
// // // //               <DropdownMenuItem
// // // //                 key={number}
// // // //                 onClick={() => changeSound(number.toString())}
// // // //                 className="cursor-pointer"
// // // //               >
// // // //                 Sound {number}
// // // //               </DropdownMenuItem>
// // // //             ))}
// // // //           </DropdownMenuContent>
// // // //         </DropdownMenu>
        
// // // //         <Button
// // // //           type="submit"
// // // //           size="icon"
// // // //           disabled={!newMessage}
// // // //           className="shrink-0"
// // // //         >
// // // //           <Send className="h-5 w-5" />
// // // //         </Button>
// // // //       </div>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default ChatInput;
// // // "use client";

// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Plus, Send, Volume2 } from "lucide-react";
// // // import { useState, useEffect } from 'react';
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu";

// // // const ChatInput = ({
// // //   newMessage,
// // //   setNewMessage,
// // //   handleSendMessage,
// // //   placeholder
// // // }) => {
// // //   const [currentSound, setCurrentSound] = useState('1');

// // //   useEffect(() => {
// // //     const savedSound = localStorage.getItem('preferredSound') || '1';
// // //     setCurrentSound(savedSound);
// // //   }, []);

// // //   const playSound = () => {
// // //     const audio = new Audio(`/sounds/notifications/${currentSound}.mp3`);
// // //     audio.play().catch(error => console.log('Error playing sound:', error));
// // //   };

// // //   const onSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (!newMessage.trim()) return;
    
// // //     // Play send sound
// // //     playSound();
// // //     handleSendMessage(e);
// // //   };

// // //   const changeSound = (soundNumber) => {
// // //     setCurrentSound(soundNumber);
// // //     localStorage.setItem('preferredSound', soundNumber);
// // //     // Play sample of selected sound
// // //     const audio = new Audio(`/sounds/notifications/${soundNumber}.mp3`);
// // //     audio.play().catch(error => console.log('Error playing sound:', error));
// // //   };

// // //   return (
// // //     <form onSubmit={onSubmit} className="px-4 py-3 bg-white">
// // //       <div className="flex items-center gap-2">
// // //         <Button type="button" size="icon" variant="ghost">
// // //           <Plus className="h-5 w-5" />
// // //         </Button>
        
// // //         <Input
// // //           value={newMessage}
// // //           onChange={(e) => setNewMessage(e.target.value)}
// // //           placeholder={placeholder || "Message #channel"}
// // //           className="flex-1"
// // //         />

// // //         <DropdownMenu>
// // //           <DropdownMenuTrigger asChild>
// // //             <Button variant="ghost" size="icon">
// // //               <Volume2 className="h-5 w-5" />
// // //             </Button>
// // //           </DropdownMenuTrigger>
// // //           <DropdownMenuContent align="end">
// // //             {[1, 2, 3, 4, 5].map((number) => (
// // //               <DropdownMenuItem
// // //                 key={number}
// // //                 onClick={() => changeSound(number.toString())}
// // //                 className="cursor-pointer"
// // //               >
// // //                 Sound {number}
// // //               </DropdownMenuItem>
// // //             ))}
// // //           </DropdownMenuContent>
// // //         </DropdownMenu>
        
// // //         <Button
// // //           type="submit"
// // //           size="icon"
// // //           disabled={!newMessage}
// // //           className="shrink-0"
// // //         >
// // //           <Send className="h-5 w-5" />
// // //         </Button>
// // //       </div>
// // //     </form>
// // //   );
// // // };

// // // export default ChatInput;
// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import { Input } from "@/components/ui/input";
// // // import { Button } from "@/components/ui/button";
// // // import { Send, Plus, Volume2 } from "lucide-react";
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu";

// // // const ChatInput = ({ newMessage, setNewMessage, handleSendMessage }) => {
// // //   const [currentSound, setCurrentSound] = useState("1");

// // //   useEffect(() => {
// // //     const savedSound = localStorage.getItem("preferredSound") || "1";
// // //     setCurrentSound(savedSound);
// // //   }, []);

// // //   const playSound = () => {
// // //     const audio = new Audio(`/sounds/notifications/${currentSound}.mp3`);
// // //     audio.play().catch((error) => console.error("Error playing sound:", error));
// // //   };

// // //   const onSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (!newMessage.trim()) return;

// // //     playSound();
// // //     handleSendMessage();
// // //   };

// // //   const changeSound = (soundNumber) => {
// // //     setCurrentSound(soundNumber);
// // //     localStorage.setItem("preferredSound", soundNumber);
// // //     const audio = new Audio(`/sounds/notifications/${soundNumber}.mp3`);
// // //     audio.play().catch((error) => console.error("Error playing sound:", error));
// // //   };

// // //   return (
// // //     <form onSubmit={onSubmit} className="px-4 py-3 bg-white">
// // //       <div className="flex items-center gap-2">
// // //         <Button type="button" size="icon" variant="ghost">
// // //           <Plus className="h-5 w-5" />
// // //         </Button>

// // //         <Input
// // //           value={newMessage}
// // //           onChange={(e) => setNewMessage(e.target.value)}
// // //           placeholder="Type your message..."
// // //           className="flex-1"
// // //         />

// // //         <DropdownMenu>
// // //           <DropdownMenuTrigger asChild>
// // //             <Button variant="ghost" size="icon">
// // //               <Volume2 className="h-5 w-5" />
// // //             </Button>
// // //           </DropdownMenuTrigger>
// // //           <DropdownMenuContent align="end">
// // //             {[1, 2, 3, 4, 5].map((number) => (
// // //               <DropdownMenuItem
// // //                 key={number}
// // //                 onClick={() => changeSound(number.toString())}
// // //                 className="cursor-pointer"
// // //               >
// // //                 Sound {number}
// // //               </DropdownMenuItem>
// // //             ))}
// // //           </DropdownMenuContent>
// // //         </DropdownMenu>

// // //         <Button
// // //           type="submit"
// // //           size="icon"
// // //           disabled={!newMessage}
// // //           className="shrink-0"
// // //         >
// // //           <Send className="h-5 w-5" />
// // //         </Button>
// // //       </div>
// // //     </form>
// // //   );
// // // };
// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Plus, Send } from "lucide-react";
// // import SoundSettings from "./SoundSettings";

// // const ChatInput = ({ newMessage, setNewMessage, handleSendMessage, placeholder }) => {
// //   const [currentSound, setCurrentSound] = useState("1");

// //   return (
// //     <form onSubmit={handleSendMessage} className="px-4 py-3 bg-white">
// //       <div className="flex items-center gap-2">
// //         <Button type="button" size="icon" variant="ghost">
// //           <Plus className="h-5 w-5" />
// //         </Button>
// //         <Input
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //           placeholder={placeholder || "Message #channel"}
// //           className="flex-1"
// //         />
// //         <SoundSettings currentSound={currentSound} onSoundChange={setCurrentSound} />
// //         <Button type="submit" size="icon" disabled={!newMessage.trim()} className="shrink-0">
// //           <Send className="h-5 w-5" />
// //         </Button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default ChatInput;
// "use client";

// import React from "react";

// const ChatInput = ({ newMessage, setNewMessage, handleSendMessage }) => {
//     return (
//       <div className="flex items-center px-4 py-2 bg-gray-100">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//           className="flex-1 px-4 py-2 border rounded"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Send
//         </button>
//       </div>
//     );
//   };
  
  

// export default ChatInput;
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Send, Volume2 } from "lucide-react";
import { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ChatInput = ({
  newMessage,
  setNewMessage,
  handleSendMessage,
  placeholder
}) => {
  const [currentSound, setCurrentSound] = useState('1');

  useEffect(() => {
    const savedSound = localStorage.getItem('preferredSound') || '1';
    setCurrentSound(savedSound);
  }, []);

  const playSound = () => {
    const audio = new Audio(`/sounds/notifications/${currentSound}.mp3`);
    audio.play().catch(error => console.log('Error playing sound:', error));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    playSound();
    handleSendMessage(e);
  };

  const changeSound = (soundNumber) => {
    setCurrentSound(soundNumber);
    localStorage.setItem('preferredSound', soundNumber);
    const audio = new Audio(`/sounds/notifications/${soundNumber}.mp3`);
    audio.play().catch(error => console.log('Error playing sound:', error));
  };

  return (
    <form onSubmit={onSubmit} className="px-4 py-3 bg-white">
      <div className="flex items-center gap-2">
        <Button type="button" size="icon" variant="ghost">
          <Plus className="h-5 w-5" />
        </Button>
        
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={placeholder || "Message #channel"}
          className="flex-1"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Volume2 className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[1, 2, 3, 4, 5].map((number) => (
              <DropdownMenuItem
                key={number}
                onClick={() => changeSound(number.toString())}
                className="cursor-pointer"
              >
                Sound {number}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button
          type="submit"
          size="icon"
          disabled={!newMessage.trim()}
          className="shrink-0"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;