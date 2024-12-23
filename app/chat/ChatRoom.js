// // // // // // // // // 'use client';
// // // // // // // // // // app/chat/ChatRoom.js
// // // // // // // // // import { useState } from 'react';
// // // // // // // // // import ChatHeader from '@/components/chat/ChatHeader';
// // // // // // // // // import ChatMessages from '@/components/chat/ChatMessages';
// // // // // // // // // import ChatInput from '@/components/chat/ChatInput';
// // // // // // // // // import { useChatMessages } from '@/app/hooks/useChatMessages';

// // // // // // // // // const CHANNEL_DATA = {
// // // // // // // // //   country: 'Thailand',
// // // // // // // // //   emoji: '🇹🇭',
// // // // // // // // //   description: 'City of Angels - Street Food Paradise',
// // // // // // // // //   temperature: '32°C',
// // // // // // // // //   cities: [{ name: 'Bangkok' }]
// // // // // // // // // };

// // // // // // // // // export default function ChatRoom() {
// // // // // // // // //   const [newMessage, setNewMessage] = useState('');
// // // // // // // // //   const { messages, isLoading, sendMessage } = useChatMessages('bangkok');

// // // // // // // // //   const handleSendMessage = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (!newMessage.trim()) return;

// // // // // // // // //     const success = await sendMessage(newMessage);
// // // // // // // // //     if (success) {
// // // // // // // // //       setNewMessage('');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   if (isLoading) {
// // // // // // // // //     return (
// // // // // // // // //       <div className="flex-1 flex items-center justify-center">
// // // // // // // // //         <div className="animate-pulse">Loading messages...</div>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <ChatHeader
// // // // // // // // //         activeChannel="bangkok"
// // // // // // // // //         channels={[CHANNEL_DATA]}
// // // // // // // // //       />
// // // // // // // // //       <ChatMessages 
// // // // // // // // //         messages={messages}
// // // // // // // // //         channels={[CHANNEL_DATA]}
// // // // // // // // //       />
// // // // // // // // //       <ChatInput
// // // // // // // // //         newMessage={newMessage}
// // // // // // // // //         setNewMessage={setNewMessage}
// // // // // // // // //         handleSendMessage={handleSendMessage}
// // // // // // // // //         placeholder="Message #bangkok"
// // // // // // // // //       />
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // "use client";

// // // // // // // // import React, { useState } from "react";
// // // // // // // // import useChatMessages from "@/app/hooks/useChatMessages";
// // // // // // // // import ChatMessages from "@/components/chat/ChatMessages";
// // // // // // // // import ChatInput from "@/components/chat/ChatInput";
// // // // // // // // import Sidebar from "@/components/chat/Sidebar";
// // // // // // // // const ChatRoom = () => {
// // // // // // // //     const [messages, setMessages] = useState([]);
// // // // // // // //     const [newMessage, setNewMessage] = useState('');
  
// // // // // // // //     const handleSendMessage = async () => {
// // // // // // // //       if (!newMessage.trim()) return;
  
// // // // // // // //       const success = await sendMessage(newMessage);
// // // // // // // //       if (success) {
// // // // // // // //         setNewMessage('');
// // // // // // // //         const updatedMessages = await fetchMessages();
// // // // // // // //         setMessages(updatedMessages);
// // // // // // // //       }
// // // // // // // //     };
  
// // // // // // // //     useEffect(() => {
// // // // // // // //       const loadMessages = async () => {
// // // // // // // //         const initialMessages = await fetchMessages();
// // // // // // // //         setMessages(initialMessages);
// // // // // // // //       };
  
// // // // // // // //       loadMessages();
// // // // // // // //     }, []);
  
// // // // // // // //     return (
// // // // // // // //       <div className="flex flex-col h-screen">
// // // // // // // //         <div className="flex-1 overflow-y-auto">
// // // // // // // //           {messages.map((msg) => (
// // // // // // // //             <div key={msg.id} className="px-4 py-2 border-b">
// // // // // // // //               <strong>{msg.channel_id}:</strong> {msg.content}
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //         <ChatInput
// // // // // // // //           newMessage={newMessage}
// // // // // // // //           setNewMessage={setNewMessage}
// // // // // // // //           handleSendMessage={handleSendMessage}
// // // // // // // //         />
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   };
  
  

