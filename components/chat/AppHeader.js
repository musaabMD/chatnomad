// // // // components/chat/AppHeader.js
// // // import { Button } from "@/components/ui/button";
// // // import { Hash, Palette, Settings } from "lucide-react";

// // // export const AppHeader = ({ onToggleSidebar }) => {
// // //   return (
// // //     <div className="border-b p-4 bg-[#5A00FF] text-white">
// // //       <div className="flex items-center justify-between">
// // //         <div className="flex items-center space-x-3">
// // //           {/* HashTag Toggle Button */}
// // //           <Button
// // //             variant="ghost"
// // //             size="icon"
// // //             className="text-white hover:bg-white/10"
// // //             onClick={onToggleSidebar}
// // //           >
// // //             <Hash className="h-5 w-5" />
// // //           </Button>
          
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-xl">✈️</span>
// // //             <div>
// // //               <h1 className="font-bold text-xl">TravelChat</h1>
// // //               <p className="text-sm text-white/70">Connect with travelers</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Settings and Theme */}
// // //         <div className="flex items-center space-x-2">
// // //           <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
// // //             <Palette className="h-5 w-5" />
// // //           </Button>
// // //           <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
// // //             <Settings className="h-5 w-5" />
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // import { Button } from "@/components/ui/button";
// // import { Hash, Palette, Settings } from "lucide-react";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// // export const AppHeader = ({ onToggleSidebar }) => {
// //   return (
// //     <div className="border-b p-4 bg-[#5A00FF] text-white">
// //       <div className="flex items-center justify-between">
// //         <div className="flex items-center space-x-3">
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             className="lg:hidden text-white hover:bg-white/10"
// //             onClick={onToggleSidebar}
// //           >
// //             <Hash className="h-6 w-6" />
// //           </Button>
          
// //           <div className="flex items-center gap-2">
// //             <span className="text-xl">✈️</span>
// //             <div>
// //               <h1 className="font-bold text-xl">TravelChat</h1>
// //               <p className="text-sm text-white/70">Connect with travelers</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex items-center space-x-3">
// //           <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
// //             <Palette className="h-5 w-5" />
// //           </Button>
// //           <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
// //             <Settings className="h-5 w-5" />
// //           </Button>
// //           <Avatar className="h-8 w-8">
// //             <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=user" />
// //             <AvatarFallback>U</AvatarFallback>
// //           </Avatar>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// "use client";
// import { Button } from "@/components/ui/button";
// import { Hash, Palette, Settings } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// const AppHeader = ({ onToggleSidebar }) => {
//   return (
//     <div className="border-b p-4 bg-[#5A00FF] text-white">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-3">
//           <Button
//             variant="ghost"
//             size="icon"
//             className="lg:hidden text-white hover:bg-white/10"
//             onClick={onToggleSidebar}
//           >
//             <Hash className="h-6 w-6" />
//           </Button>
//           <div className="flex items-center gap-2">
//             <span className="text-xl">✈️</span>
//             <div>
//               <h1 className="font-bold text-xl">TravelChat</h1>
//               <p className="text-sm text-white/70">Connect with travelers</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
//             <Palette className="h-5 w-5" />
//           </Button>
//           <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
//             <Settings className="h-5 w-5" />
//           </Button>
//           <Avatar className="h-8 w-8">
//             <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=user" />
//             <AvatarFallback>U</AvatarFallback>
//           </Avatar>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Hash,
  Settings,
  Menu,
  Plus,
  User,
  LogOut,
  CreditCard,
  ChevronRight,
  Bell,
  Mail,
  MapPin,
  Calendar,
  Timer
} from "lucide-react";
import { cn } from "@/lib/utils";

const AppHeader = ({ onToggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  const AppLogo = () => (
    <div className="flex items-center gap-2">
      <div className={cn(
        "p-2 rounded-lg relative overflow-hidden",
        "bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600",
        "animate-gradient bg-[length:200%_auto]"
      )}>
        <Hash className="h-5 w-5 text-white relative z-10" />
      </div>
      <span className="font-bold text-lg tracking-tight text-gray-900">Tripbase</span>
    </div>
  );

  const UpgradeButton = () => (
    <Button 
      variant="outline" 
      className={cn(
        "relative overflow-hidden border-none",
        "bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600",
        "animate-gradient bg-[length:200%_auto] text-white",
      )}
    >
      <span className="flex items-center gap-2">
        <Plus className="h-4 w-4" />
        <span className="font-medium">Upgrade</span>
      </span>
    </Button>
  );

  const QuickProfileCard = () => (
    <div className="w-[300px] space-y-4">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=user" alt="@user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">John Doe</h4>
          <div className="flex items-center text-sm text-muted-foreground">
            <Mail className="mr-1 h-4 w-4" />
            john@example.com
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            New York, USA
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-2">
        <div className="space-y-1">
          <div className="flex items-center text-sm">
            <Calendar className="mr-1 h-4 w-4" />
            Member since
          </div>
          <div className="text-sm font-medium">Jan 2024</div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center text-sm">
            <Timer className="mr-1 h-4 w-4" />
            Last active
          </div>
          <div className="text-sm font-medium">2 hours ago</div>
        </div>
      </div>
      <Separator />
      <div className="flex justify-between">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          View Profile
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Edit Profile
        </Button>
      </div>
    </div>
  );

  const QuickSettings = () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Settings</h4>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />
      <div className="space-y-2">
        {[
          { label: "Account", icon: User },
          { label: "Billing", icon: CreditCard },
          { label: "Notifications", icon: Bell },
          { label: "Security", icon: Settings }
        ].map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start"
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
            <ChevronRight className="ml-auto h-4 w-4" />
          </Button>
        ))}
      </div>
    </div>
  );

  const UserNav = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://api.dicebear.com/7.x/adventurer/svg?seed=user" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              john@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center gap-4 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>
                  <AppLogo />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Separator />
                <UpgradeButton />
              </div>
            </SheetContent>
          </Sheet>
          <AppLogo />
        </div>

        <div className="hidden lg:flex">
          <AppLogo />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden lg:block">
            <UpgradeButton />
          </div>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <QuickProfileCard />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <QuickSettings />
            </PopoverContent>
          </Popover>

          <UserNav />
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 3s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default AppHeader;