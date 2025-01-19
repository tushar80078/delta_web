
import { SidebarFooter, SidebarProvider } from '@/components/ui/sidebar';
import {
    Sidebar,
    SidebarContent,
} from "@/components/ui/sidebar";
import { Header } from './components/header';
import { Footer } from './components/footer';
import useLayoutDetails from '@/hooks/useLayoutDetails';
import { useNavigate } from 'react-router-dom';
import authRoutes from '@/navigation/AuthRoutes/routes';
import { cn } from '@/lib/utils';
import SidebarTriggerComponent from './components/triggerButton';



const WithNavbar = ({ children }) => {

    const navigate = useNavigate();
    const { adminActiveModule, setAdminActiveModuleFn } = useLayoutDetails();


    const navigateToModule = ({ moduleName, path }) => {
        setAdminActiveModuleFn({ modlueName: moduleName })
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
                    <div className='' />
                    <div >
                        {authRoutes.map((item) => {
                            if (!item.isShowOnSidebar) {
                                return null;
                            }

                            return (
                                <div
                                    key={item.title}
                                    className={cn(
                                        "px-5 py-4 mb-1 cursor-pointer  border-l-2 border-l-[#0F172A]  transition-colors ",
                                        adminActiveModule === item.title && "border-l-2 border-l-blue-500 transition-colors"
                                    )}
                                    onClick={() => navigateToModule({ moduleName: item.title, path: item.path })}
                                >
                                    <div>
                                        <span
                                            className={cn(
                                                "flex text-white items-center transition-all duration-300 ease-in-out",
                                                adminActiveModule === item.title && "text-blue-500"
                                            )}

                                        >
                                            <item.icon className="mr-3 text-sm transition-all duration-300 ease-in-out" size={20} />
                                            <span
                                                className={cn(
                                                    "poppins-light text-[15px] transition-all duration-300 ease-in-out",
                                                    adminActiveModule === item.title && "font-mono poppins-medium"
                                                )}
                                            >
                                                {item.title}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </SidebarContent>

                {/* Footer */}
                <SidebarFooter>
                    <div className=''>
                        <Footer />
                    </div>
                </SidebarFooter>

            </Sidebar>

            <SidebarTriggerComponent />

            <div className='px-4 py-3 overflow-auto w-[100%] bg-[#F8FAFA]'>
                {children}
            </div>
        </SidebarProvider >
    )
}

export default WithNavbar