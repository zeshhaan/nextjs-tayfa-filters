import React from "react";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Create React App</h1>
      <h2>
        Deployed with{" "}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{" "}
        was bootstrapped with{" "}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{" "}
        and contains two directories, <code>/public</code> for static assets and{" "}
        <code>/src</code> for components and content.
      </p>
    </main>
  );
}

export default App;
