import React from "react";
import ImagePheme from "../assets/product-pheme.webp";
import ImageFootinder from "../assets/product-footinder.webp";
import ImageHanhuang from "../assets/product-hanhuang.webp";

interface Props {
  name: string;
}

export default function Product({ name }: Props) {
  let imgSrc;
  if (name === `Pheme`) {
    imgSrc = ImagePheme;
  } else if (name === `Footinder`) {
    imgSrc = ImageFootinder;
  } else {
    imgSrc = ImageHanhuang;
  }

  return (
    <div className={`flex flex-row gap-8`}>
      <div className={`flex flex-col items-center gap-2`}>
        <img src={imgSrc} className={`w-[256px] rounded-xl 2xl:w-[192px]`} alt={name} />
        <p className={`text-xl font-extrabold text-[#FFFFFF]`}>{name}</p>
      </div>
    </div>
  );
}
