import { useEffect, useState } from "react";

const readStoredValue = (key, initialValue) => {
    try {
        const storedValue = localStorage.getItem(key);

        if (storedValue === null) {
            return initialValue;
        }

        return JSON.parse(storedValue);
    } catch {
        return initialValue;
    }
};

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() =>
        readStoredValue(key, initialValue),
    );

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // Storage can fail in private mode or when quota is exceeded.
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
