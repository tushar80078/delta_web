import Logo from "@/assets/Logo.svg"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"

export function Header() {
    const navigate = useNavigate();

    return (
        <div className="px-3 py-1 flex justify-between items-center">

            <div className=" flex rounded-sm px-2 py-3 cursor-pointer" onClick={() => navigate('/')}>
                <img src={Logo} alt="Logo" width="40" />

                <div className="flex flex-col ">
                    <span className="font-bold text-white poppins-regular text-[22px] ml-2">Delta</span>
                </div>

            </div>
            <SidebarTrigger />

        </div>
    )
}
