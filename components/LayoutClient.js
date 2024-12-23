// // // "use client";

// // // import { createClient } from "@/libs/supabase/client";
// // // import { useEffect, useState } from "react";
// // // import { usePathname } from "next/navigation";
// // // import { Crisp } from "crisp-sdk-web";
// // // import NextTopLoader from "nextjs-toploader";
// // // import { Toaster } from "react-hot-toast";
// // // import { Tooltip } from "react-tooltip";
// // // import config from "@/config";

// // // // Crisp customer chat support:
// // // // This component is separated from ClientLayout because it needs to be wrapped with <SessionProvider> to use useSession() hook
// // // const CrispChat = () => {
// // //   const pathname = usePathname();

// // //   const supabase = createClient();
// // //   const [data, setData] = useState(null);

// // //   // This is used to get the user data from Supabase Auth (if logged in) => user ID is used to identify users in Crisp
// // //   useEffect(() => {
// // //     const getUser = async () => {
// // //       const {
// // //         data: { user },
// // //       } = await supabase.auth.getUser();

// // //       if (user) {
// // //         setData({ user });
// // //       }
// // //     };
// // //     getUser();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (config?.crisp?.id) {
// // //       // Set up Crisp
// // //       Crisp.configure(config.crisp.id);

// // //       // (Optional) If onlyShowOnRoutes array is not empty in config.js file, Crisp will be hidden on the routes in the array.
// // //       // Use <AppButtonSupport> instead to show it (user clicks on the button to show Crisp—it cleans the UI)
// // //       if (
// // //         config.crisp.onlyShowOnRoutes &&
// // //         !config.crisp.onlyShowOnRoutes?.includes(pathname)
// // //       ) {
// // //         Crisp.chat.hide();
// // //         Crisp.chat.onChatClosed(() => {
// // //           Crisp.chat.hide();
// // //         });
// // //       }
// // //     }
// // //   }, [pathname]);

// // //   // Add User Unique ID to Crisp to easily identify users when reaching support (optional)
// // //   useEffect(() => {
// // //     if (data?.user && config?.crisp?.id) {
// // //       Crisp.session.setData({ userId: data.user?.id });
// // //     }
// // //   }, [data]);

// // //   return null;
// // // };

// // // // All the client wrappers are here (they can't be in server components)
// // // // 1. NextTopLoader: Show a progress bar at the top when navigating between pages
// // // // 2. Toaster: Show Success/Error messages anywhere from the app with toast()
// // // // 3. Tooltip: Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content=""
// // // // 4. CrispChat: Set Crisp customer chat support (see above)
// // // const ClientLayout = ({ children }) => {
// // //   return (
// // //     <>
// // //       {/* Show a progress bar at the top when navigating between pages */}
// // //       <NextTopLoader color={config.colors.main} showSpinner={false} />

// // //       {/* Content inside app/page.js files  */}
// // //       {children}

// // //       {/* Show Success/Error messages anywhere from the app with toast() */}
// // //       <Toaster
// // //         toastOptions={{
// // //           duration: 3000,
// // //         }}
// // //       />

// // //       {/* Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content="" */}
// // //       <Tooltip
// // //         id="tooltip"
// // //         className="z-[60] !opacity-100 max-w-sm shadow-lg"
// // //       />

// // //       {/* Set Crisp customer chat support */}
// // //       <CrispChat />
// // //     </>
// // //   );
// // // };

// // // export default ClientLayout;
// // "use client";

// // import { createClient } from "@/libs/supabase/client";
// // import { useEffect, useState } from "react";
// // import { usePathname } from "next/navigation";
// // import { Crisp } from "crisp-sdk-web";
// // import NextTopLoader from "nextjs-toploader";
// // import { Toaster } from "react-hot-toast";
// // import { Tooltip } from "react-tooltip";
// // import { ThemeProvider } from '@/components/chat/Layout';
// // import config from "@/config";

// // // Crisp customer chat support component
// // const CrispChat = () => {
// //   const pathname = usePathname();
// //   const supabase = createClient();
// //   const [data, setData] = useState(null);

// //   useEffect(() => {
// //     const getUser = async () => {
// //       const {
// //         data: { user },
// //       } = await supabase.auth.getUser();
// //       if (user) {
// //         setData({ user });
// //       }
// //     };
// //     getUser();
// //   }, []);

// //   useEffect(() => {
// //     if (config?.crisp?.id) {
// //       Crisp.configure(config.crisp.id);
      
