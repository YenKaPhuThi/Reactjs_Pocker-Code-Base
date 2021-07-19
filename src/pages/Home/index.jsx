import React from 'react';

const Home = () => {
  return (
    <>
      <div
        className="text-center"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="diplay-4 mb-5"> Welcome to Pocker Center</h1>
        <h3>Fill your info and start</h3>
        <form className="w-25 mx-auto">
          <input
            type="input"
            placeholder="username"
            className="w-100 form-control mb-3"
          />
          <input
            type="input"
            placeholder="email"
            className="w-100 form-control mb-3"
          />
          <input
            type="input"
            placeholder="phone"
            className="w-100 form-control mb-3"
          />
          <button className="btn btn-success">Start new Game</button>
        </form>
      </div>
    </>
  )
}

export default Home;
