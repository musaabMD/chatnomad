// // components/chat/SoundSettings.js
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu";
//   import { Button } from "@/components/ui/button";
//   import { Volume2 } from "lucide-react";
  
//   export const SoundSettings = ({ currentSound, onSoundChange }) => {
//     return (
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" size="icon">
//             <Volume2 className="h-5 w-5" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           {[1, 2, 3, 4, 5].map((number) => (
//             <DropdownMenuItem
//               key={number}
//               onClick={() => onSoundChange(number.toString())}
//               className="cursor-pointer"
//             >
//               <span className={currentSound === number.toString() ? "font-bold" : ""}>
//                 Notification Sound {number}
//               </span>
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     );
//   };
"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

const SoundSettings = ({ currentSound, onSoundChange }) => {
  return (
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
            onClick={() => onSoundChange(number.toString())}
            className="cursor-pointer"
          >
            <span className={currentSound === number.toString() ? "font-bold" : ""}>
              Notification Sound {number}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SoundSettings;