import { useState } from 'react';

const useInputState = (initialValue = null) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    };
    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // };

    // const inputProps = {
    //     value: value,
    //     onChange: handleChange,
    // };
    // return [value, handleChange];
    // return inputProps;
    return { value, onChange };
};
export default useInputState;
