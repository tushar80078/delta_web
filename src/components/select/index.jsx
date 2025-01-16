import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SelectComponent = ({ options, placeholder = "Select", className = "w-[180px]", onChange, defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleChange = (value) => {
        setSelectedValue(value);
        if (onChange) onChange(value);
    };

    return (
        <Select onValueChange={handleChange} value={selectedValue}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SelectComponent;
