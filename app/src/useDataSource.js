import { useState, useEffect } from "react";

export const useDataSource = getResourceFunc => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const result = await getResourceFunc();
                setResource(result);
            } catch (error) {
                console.error("Error fetching resource:", error);
            }
        })();
    }, [getResourceFunc]);

    return resource;
};