// // // // // // // // export default ChatRoom;
// // // // // // // "use client";

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import Sidebar from "@/components/chat/Sidebar";
// // // // // // // import ChatMessages from "@/components/chat/ChatMessages";
// // // // // // // import ChatInput from "@/components/chat/ChatInput";
// // // // // // // import { supabase } from "@/libs/supabase/client"; // Ensure this is correctly exported.

// // // // // // // const ChatRoom = () => {
// // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // //   const [newMessage, setNewMessage] = useState("");
// // // // // // //   const [activeChannel, setActiveChannel] = useState("General");
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   // Fetch messages for the active channel
// // // // // // //   const fetchMessages = async () => {
// // // // // // //     try {
// // // // // // //       const { data, error } = await supabase
// // // // // // //         .from("messages")
// // // // // // //         .select("*")
// // // // // // //         .eq("channel_id", activeChannel)
// // // // // // //         .order("created_at", { ascending: true });

// // // // // // //       if (error) throw error;
// // // // // // //       setMessages(data || []);
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Error fetching messages:", err);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Send a new message
// // // // // // //   const handleSendMessage = async () => {
// // // // // // //     if (!newMessage.trim()) return;

// // // // // // //     try {
// // // // // // //       const { data: user } = await supabase.auth.getUser();
// // // // // // //       if (!user?.id) throw new Error("Not authenticated");

// // // // // // //       const { error } = await supabase.from("messages").insert({
// // // // // // //         content: newMessage,
// // // // // // //         channel_id: activeChannel,
// // // // // // //         user_id: user.id,
// // // // // // //       });

// // // // // // //       if (error) throw error;

// // // // // // //       setNewMessage("");
// // // // // // //       fetchMessages(); // Refresh messages after sending
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Error sending message:", err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     fetchMessages();
// // // // // // //     const subscription = supabase
// // // // // // //       .channel(`channel:messages:${activeChannel}`)
// // // // // // //       .on(
// // // // // // //         "postgres_changes",
// // // // // // //         { event: "INSERT", schema: "public", table: "messages" },
// // // // // // //         (payload) => {
// // // // // // //           setMessages((prev) => [...prev, payload.new]);
// // // // // // //         }
// // // // // // //       )
// // // // // // //       .subscribe();

// // // // // // //     return () => {
// // // // // // //       supabase.removeChannel(subscription);
// // // // // // //     };
// // // // // // //   }, [activeChannel]);

// // // // // // //   return (
// // // // // // //     <div className="flex h-screen">
// // // // // // //       <Sidebar activeChannel={activeChannel} setActiveChannel={setActiveChannel} />
// // // // // // //       <div className="flex-1 flex flex-col">
// // // // // // //         {loading ? (
// // // // // // //           <div className="flex-1 flex items-center justify-center">
// // // // // // //             <div className="animate-pulse">Loading messages...</div>
// // // // // // //           </div>
// // // // // // //         ) : (
// // // // // // //           <ChatMessages messages={messages} />
// // // // // // //         )}
// // // // // // //         <ChatInput
// // // // // // //           newMessage={newMessage}
// // // // // // //           setNewMessage={setNewMessage}
// // // // // // //           handleSendMessage={handleSendMessage}
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ChatRoom;
// // // // // // 'use client';

// // // // // // import { useState, useEffect } from 'react';
// // // // // // import { supabase } from '@/libs/supabase/client';
// // // // // // import ChatHeader from '@/components/chat/ChatHeader';
// // // // // // import ChatMessages from '@/components/chat/ChatMessages';
// // // // // // import ChatInput from '@/components/chat/ChatInput';

// // // // // // const CHANNEL_DATA = {
// // // // // //   country: 'Thailand',
// // // // // //   emoji: '🇹🇭',
// // // // // //   description: 'City of Angels - Street Food Paradise',
// // // // // //   temperature: '32°C',
// // // // // //   cities: [{ name: 'Bangkok' }]
// // // // // // };

// // // // // // export default function ChatRoom() {
// // // // // //   const [messages, setMessages] = useState([]);
// // // // // //   const [newMessage, setNewMessage] = useState('');
// // // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // // //   // Fetch messages initially and set up real-time subscription
// // // // // //   useEffect(() => {
// // // // // //     fetchMessages();
    
