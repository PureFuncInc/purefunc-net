import React from 'react'
import ImagePheme from '../assets/product-pheme.webp'
import ImageHanHuang from '../assets/product-hanhuang.webp'
import ImageFooTinder from '../assets/product-footinder.webp'
import ImageBlackLogo from '../assets/purefunc_black.webp'

export default function ProductBlock() {
  return (
    <section className={`mx-48 flex flex-col items-center`}>
      <h1
        id={`product`}
        className={`h-0 text-purefunc-1`}>
        PRODUCTS
      </h1>
      <div className={`flex flex-wrap justify-center gap-8`}>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImagePheme}
              className={`w-48 rounded-xl`}
              alt={`logo of Pheme`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>Pheme</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageHanHuang}
              className={`w-48 rounded-xl`}
              alt={`logo of HanHuang`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>HanHuang</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageFooTinder}
              className={`w-48 rounded-xl`}
              alt={`logo of FooTinder`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>FooTinder</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
        <div className={`flex flex-row gap-8`}>
          <div className={`flex flex-col items-center gap-2`}>
            <img
              src={ImageBlackLogo}
              className={`w-48 rounded-xl`}
              alt={`logo of PureFunc Blockchain Wallet`} />
            <p className={`text-xl font-extrabold text-[#FFFFFF]`}>PBW</p>
          </div>
          <div className={`h-[200px] w-[512px] border-2 border-[#FFFFFF]`}>
          </div>
        </div>
      </div>
    </section>
  )
}
