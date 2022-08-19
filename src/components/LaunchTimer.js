import React from "react";
import Timer from "./Timer";

const LaunchTimer = (props) => {

    const rocketInfo = docs => {
        if (docs[0] !== undefined) {
            const image = docs[0].launchpad.images.large[0];
            const clock = Timer(docs);

            return (
                <div style={{ 
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: 'top center',
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute'
                }}>
                    <h1 style={{ textAlign: "center" }}>
                        {docs[0].name}
                    </h1>
                    <h2 style={{ textAlign: "center" }}>
                        {docs[0].launchpad.full_name}
                    </h2>
                    {clock}
                    <div style={{
                        bottom: 0,
                        position: 'absolute'
                    }}>
                        <a href= {docs[0].links.reddit.campaign} rel="noreferrer" target="_blank">
                            More Info
                        </a>
                    </div>
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