// // // // // //     // Set up real-time subscription
// // // // // //     const channel = supabase
// // // // // //       .channel('messages')
// // // // // //       .on('postgres_changes', 
// // // // // //         { event: 'INSERT', schema: 'public', table: 'messages' },
// // // // // //         (payload) => {
// // // // // //           console.log('New message:', payload);
// // // // // //           setMessages(prevMessages => [...prevMessages, payload.new]);
// // // // // //         }
// // // // // //       )
// // // // // //       .subscribe();

// // // // // //     return () => {
// // // // // //       supabase.removeChannel(channel);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   const fetchMessages = async () => {
// // // // // //     try {
// // // // // //       const { data: messages, error } = await supabase
// // // // // //         .from('messages')
// // // // // //         .select('*')
// // // // // //         .order('created_at', { ascending: true });
      
// // // // // //       if (error) throw error;
// // // // // //       setMessages(messages || []);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching messages:', error);
// // // // // //     } finally {
// // // // // //       setIsLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSendMessage = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (!newMessage.trim()) return;

// // // // // //     try {
// // // // // //       const { error } = await supabase
// // // // // //         .from('messages')
// // // // // //         .insert([{ 
// // // // // //           content: newMessage,
// // // // // //           channel_id: 'bangkok',
// // // // // //           // For testing without auth, use a fixed user_id that exists in your DB
// // // // // //           user_id: (await supabase.auth.getUser()).data?.user?.id || 
// // // // // //                   (await supabase.from('users').select('id').limit(1).single()).data?.id
// // // // // //         }]);

// // // // // //       if (error) throw error;
// // // // // //       setNewMessage('');
// // // // // //     } catch (error) {
// // // // // //       console.error('Error sending message:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   if (isLoading) {
// // // // // //     return (
// // // // // //       <div className="flex-1 flex items-center justify-center">
// // // // // //         <div className="animate-pulse">Loading messages...</div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <>
// // // // // //       <ChatHeader
// // // // // //         activeChannel="bangkok"
// // // // // //         channels={[CHANNEL_DATA]}
// // // // // //       />
// // // // // //       <ChatMessages 
// // // // // //         messages={messages}
// // // // // //         channels={[CHANNEL_DATA]}
// // // // // //       />
// // // // // //       <ChatInput
// // // // // //         newMessage={newMessage}
// // // // // //         setNewMessage={setNewMessage}
// // // // // //         handleSendMessage={handleSendMessage}
// // // // // //         placeholder="Message #bangkok"
// // // // // //       />
// // // // // //     </>
// // // // // //   );
// // // // // // }
// // // // // 'use client';

// // // // // import { useState, useEffect } from 'react';
// // // // // import { supabase } from '@/libs/supabase/client';
// // // // // import ChatHeader from '@/components/chat/ChatHeader';
// // // // // import ChatMessages from '@/components/chat/ChatMessages';
// // // // // import ChatInput from '@/components/chat/ChatInput';

// // // // // const CHANNEL_DATA = {
// // // // //   country: 'Thailand',
// // // // //   emoji: '🇹🇭',
// // // // //   description: 'City of Angels - Street Food Paradise',
// // // // //   temperature: '32°C',
// // // // //   cities: [{ name: 'Bangkok' }]
// // // // // };

// // // // // export default function ChatRoom() {
// // // // //   const [messages, setMessages] = useState([]);
// // // // //   const [newMessage, setNewMessage] = useState('');
// // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // //   // Log Supabase connection
// // // // //   useEffect(() => {
// // // // //     console.log('Supabase client:', supabase);
// // // // //   }, []);

// // // // //   // Fetch messages initially
// // // // //   useEffect(() => {
// // // // //     fetchMessages();
// // // // //   }, []);

// // // // //   const fetchMessages = async () => {
// // // // //     try {
// // // // //       console.log('Fetching messages...');
// // // // //       const { data, error } = await supabase
// // // // //         .from('messages')
// // // // //         .select(`
// // // // //           id,
// // // // //           content,
// // // // //           created_at,
// // // // //           channel_id,
// // // // //           user_id,
// // // // //           users (
// // // // //             username,
// // // // //             avatar_url
// // // // //           )
// // // // //         `)
// // // // //         .eq('channel_id', 'bangkok')
// // // // //         .order('created_at', { ascending: true });

