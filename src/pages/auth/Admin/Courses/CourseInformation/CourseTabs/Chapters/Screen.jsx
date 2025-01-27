
import AddChapter from "@/components/forms/AddChapter"
import { DialogComponent } from "@/components/modal"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ActionTooltip } from "@/molecules/actionTooltip"
import { Ellipsis, ListOrdered, PlusCircle } from "lucide-react"
import { useState } from "react"

const moreOptions = [
    {
        icon: PlusCircle,
        name: "Add chapter"
    },
    {
        icon: ListOrdered,
        name: "Rearrange"
    }
]

const Screen = () => {
    const [chapterFormModalState, setChapterFormModalState] = useState(false);
    return (
        <div>
            {/* Header */}
            <div className="flex justify-end gap-4 items-center">

                <Input
                    placeholder="Search chapter..."
                    className={"w-[400px]"}
                />

                <Popover >
                    <ActionTooltip side={"bottom"} label={"More"}>
                        <PopoverTrigger asChild>
                            <Ellipsis className="w-7 h-7 cursor-pointer " />
                        </PopoverTrigger>
                    </ActionTooltip>
                    <PopoverContent className=" min-w-60 px-1 py-1">
                        {
                            moreOptions?.map((ele, index) => {
                                return <div
                                    key={index}
                                    className="hover:bg-blue-300/10 rounded-sm  px-3 py-2 transition-all cursor-pointer flex  items-center gap-2 text-[15px]"
                                    onClick={() => setChapterFormModalState(true)}
                                >
                                    <ele.icon size={18} />
                                    {ele.name}
                                </div>
                            })
                        }
                    </PopoverContent>
                </Popover>
            </div>

            <DialogComponent
                open={chapterFormModalState}
                onClose={() => setChapterFormModalState(false)}
                title={"Chapter"}
                description={"Add chpater information"}
            >
                <AddChapter
                    onClose={() => setChapterFormModalState(false)}
                />
            </DialogComponent>


        </div>
    )
}

export default Screen