import React from "react";
import Product from "./product";

export default function ProductBlock() {
  return (
    <section className={`mx-auto flex flex-col items-center`}>
      <h2 id={`products`} className={`h-0 text-purefunc-1`}>
        PRODUCTS
      </h2>
      <div className={`flex flex-wrap justify-center gap-8 lg:mx-24 xl:mx-48 xl:gap-16 2xl:mx-0 2xl:gap-8`}>
        <Product name={`Pheme`} />
        <Product name={`Footinder`} />
        <Product name={`Hanhuang`} />
      </div>
    </section>
  );
}