// // // // //       if (error) {
// // // // //         console.error('Error fetching messages:', error);
// // // // //         throw error;
// // // // //       }

// // // // //       console.log('Fetched messages:', data);
// // // // //       setMessages(data || []);
// // // // //     } catch (error) {
// // // // //       console.error('Error in fetchMessages:', error);
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleSendMessage = async (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!newMessage.trim()) return;

// // // // //     try {
// // // // //       console.log('Sending message:', newMessage);

// // // // //       // First get a user
// // // // //       const { data: users } = await supabase
// // // // //         .from('users')
// // // // //         .select('id')
// // // // //         .limit(1);

// // // // //       console.log('Found user:', users?.[0]);

// // // // //       if (!users?.[0]?.id) {
// // // // //         throw new Error('No user found');
// // // // //       }

// // // // //       const { data, error } = await supabase
// // // // //         .from('messages')
// // // // //         .insert([
// // // // //           {
// // // // //             content: newMessage,
// // // // //             channel_id: 'bangkok',
// // // // //             user_id: users[0].id
// // // // //           }
// // // // //         ])
// // // // //         .select();

// // // // //       if (error) {
// // // // //         console.error('Error sending message:', error);
// // // // //         throw error;
// // // // //       }

// // // // //       console.log('Message sent successfully:', data);
// // // // //       setNewMessage('');
      
// // // // //       // Fetch messages again to update the UI
// // // // //       await fetchMessages();
// // // // //     } catch (error) {
// // // // //       console.error('Error in handleSendMessage:', error);
// // // // //       alert('Error sending message. Check console for details.');
// // // // //     }
// // // // //   };

// // // // //   console.log('Current messages:', messages);

// // // // //   return (
// // // // //     <>
// // // // //       <ChatHeader
// // // // //         activeChannel="bangkok"
// // // // //         channels={[CHANNEL_DATA]}
// // // // //       />
// // // // //       <ChatMessages 
// // // // //         messages={messages}
// // // // //         channels={[CHANNEL_DATA]}
// // // // //       />
// // // // //       <ChatInput
// // // // //         newMessage={newMessage}
// // // // //         setNewMessage={setNewMessage}
// // // // //         handleSendMessage={handleSendMessage}
// // // // //         placeholder="Message #bangkok"
// // // // //       />
// // // // //     </>
// // // // //   );
// // // // // }
// // // // 'use client';

// // // // import { useState, useEffect } from 'react';
// // // // import { supabase } from '@/libs/supabase/client';
// // // // import ChatHeader from '@/components/chat/ChatHeader';
// // // // import ChatMessages from '@/components/chat/ChatMessages';
// // // // import ChatInput from '@/components/chat/ChatInput';

// // // // const CHANNEL_DATA = {
// // // //   country: 'Thailand',
// // // //   emoji: '🇹🇭',
// // // //   description: 'City of Angels - Street Food Paradise',
// // // //   temperature: '32°C',
// // // //   cities: [{ name: 'Bangkok' }]
// // // // };

// // // // export default function ChatRoom() {
// // // //   const [messages, setMessages] = useState([]);
// // // //   const [newMessage, setNewMessage] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [testUser, setTestUser] = useState(null);

// // // //   // Initialize by getting/creating test user
// // // //   useEffect(() => {
// // // //     const initTestUser = async () => {
// // // //       try {
// // // //         // Try to get existing test user
// // // //         let { data: users, error } = await supabase
// // // //           .from('users')
// // // //           .select('*')
// // // //           .limit(1);

// // // //         if (error) throw error;

// // // //         if (!users || users.length === 0) {
// // // //           // Create test user if none exists
// // // //           const { data: newUser, error: createError } = await supabase
// // // //             .from('users')
// // // //             .insert([{ username: 'TestUser' }])
// // // //             .select()
// // // //             .single();

// // // //           if (createError) throw createError;
// // // //           setTestUser(newUser);
// // // //           console.log('Created new test user:', newUser);
// // // //         } else {
// // // //           setTestUser(users[0]);
// // // //           console.log('Using existing test user:', users[0]);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error('Error setting up test user:', error);
// // // //       }
// // // //     };

