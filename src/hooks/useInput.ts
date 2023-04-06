import { useState } from 'react';

export const useInput = (initValue: string) => {
    const [value, setValue] = useState(initValue);

    const [toggledValue, setToggledValue] = useState(false);
    const toggle = () => setToggledValue(!toggledValue);

    const clear = () => setValue('');

    return {
        clear,
        value,
        setValue,
        toggle,
        toggledValue,
    };
};
