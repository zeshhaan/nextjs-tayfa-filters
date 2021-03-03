import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="h-full bg-gradient-to-r from-white via-purple-100 to-pink-50">
        <Hero />
      </main>
    </div>
  );
}

export default App;
