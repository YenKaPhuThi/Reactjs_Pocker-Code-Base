import React from "react";

// Components
import Player from "../Player";

const Main = () => {
  return (
    <div
      style={{ position: "relative", height: "600px" }}
      className="container"
    >
      <Player index={1} />
      <Player index={2} />
      <Player index={3} />
      <Player index={4} />
      
      <img
        alt="main"
        style={{
          position: "absolute",
          width: "100px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        src="https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png"
      />
    </div>
  );
};

export default Main;
