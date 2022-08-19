import React from "react";

const LaunchTimer = (props) => {

    const rocketInfo = docs => {
        console.log("here");
        if (docs[0] !== undefined) {
            return (
                <div>
                    <p> {docs[0].name}  </p>
                    <p> {docs[0].launchpad.full_name}   </p>
                    <p> {docs[0].date_utc}   </p>
                </div>
            )
        } else {
            return;
        }
    }

    return (
        <>
            {
                rocketInfo(props.docs)
            }
        </>
    );
}

export default LaunchTimer;