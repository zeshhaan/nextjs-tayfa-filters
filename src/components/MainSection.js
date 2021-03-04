import React from "react";
import Card from "./Card";
import Filters from "./Filters";

function MainSection() {
  return (
    <section className="w-full pt-40 pb-20">
      <div className="flex max-w-screen-lg mx-auto">
        {/* filters aside */}
        <aside className="sticky top-10 flex flex-col w-1/5 mr-10 px-3	">
          <Filters />
        </aside>
        {/* Card Grid */}
        <div className="flex-1 w-4/5">
          <div className="grid grid-cols-3 auto-rows-auto gap-8">
            <Card
              name="Edgar Allen"
              location="Atlanta GA, USA"
              img="eaco.svg"
            />

            <Card name="8020" location="SF, USA" img="8020.svg" />
            <Card
              name="Finsweet"
              location="Mountain View NY, USA"
              img="fs.svg"
            />
            <Card
              name="Refokus"
              location="Hamburg, Germany"
              img="refokus.svg"
            />
            <Card
              name="Edgar Allen"
              location="Atlanta GA, USA"
              img="eaco.svg"
            />

            <Card name="8020" location="SF, USA" img="8020.svg" />
            <Card
              name="Finsweet"
              location="Mountain View NY, USA"
              img="fs.svg"
            />
            <Card
              name="Refokus"
              location="Hamburg, Germany"
              img="refokus.svg"
            />
            <Card
              name="Edgar Allen"
              location="Atlanta GA, USA"
              img="eaco.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
