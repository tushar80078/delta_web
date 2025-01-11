
import {
    AlignLeft,
    BadgeCheck,
    Bell,
    CreditCard,
    LogOut,
    Sparkles,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { useDispatch } from "react-redux"
import { logOutUser } from "@/redux/store/apiSlice/reducer/user"
import { purge } from "@/redux/store"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import useUserDetails from "@/hooks/useUserDtails"

export function Footer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isMobile } = useSidebar();
    const { data } = useUserDetails();

    const logoutUser = async () => {
        try {
            dispatch(logOutUser());
            purge();
            localStorage.removeItem('token');
            navigate('/');
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <SidebarMenu >
            <SidebarMenuItem >
                <DropdownMenu >
                    <DropdownMenuTrigger asChild className="rounded-none mx-0 px-0 bg-[#0F172A] text-white hover:bg-[#0F172A] hover:text-white">
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:text-blue-500 border-none bg-[#0F172A] active:bg-[#0F172A]   focus-visible:ring-0"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={data.profileImage} alt={"U"} />
                                <AvatarFallback className="rounded-lg">U</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate poppins-regular">Hii, {data.userName}</span>

                            </div>
                            <AlignLeft className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg "
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={data.profileImage} alt={"U"} />
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{data.userName}</span>
                                    <span className="truncate text-xs">{data.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Sparkles />
                                Upgrade to Pro
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheck />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell />
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => logoutUser()}>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
