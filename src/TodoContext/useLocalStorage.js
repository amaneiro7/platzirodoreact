import { useEffect, useState } from "react";

export function useLocalStorage(itenName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itenName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itenName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000);
    }, [item]);

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itenName, JSON.stringify(newItem));
            setItem(item);
        } catch (error) {
            setError(error);
        }
    };
    return {
        item,
        saveItem,
        loading,
        error,
    };
}
