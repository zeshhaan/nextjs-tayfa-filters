import React from "react";
import Card from "./Card";

export default function Hero() {
  return (
    <section className="pt-40	">
      <div className="flex flex-col items-center">
        <h1 className="font-bold md:text-6xl text-4xl">Find an Expert</h1>
        <p className="font-light tracking-tighter md:text-2xl text-xl text-center mt-4 md:mt-7 w-3/4">
          Hire help to build your app, adopt best practices, remove blockers,
          and ship on time.
        </p>
      </div>
      <div className="flex pt-20 overflow-x-scroll justify-start xl:justify-center ">
        <Card
          name="Edgar Allen & Co"
          location="Atlanta GA, USA"
          img="eaco.svg"
          padding="px-4"
        />

        <Card name="8020" location="SF, USA" img="8020.svg" padding="px-4"/>
        <Card name="Finsweet" location="Mountain View NY, USA" img="fs.svg" padding="px-4"/>
        <Card name="Refokus" location="Hamburg, Germany" img="refokus.svg" padding="px-4"/>
      </div>
    </section>
  );
}
