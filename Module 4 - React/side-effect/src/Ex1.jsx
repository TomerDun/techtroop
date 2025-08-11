import { useEffect, useState } from "react";

export default function Ex1() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = new Date().toLocaleTimeString();
            setTime(newTime);
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>Time is {time}</div>
    )

}