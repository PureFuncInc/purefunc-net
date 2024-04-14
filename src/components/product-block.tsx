import React from 'react'
import ImagePheme from '../assets/product-pheme.webp'
import ImageHanHuang from '../assets/product-hanhuang.webp'
import ImageFooTinder from '../assets/product-footinder.webp'
import ImageBlackLogo from '../assets/purefunc_black.webp'

export default function ProductBlock() {
  return (
    <section className={`flex flex-col items-center`}>
      <h2
        id={`product`}
        className={`h-0 text-purefunc-1`}>
        PRODUCTS
      </h2>
      <div className={`flex flex-row gap-8`}>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImagePheme}
            className={`w-48 rounded-xl`}
            alt={`logo of Pheme`}/>
          <p className={`text-xl font-extrabold`}>Pheme</p>
        </div>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
      </div>
      <div className={`flex flex-row gap-8 items-center`}>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageHanHuang}
            className={`w-48 rounded-xl`}
            alt={`logo of HanHuang`}/>
          <p className={`text-xl font-extrabold`}>HanHuang</p>
        </div>
      </div>
      <div className={`flex flex-row gap-8`}>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageFooTinder}
            className={`w-48 rounded-xl`}
            alt={`logo of FooTinder`}/>
          <p className={`text-xl font-extrabold`}>FooTinder</p>
        </div>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
      </div>
      <div className={`flex flex-row gap-8 items-center`}>
        <div className={`border-2 border-[#FFFFFF] w-[512px] h-[200px]`}>
        </div>
        <div className={`flex flex-col items-center`}>
          <img
            src={ImageBlackLogo}
            className={`w-48 rounded-xl`}
            alt={`logo of PureFunc Blockchain Wallet`}/>
          <p className={`text-xl font-extrabold`}>PBW</p>
        </div>
      </div>
    </section>
  )
}