// //       if (
// //         config.crisp.onlyShowOnRoutes &&
// //         !config.crisp.onlyShowOnRoutes?.includes(pathname)
// //       ) {
// //         Crisp.chat.hide();
// //         Crisp.chat.onChatClosed(() => {
// //           Crisp.chat.hide();
// //         });
// //       }
// //     }
// //   }, [pathname]);

// //   useEffect(() => {
// //     if (data?.user && config?.crisp?.id) {
// //       Crisp.session.setData({ userId: data.user?.id });
// //     }
// //   }, [data]);

// //   return null;
// // };

// // const ClientLayout = ({ children }) => {
// //   return (
// //     <ThemeProvider>
// //       {/* Progress bar for navigation */}
// //       <NextTopLoader color={config.colors.main} showSpinner={false} />
      
// //       {/* Main content */}
// //       {children}
      
// //       {/* Toast notifications */}
// //       <Toaster
// //         toastOptions={{
// //           duration: 3000,
// //         }}
// //       />

// //       {/* Tooltip provider */}
// //       <Tooltip
// //         id="tooltip"
// //         className="z-[60] !opacity-100 max-w-sm shadow-lg"
// //       />
      
// //       {/* Crisp chat support */}
// //       <CrispChat />
// //     </ThemeProvider>
// //   );
// // };

// // export default ClientLayout;
// "use client";

// // Import necessary modules
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { Crisp } from "crisp-sdk-web";
// import NextTopLoader from "nextjs-toploader";
// import { Toaster } from "react-hot-toast";
// import { Tooltip } from "react-tooltip";
// import { ThemeProvider } from "@/components/chat/Layout";
// import config from "@/config";

// // Crisp customer chat support component
// const CrispChat = () => {
//   const pathname = usePathname();
//   // const supabase = createClient(); // Commented out for testing without Supabase
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         // Mock user data for testing purposes
//         const user = { id: "test-user", email: "test@example.com" };
//         setData({ user });
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };
//     getUser();
//   }, []);

//   useEffect(() => {
//     if (config?.crisp?.id) {
//       Crisp.configure(config.crisp.id);

//       if (
//         config.crisp.onlyShowOnRoutes &&
//         !config.crisp.onlyShowOnRoutes?.includes(pathname)
//       ) {
//         Crisp.chat.hide();
//         Crisp.chat.onChatClosed(() => {
//           Crisp.chat.hide();
//         });
//       }
//     }
//   }, [pathname]);

//   useEffect(() => {
//     if (data?.user && config?.crisp?.id) {
//       Crisp.session.setData({ userId: data.user?.id });
//     }
//   }, [data]);

//   return null;
// };

// // ClientLayout for managing wrappers
// const ClientLayout = ({ children }) => {
//   return (
//     <ThemeProvider>
//       {/* Progress bar for navigation */}
//       <NextTopLoader color={config.colors.main} showSpinner={false} />

//       {/* Main content */}
//       {children}

//       {/* Toast notifications */}
//       <Toaster
//         toastOptions={{
//           duration: 3000,
//         }}
//       />

//       {/* Tooltip provider */}
//       <Tooltip
//         id="tooltip"
//         className="z-[60] !opacity-100 max-w-sm shadow-lg"
//       />

//       {/* Crisp chat support */}
//       <CrispChat />
//     </ThemeProvider>
//   );
// };

// export default ClientLayout;
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Crisp } from "crisp-sdk-web";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { ThemeProvider } from "@/components/chat/Layout";
import config from "@/config";
import { supabase } from '@/libs/supabase/client';  // Import supabase instance directly

// Crisp customer chat support component
const CrispChat = () => {
  const pathname = usePathname();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) throw error;
        setData({ user });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    if (config?.crisp?.id) {
      Crisp.configure(config.crisp.id);
      if (
        config.crisp.onlyShowOnRoutes &&
        !config.crisp.onlyShowOnRoutes?.includes(pathname)
      ) {
        Crisp.chat.hide();
        Crisp.chat.onChatClosed(() => {
          Crisp.chat.hide();
        });
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (data?.user && config?.crisp?.id) {
      Crisp.session.setData({ userId: data.user?.id });
    }
  }, [data]);

  return null;
};

// ClientLayout for managing wrappers
const ClientLayout = ({ children }) => {
  return (
    <ThemeProvider>
      {/* Progress bar for navigation */}
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      
      {/* Main content */}
      {children}
      
      {/* Toast notifications */}
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      
      {/* Tooltip provider */}
      <Tooltip
        id="tooltip"
        className="z-[60] !opacity-100 max-w-sm shadow-lg"
      />
      
      {/* Crisp chat support */}
      <CrispChat />
    </ThemeProvider>
  );
};

export default ClientLayout;