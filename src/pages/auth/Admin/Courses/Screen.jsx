import AddCourse from "@/components/forms/AddCourse";
import { DialogComponent } from "@/components/modal";
import { Button } from "@/components/ui/button"
import Heading from "@/molecules/heading"
import { useState } from "react"

const Screen = () => {
    const [modalState, setModalState] = useState(false);
    return (
        <div >
            {/* Heading */}
            <div className="flex  justify-between w-[100%] ">

                <Heading title={'Courses'} />

                <Button size="lg" onClick={() => setModalState(true)} >
                    Add Course
                </Button>
            </div>

            <DialogComponent
                open={modalState}
                onClose={() => setModalState(false)}
                title={'Course Information'}
                description={'Add all required information'}
                modalSize="lg"
            >
                <AddCourse />
            </DialogComponent>

        </div>
    )
}

export default Screen