// // // //     initTestUser();
// // // //   }, []);

// // // //   // Fetch messages
// // // //   const fetchMessages = async () => {
// // // //     try {
// // // //       console.log('Fetching messages...');
// // // //       const { data, error } = await supabase
// // // //         .rpc('get_channel_messages', { 
// // // //           channel_name: 'bangkok',
// // // //           msg_limit: 50
// // // //         });

// // // //       if (error) throw error;

// // // //       console.log('Fetched messages:', data);
// // // //       setMessages(data || []);
// // // //     } catch (error) {
// // // //       console.error('Error fetching messages:', error);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   // Initial fetch
// // // //   useEffect(() => {
// // // //     fetchMessages();

// // // //     // Set up real-time subscription
// // // //     const channel = supabase
// // // //       .channel('custom-insert-channel')
// // // //       .on(
// // // //         'postgres_changes',
// // // //         { event: 'INSERT', schema: 'public', table: 'messages' },
// // // //         (payload) => {
// // // //           console.log('New message received:', payload);
// // // //           fetchMessages();
// // // //         }
// // // //       )
// // // //       .subscribe();

// // // //     return () => {
// // // //       supabase.removeChannel(channel);
// // // //     };
// // // //   }, []);

// // // //   const handleSendMessage = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!newMessage.trim() || !testUser) return;

// // // //     try {
// // // //       console.log('Sending message with user:', testUser);

// // // //       const { data, error } = await supabase
// // // //         .from('messages')
// // // //         .insert([{
// // // //           content: newMessage,
// // // //           channel_id: 'bangkok',
// // // //           user_id: testUser.id
// // // //         }])
// // // //         .select();

// // // //       if (error) throw error;

// // // //       console.log('Message sent successfully:', data);
// // // //       setNewMessage('');
// // // //       await fetchMessages();
// // // //     } catch (error) {
// // // //       console.error('Error sending message:', error);
// // // //       alert('Error sending message. Check console for details.');
// // // //     }
// // // //   };

// // // //   console.log('Current messages:', messages);

// // // //   return (
// // // //     <>
// // // //       <ChatHeader
// // // //         activeChannel="bangkok"
// // // //         channels={[CHANNEL_DATA]}
// // // //       />
// // // //       <ChatMessages 
// // // //         messages={messages}
// // // //         channels={[CHANNEL_DATA]}
// // // //       />
// // // //       <ChatInput
// // // //         newMessage={newMessage}
// // // //         setNewMessage={setNewMessage}
// // // //         handleSendMessage={handleSendMessage}
// // // //         placeholder="Message #bangkok"
// // // //       />
// // // //     </>
// // // //   );
// // // // }
// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import { supabase } from '@/libs/supabase/client';
// // // import ChatHeader from '@/components/chat/ChatHeader';
// // // import ChatMessages from '@/components/chat/ChatMessages';
// // // import ChatInput from '@/components/chat/ChatInput';

// // // const CHANNEL_DATA = {
// // //   country: 'Thailand',
// // //   emoji: '🇹🇭',
// // //   description: 'City of Angels - Street Food Paradise',
// // //   temperature: '32°C',
// // //   cities: [{ name: 'Bangkok' }]
// // // };

// // // export default function ChatRoom() {
// // //   const [messages, setMessages] = useState([]);
// // //   const [newMessage, setNewMessage] = useState('');
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [testUser, setTestUser] = useState(null);

// // //   // Initialize test user
// // //   useEffect(() => {
// // //     const initTestUser = async () => {
// // //       try {
// // //         const { data: existingUser, error: fetchError } = await supabase
// // //           .from('users')
// // //           .select('*')
// // //           .limit(1)
// // //           .single();

// // //         if (fetchError && fetchError.code !== 'PGRST116') {
// // //           console.error('Error fetching user:', fetchError);
// // //           return;
// // //         }

// // //         if (existingUser) {
// // //           setTestUser(existingUser);
// // //           console.log('Using existing user:', existingUser);
// // //           return;
// // //         }

// // //         // Create new test user if none exists
// // //         const { data: newUser, error: createError } = await supabase
// // //           .from('users')
// // //           .insert([{
// // //             username: 'TestUser',
// // //             avatar_url: `https://api.dicebear.com/7.x/adventurer/svg?seed=TestUser`
// // //           }])
// // //           .select()
// // //           .single();

