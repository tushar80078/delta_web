import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'


const SidebarTriggerComponent = () => {
    const { state } = useSidebar();

    return (
        <>
            {
                state === 'collapsed' && <SidebarTrigger className="text-black hover:bg-black hover:text-white" />
            }
        </>
    )
}

export default SidebarTriggerComponent