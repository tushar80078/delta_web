
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();


const MultiSelect = ({ options, value, onChange, placeholder, defaultValue }) => {
    const colourStyles = {
        control: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: 'bg-zinc-100/50',
            border: 'none',
            boxShadow: isFocused ? 'none' : 'none',
            '&:hover': { borderColor: 'none' },
        }),

        option: (styles, { isSelected, isFocused }) => ({
            ...styles,
            backgroundColor: 'transparent', // Remove background color from options
            color: isSelected ? '#111827' : isFocused ? '#111827' : '#374151', // Darker text when selected or focused

            '&:hover': {
                backgroundColor: '#eff6ff', // No background color on hover
                color: '#111827', // Dark text color when hovering

            },
        }),

        multiValue: (styles) => ({
            ...styles,
            backgroundColor: '', // Light gray for selected values (tags)
            border: '1px solid #e5e7eb', // Border with slightly darker gray
            borderRadius: '5px',
            color: '#111827', // Darker text
        }),

        multiValueLabel: (styles) => ({
            ...styles,
            color: '#111827', // Dark text for selected value labels
        }),

        multiValueRemove: (styles) => ({
            ...styles,
            color: '#111827', // Dark text for remove button
            ':hover': {
                backgroundColor: '#e53935', // Red for remove button hover
                color: 'white',
            },
        }),

    };

    return (
        <Select
            closeMenuOnSelect={false}
            placeholder={placeholder}
            components={animatedComponents}
            defaultValue={defaultValue}
            isMulti
            options={options}
            className="border rounded-lg text-black min-h-10 text-sm "
            styles={colourStyles}
            value={value} // Controlled value from react-hook-form
            onChange={onChange} // Controlled onChange from react-hook-form
        />
    );
};

export default MultiSelect;
