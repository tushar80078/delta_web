
import { SidebarFooter, SidebarProvider } from '@/components/ui/sidebar';
import { BookOpenText, Home } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Header } from './components/header';
import { Footer } from './components/footer';
import useUserDetails from '@/hooks/useUserDtails';
import { useNavigate } from 'react-router-dom';
import { authRoutes } from '@/navigation/AuthRoutes';



const WithNavbar = ({ children }) => {

    const navigate = useNavigate();
    const { activeModule, setActiveModuleFn } = useUserDetails();

    const navigateToModule = ({ moduleName, path }) => {
        setActiveModuleFn({ modlueName: moduleName })
        navigate(`/app${path}`);
    }

    return (
        <SidebarProvider
            style={{
                "--sidebar-width": "15rem",
            }}
        >
            <Sidebar>

                {/* Header */}
                <Header />

                <SidebarContent>

                    <SidebarMenu>
                        {authRoutes.map((item) => {

                            if (!item.isShowOnSidebar) {
                                return;
                            }

                            return <SidebarMenuItem key={item.title} className="mx-2 mt-2 " >
                                <SidebarMenuButton asChild isActive={item.title === activeModule} className={"p-5 cursor-pointer "} >
                                    <span onClick={() => navigateToModule({ moduleName: item.title, path: item.path })} >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        })}
                    </SidebarMenu>
                </SidebarContent>

                {/* Footer */}
                <SidebarFooter>
                    <div className='border-t -mx-2'>
                        <Footer />
                    </div>
                </SidebarFooter>

            </Sidebar>


            {children}
        </SidebarProvider >
    )
}

export default WithNavbar