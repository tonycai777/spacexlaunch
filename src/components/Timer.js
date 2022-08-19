import React, { useState, useEffect } from 'react';

// Credits to https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
function Timer(docs) {

    const calculateTimeLeft = () => {
        const launchUnix = docs[0].date_unix
        const unixNow = Math.floor(Date.now() / 1000);
        const timeLeft = launchUnix - unixNow;
        let time = {};
        if (timeLeft > 0) {
            time = {
                days: Math.floor(timeLeft / 86400),
                hours: Math.floor((timeLeft % 86400) / 3600),
                minutes: Math.floor((timeLeft % 3600) / 60),
                seconds: Math.floor(timeLeft % 60)
            }
        }
        return time;
    }

    const [timerLeft, setTimerLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimerLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timerLeft).forEach((interval) => {
        if (calculateTimeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timerLeft[interval]} {interval}{" "}
            </span>
        );
    })

    return (
        <div
            style={{
                textAlign: "center"
            }}>
            <p>
                Launches in:
            </p>
            {timerComponents.length ? timerComponents : <span>Rocket has launched!</span>}
        </div>
    )
}

export default Timer;