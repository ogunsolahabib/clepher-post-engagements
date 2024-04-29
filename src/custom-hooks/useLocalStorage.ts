import { useState, } from 'react';

declare const window: any
const useLocalStorage = (key: string, initialValue: string | null = null) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get the item from local storage by key
            const item = window.localStorage.getItem(key);

            console.log(item)
            // Parse the JSON string back to an object/array
            return item ?? initialValue ?? '';
        } catch (error) {
            // If parsing fails, return the initial value
            console.error('Error parsing localStorage item:', error);
            return initialValue || '';
        }
    });

    const setValue = (value: string) => {
        try {

            // Set the item in local storage as a JSON string
            window.localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));

            console.log(value, 'set')
            // Update the state to reflect the change
            setStoredValue(value);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