// // //         if (createError) throw createError;
// // //         setTestUser(newUser);
// // //         console.log('Created new test user:', newUser);

// // //       } catch (error) {
// // //         console.error('Error in user initialization:', error);
// // //       }
// // //     };

// // //     initTestUser();
// // //   }, []);

// // //   // Fetch messages
// // //   const fetchMessages = async () => {
// // //     try {
// // //       const { data, error } = await supabase
// // //         .from('messages')
// // //         .select(`
// // //           *,
// // //           users (*)
// // //         `)
// // //         .order('created_at', { ascending: true });

// // //       if (error) throw error;
      
// // //       console.log('Fetched messages:', data);
// // //       setMessages(data || []);
// // //     } catch (error) {
// // //       console.error('Error fetching messages:', error);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Initial fetch and real-time subscription
// // //   useEffect(() => {
// // //     fetchMessages();

// // //     const channel = supabase
// // //       .channel('messages-channel')
// // //       .on(
// // //         'postgres_changes',
// // //         { 
// // //           event: '*',
// // //           schema: 'public',
// // //           table: 'messages'
// // //         },
// // //         (payload) => {
// // //           console.log('Real-time update received:', payload);
// // //           fetchMessages();
// // //         }
// // //       )
// // //       .subscribe((status) => {
// // //         console.log('Subscription status:', status);
// // //       });

// // //     return () => {
// // //       supabase.removeChannel(channel);
// // //     };
// // //   }, []);

// // //   const handleSendMessage = async (e) => {
// // //     e.preventDefault();
// // //     if (!newMessage.trim() || !testUser) return;

// // //     try {
// // //       const { data, error } = await supabase
// // //         .from('messages')
// // //         .insert([{
// // //           content: newMessage,
// // //           channel_id: 'bangkok',
// // //           user_id: testUser.id
// // //         }])
// // //         .select();

// // //       if (error) throw error;

// // //       console.log('Message sent:', data);
// // //       setNewMessage('');
// // //       await fetchMessages();
// // //     } catch (error) {
// // //       console.error('Error sending message:', error);
// // //     }
// // //   };

// // //   if (isLoading) {
// // //     return <div>Loading chat...</div>;
// // //   }

// // //   return (
// // //     <div className="flex flex-col h-screen">
// // //       <ChatHeader
// // //         activeChannel="bangkok"
// // //         channels={[CHANNEL_DATA]}
// // //       />
// // //       <div className="flex-1 overflow-hidden">
// // //         <ChatMessages
// // //           messages={messages}
// // //           channels={[CHANNEL_DATA]}
// // //         />
// // //       </div>
// // //       <ChatInput
// // //         newMessage={newMessage}
// // //         setNewMessage={setNewMessage}
// // //         handleSendMessage={handleSendMessage}
// // //         placeholder="Message #bangkok"
// // //       />
// // //     </div>
// // //   );
// // // }
// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { supabase } from '@/libs/supabase/client';
// // import ChatHeader from '@/components/chat/ChatHeader';
// // import ChatMessages from '@/components/chat/ChatMessages';
// // import ChatInput from '@/components/chat/ChatInput';

// // const CHANNEL_DATA = {
// //   country: 'Thailand',
// //   emoji: '🇹🇭',
// //   description: 'City of Angels - Street Food Paradise',
// //   temperature: '32°C',
// //   cities: [{ name: 'Bangkok' }]
// // };

// // export default function ChatRoom() {
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');
// //   const [defaultUser, setDefaultUser] = useState(null);

// //   // Create or get default user
// //   useEffect(() => {
// //     const setupDefaultUser = async () => {
// //       try {
// //         // Try to get existing default user
// //         let { data: user } = await supabase
// //           .from('users')
// //           .select('*')
// //           .eq('username', 'DefaultUser')
// //           .single();

// //         // If no default user exists, create one
// //         if (!user) {
// //           const { data: newUser, error: createError } = await supabase
// //             .from('users')
// //             .insert([{
// //               username: 'DefaultUser',
// //               avatar_url: `https://api.dicebear.com/7.x/adventurer/svg?seed=DefaultUser`
// //             }])
// //             .select()
// //             .single();

