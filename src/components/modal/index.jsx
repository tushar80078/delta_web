import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

import Loader from '../loader';
import { cn } from '@/lib/utils';



export function DialogComponent({
    open,
    onClose,
    footer,
    title,
    description,
    loading,
    children,
    modalSize = 'sm',
}) {
    return (
        <Dialog open={open} onOpenChange={onClose} modal>

            <DialogContent
                onInteractOutside={e => e.preventDefault()}
                className={cn("bg-white px-9 py-7   text-black  border-none  overflow-y-auto max-h-[calc(100vh-10%)]", modalSize == 'lg' && 'lg:max-w-screen-md')}>

                {loading && <Loader />}

                <DialogHeader className="">
                    {title && (
                        <DialogTitle className="text-2xl font-semibold">
                            {title}
                        </DialogTitle>
                    )}

                    {description && (
                        <DialogDescription className=" text-zinc-500">
                            {description}
                        </DialogDescription>
                    )}
                </DialogHeader>

                <div className="grid gap-4 py-4 ">{children}</div>

                {footer && <DialogFooter>{footer}</DialogFooter>}

            </DialogContent>
        </Dialog>
    );
}
