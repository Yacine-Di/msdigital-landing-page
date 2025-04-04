import { useEffect, useState } from 'react';

function useIsClient(): boolean {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}

export default useIsClient;