// //           if (createError) throw createError;
// //           user = newUser;
// //         }

// //         setDefaultUser(user);
// //         console.log('Using default user:', user);
// //       } catch (error) {
// //         console.error('Error setting up default user:', error);
// //       }
// //     };

// //     setupDefaultUser();
// //   }, []);

// //   // Fetch messages
// //   const fetchMessages = async () => {
// //     try {
// //       const { data, error } = await supabase
// //         .from('messages')
// //         .select(`
// //           *,
// //           users (*)
// //         `)
// //         .order('created_at', { ascending: true });

// //       if (error) throw error;
      
// //       console.log('Fetched messages:', data);
// //       setMessages(data || []);
// //     } catch (error) {
// //       console.error('Error fetching messages:', error);
// //     }
// //   };

// //   // Initial fetch and setup real-time subscription
// //   useEffect(() => {
// //     fetchMessages();

// //     const channel = supabase
// //       .channel('messages-channel')
// //       .on(
// //         'postgres_changes',
// //         { 
// //           event: '*',
// //           schema: 'public',
// //           table: 'messages'
// //         },
// //         (payload) => {
// //           console.log('Real-time update:', payload);
// //           fetchMessages();
// //         }
// //       )
// //       .subscribe();

// //     return () => {
// //       supabase.removeChannel(channel);
// //     };
// //   }, []);

// //   const handleSendMessage = async (e) => {
// //     e.preventDefault();
// //     if (!newMessage.trim() || !defaultUser) return;

// //     try {
// //       const { error } = await supabase
// //         .from('messages')
// //         .insert([{
// //           content: newMessage,
// //           channel_id: 'bangkok',
// //           user_id: defaultUser.id
// //         }]);

// //       if (error) throw error;

// //       setNewMessage('');
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col h-screen">
// //       <ChatHeader
// //         activeChannel="bangkok"
// //         channels={[CHANNEL_DATA]}
// //       />
// //       <div className="flex-1 overflow-hidden">
// //         <ChatMessages
// //           messages={messages}
// //           channels={[CHANNEL_DATA]}
// //         />
// //       </div>
// //       <ChatInput
// //         newMessage={newMessage}
// //         setNewMessage={setNewMessage}
// //         handleSendMessage={handleSendMessage}
// //         placeholder="Message #bangkok"
// //       />
// //     </div>
// //   );
// // }
// 'use client';

// import { useState, useEffect } from 'react';
// import { supabase } from '@/libs/supabase/client';
// import ChatHeader from '@/components/chat/ChatHeader';
// import ChatMessages from '@/components/chat/ChatMessages';
// import ChatInput from '@/components/chat/ChatInput';

// const CHANNEL_DATA = {
//   country: 'Thailand',
//   emoji: '🇹🇭',
//   description: 'City of Angels - Street Food Paradise',
//   temperature: '32°C',
//   cities: [{ name: 'Bangkok' }]
// };

// export default function ChatRoom() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [defaultUser, setDefaultUser] = useState(null);

//   // Create or get default user
//   useEffect(() => {
//     const setupDefaultUser = async () => {
//       try {
//         // Try to get existing default user
//         let { data: user } = await supabase
//           .from('users')
//           .select('*')
//           .eq('username', 'TestUser')
//           .single();

//         if (user) {
//           console.log('Found existing user:', user);
//           setDefaultUser(user);
//         } else {
//           // Create new user if none exists
//           const { data: newUser, error: createError } = await supabase
//             .from('users')
//             .insert([{
//               id: 'd1fb7d3c-6c91-4fd4-b031-64026b63651d',
//               username: 'TestUser',
//               avatar_url: `https://api.dicebear.com/7.x/adventurer/svg?seed=TestUser`
//             }])
//             .select()
//             .single();

//           if (createError) throw createError;
//           console.log('Created new user:', newUser);
//           setDefaultUser(newUser);
//         }
//       } catch (error) {
//         console.error('Error setting up default user:', error);
//       }
//     };

//     setupDefaultUser();
//   }, []);

//   // Fetch messages
//   const fetchMessages = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('messages')
//         .select(`
//           id,
//           content,
//           created_at,
//           channel_id,
//           users (
//             id,
//             username,
//             avatar_url
//           )
//         `)
//         .eq('channel_id', 'bangkok')
//         .order('created_at', { ascending: true });

