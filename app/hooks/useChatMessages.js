// // app/hooks/useChatMessages.js
// import { useState, useEffect, useCallback } from 'react';
// import { createClient } from '@/libs/supabase/client';

// export function useChatMessages(channelId) {
//   const [messages, setMessages] = useState([]);
//   const [lastTimestamp, setLastTimestamp] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const supabase = createClient();

//   const fetchMessages = useCallback(async () => {
//     try {
//       const { data, error } = await supabase.rpc('get_messages_after_timestamp', {
//         channel_name: channelId,
//         last_timestamp: lastTimestamp,
//         msg_limit: 50
//       });

//       if (error) throw error;

//       if (data && data.length > 0) {
//         setMessages(prev => {
//           const combined = [...prev, ...data];
//           const unique = Array.from(new Map(combined.map(m => [m.id, m])).values());
//           return unique.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
//         });
//         setLastTimestamp(data[data.length - 1].created_at);
//       }
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [channelId, lastTimestamp, supabase]);

//   useEffect(() => {
//     setIsLoading(true);
//     setLastTimestamp(null);
//     setMessages([]);
//     fetchMessages();
//   }, [channelId]);

//   useEffect(() => {
//     let timeoutId;
//     const poll = async () => {
//       await fetchMessages();
//       timeoutId = setTimeout(poll, 1000);
//     };

//     timeoutId = setTimeout(poll, 1000);
//     return () => clearTimeout(timeoutId);
//   }, [fetchMessages]);

//   const sendMessage = async (content) => {
//     try {
//       const { data: { user } } = await supabase.auth.getUser();
//       if (!user?.id) throw new Error('Not authenticated');

//       const { error } = await supabase.from('messages').insert({
//         content,
//         channel_id: channelId,
//         user_id: user.id
//       });

//       if (error) throw error;
      
//       fetchMessages();
//       return true;
//     } catch (error) {
//       console.error('Error sending message:', error);
//       return false;
//     }
//   };

//   return {
//     messages,
//     isLoading,
//     sendMessage
//   };
// }
import { useState, useEffect } from "react";
import { supabase } from "@/libs/supabase/client";

const useChatMessages = (channelId) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!channelId) return;

    const fetchMessages = async () => {
        try {
          const { data, error } = await supabase
            .from('messages')
            .select('*')
            .eq('channel_id', 'general') // Replace 'general' with your channel_id
            .order('created_at', { ascending: true });
      
          if (error) {
            console.error('Error fetching messages:', error);
            return [];
          }
      
          return data;
        } catch (err) {
          console.error('Unexpected error fetching messages:', err);
          return [];
        }
      };
      
      

    fetchMessages();

    const subscription = supabase
      .channel(`channel:messages:${channelId}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setMessages((prev) => [...prev, payload.new]);
          }
        }
      )
      .subscribe();


      const sendMessage = async (content) => {
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (!user?.id) throw new Error('Not authenticated');
      
          const { error } = await supabase.from('messages').insert({
            content,
            channel_id: channelId,
            user_id: user.id
          });
      
          if (error) throw error;
      
          fetchMessages();
          return true;
        } catch (error) {
          console.error('Error sending message:', error);
          return false;
        }
      };
      

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [channelId]);

  return { messages, loading };
};

export default useChatMessages;
