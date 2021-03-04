import React from "react";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import Navbar from "./components/Nav";

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="h-full bg-gradient-to-r from-white via-purple-100 to-pink-50 min-h-screen">
        <Hero />
        <MainSection className="w-full" />
      </main>
    </div>
  );
}

export default App;