//       if (error) {
//         throw error;
//       }

//       console.log('Fetched messages:', data);
//       setMessages(data || []);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   // Initial fetch and setup real-time subscription
//   useEffect(() => {
//     fetchMessages();

//     // Set up real-time subscription
//     const channel = supabase
//       .channel('messages-channel')
//       .on(
//         'postgres_changes',
//         {
//           event: '*',
//           schema: 'public',
//           table: 'messages',
//           filter: 'channel_id=eq.bangkok'
//         },
//         (payload) => {
//           console.log('Real-time update:', payload);
//           fetchMessages();
//         }
//       )
//       .subscribe((status) => {
//         console.log('Subscription status:', status);
//       });

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, []);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim() || !defaultUser) return;

//     try {
//       const { error } = await supabase
//         .from('messages')
//         .insert([{
//           content: newMessage,
//           channel_id: 'bangkok',
//           user_id: defaultUser.id
//         }]);

//       if (error) throw error;

//       console.log('Message sent successfully');
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <ChatHeader
//         activeChannel="bangkok"
//         channels={[CHANNEL_DATA]}
//       />
//       <div className="flex-1 overflow-hidden">
//         <ChatMessages
//           messages={messages}
//           channels={[CHANNEL_DATA]}
//         />
//       </div>
//       <ChatInput
//         newMessage={newMessage}
//         setNewMessage={setNewMessage}
//         handleSendMessage={handleSendMessage}
//         placeholder="Message #bangkok"
//       />
//     </div>
//   );
// }
'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/libs/supabase/client';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatMessages from '@/components/chat/ChatMessages';
import ChatInput from '@/components/chat/ChatInput';

const CHANNEL_DATA = {
  country: 'Thailand',
  emoji: '🇹🇭',
  description: 'City of Angels - Street Food Paradise',
  temperature: '32°C',
  cities: [{ name: 'Bangkok' }]
};

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [defaultUser, setDefaultUser] = useState(null);

  // Get existing user
  useEffect(() => {
    const setupDefaultUser = async () => {
      try {
        const { data: existingUsers, error: fetchError } = await supabase
          .from('users')
          .select('*')
          .limit(1);

        if (fetchError) throw fetchError;

        if (existingUsers && existingUsers.length > 0) {
          console.log('Using existing user:', existingUsers[0]);
          setDefaultUser(existingUsers[0]);
        }
      } catch (error) {
        console.error('Error setting up default user:', error);
      }
    };

    setupDefaultUser();
  }, []);

  // Fetch messages
  const fetchMessages = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select(`
          id,
          content,
          created_at,
          channel_id,
          users (
            id,
            username,
            avatar_url
          )
        `)
        .eq('channel_id', 'bangkok')
        .order('created_at', { ascending: true });

      if (error) throw error;

      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }, []);

  // Initial fetch and setup real-time subscription
  useEffect(() => {
    fetchMessages();

    const channel = supabase.channel('messages-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages'
        },
        () => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [fetchMessages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !defaultUser) return;

    try {
      // Optimistically add the new message to the UI
      const optimisticMessage = {
        id: crypto.randomUUID(),
        content: newMessage,
        channel_id: 'bangkok',
        created_at: new Date().toISOString(),
        users: defaultUser
      };

      setMessages(prev => [...prev, optimisticMessage]);
      setNewMessage('');

      // Actually send the message
      const { error } = await supabase
        .from('messages')
        .insert([{
          content: newMessage,
          channel_id: 'bangkok',
          user_id: defaultUser.id
        }]);

      if (error) throw error;

    } catch (error) {
      console.error('Error sending message:', error);
      // Revert optimistic update on error
      setMessages(prev => prev.filter(msg => msg.id !== optimisticMessage.id));
      setNewMessage(newMessage);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader
        activeChannel="bangkok"
        channels={[CHANNEL_DATA]}
      />
      <div className="flex-1 overflow-hidden">
        <ChatMessages
          messages={messages}
          channels={[CHANNEL_DATA]}
        />
      </div>
      <ChatInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSendMessage={handleSendMessage}
        placeholder="Message #bangkok"
      />
    </div>
  );
}