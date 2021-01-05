import { useEffect, useRef } from 'react';


const useInterval = (callback, delay) => {

    const savedCallback = useRef();


    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay) {
            const id = setInterval(tick, delay);
            return (() => clearInterval(id));
        }
    }, [delay]);
};

export default useInterval;