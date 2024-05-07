import React, { useEffect, useState } from 'react'

const TimeCount = () => {

    const [Timer, setTimer] = useState(10);

    useEffect(() => {
        const CountDown = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);

        if (Timer === 0) {
            clearInterval(CountDown);
        }
        return () => {
            clearInterval(CountDown);
        }

    }, [Timer])

    return (
        <div>
            <h2>задание 1</h2>
            <h2>{Timer}</h2>
        </div>
    )
}

export default TimeCount