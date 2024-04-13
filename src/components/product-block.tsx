import React from 'react'
import ImagePheme from '../assets/product-pheme.webp'
import ImageHanHuang from '../assets/product-hanhuang.webp'
import ImageFooTinder from '../assets/product-footinder.webp'
import ImageBlackLogo from '../assets/purefunc_black.webp'

export default function ProductBlock() {
  return (
    <section className={`flex flex-col`}>
      <h2
        id={`product`}
        className={`text-purefunc-1 h-0`}>
        PRODUCTS
      </h2>
      <div className={`mx-auto flex flex-row justify-center gap-8 text-[#FFFFFF]`}>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImagePheme}
            className={`w-48 rounded-xl`}
            alt={`logo of Pheme`}/>
          <p className={`font-extrabold text-xl`}>Pheme</p>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageHanHuang}
            className={`w-48 rounded-xl`}
            alt={`logo of HanHuang`}/>
          <p className={`font-extrabold text-xl`}>HanHuang</p>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageFooTinder}
            className={`w-48 rounded-xl`}
            alt={`logo of FooTinder`}/>
          <p className={`font-extrabold text-xl`}>FooTinder</p>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageBlackLogo}
            className={`w-48 rounded-xl`}
            alt={`logo of PureFunc Blockchain Wallet`}/>
          <p className={`font-extrabold text-xl`}>PBW</p>
        </div>
      </div>
    </section>
  )
}
