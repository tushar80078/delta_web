
import AddChapter from "@/components/forms/AddChapter"
import { DialogComponent } from "@/components/modal"
import { PaginationComponent } from "@/components/pagination"
import { CustomDataTable } from "@/components/table"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import useLayoutDetails from "@/hooks/useLayoutDetails"
import { ActionTooltip } from "@/molecules/actionTooltip"
import { useGetLessonsQuery } from "@/redux/store/apiSlice/lesson.api"
import { Ellipsis, ListOrdered, PlusCircle } from "lucide-react"
import { useState } from "react"
import { useParams } from "react-router-dom"

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
    const { courseId } = useParams();
    const { changeChapterPaginationFn, chapterPagination } = useLayoutDetails();

    const { data, } = useGetLessonsQuery({ page: chapterPagination?.page, pageSize: chapterPagination?.pageSize, courseId }, { skip: !courseId })



    return (
        <div>
            {/* Header */}
            <div className="flex justify-end gap-4 items-center pr-5 pb-5">

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

            <CustomDataTable
                columns={[
                    {
                        accessorKey: 'sequenceNumber',
                        header: 'Sequence',
                    },

                    {
                        accessorKey: 'lessonName',
                        header: 'Lessons',
                    },

                    {
                        accessorKey: 'isPublished',
                        header: 'Status',
                        accessorFn: row => row.isPublished ? 'Plublished' : 'Not Plublished',
                    },
                    {
                        accessorKey: 'isFree',
                        header: 'Is Free',
                        accessorFn: row => row.isFree ? 'Free' : 'No',
                    },

                ]}
                data={data?.data || []}

            />

            <div className="mt-5">
                <PaginationComponent
                    currentPage={data?.meta?.currentPage}
                    totalPages={data?.meta?.totalPages}
                    onPageChange={(page) => { changeChapterPaginationFn({ page, pageSize: undefined }) }}

                />
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