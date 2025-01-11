
import { Button } from "@/components/ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import AddThumbnail from "./AddThumbnail";


const AddCourse = () => {


    return (
        <div >
            <div className="flex justify-between gap-2">
                <div className="flex-1">
                    <Label isRequired={true}>Course Name</Label>
                    <Input className="mt-2" />
                </div>

                <div className="flex-1">
                    <Label isRequired={true}>Score</Label>
                    <Input className="mt-2" />
                </div>
            </div>

            <div className="mt-4">
                <Label isRequired={true}>Description</Label>
                <Textarea />
            </div>

            <AddThumbnail />

            <div className="mt-4 flex justify-end gap-4">
                <Button>Add</Button>
                <Button variant={"outline"}>Cancel</Button>
            </div>
        </div>
    );
};

export default AddCourse;
