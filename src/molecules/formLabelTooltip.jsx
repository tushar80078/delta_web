import { Label } from "@/components/ui/label"
import { Info } from "lucide-react"
import { ActionTooltip } from "./actionTooltip"

const LabelTooltip = ({ label, isRequired = false, tooltipText }) => {
    return (
        <div className="flex gap-2 items-center">
            <Label isRequired={isRequired}>
                {label}
            </Label>

            {tooltipText && <div>
                <ActionTooltip side={'right'} label={tooltipText}>
                    <Info size={16} className="cursor-pointer text-blue-600" />
                </ActionTooltip>
            </div>}
        </div>
    )
}

export default LabelTooltip