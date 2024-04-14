import React from 'react'

export default function ServiceBlock() {
  return (
    <section className={`flex flex-col`}>
      <h2
        id={`services`}
        className={`h-0 text-purefunc-1`}>
        SERVICES
      </h2>
      <div className={`mx-auto flex flex-row justify-center gap-8 text-[#FFFFFF]`}>
        <div className={`flex w-[512px] flex-col`}>
          <p className={`text-2xl font-medium`}>CONSULTING SERVICE</p>
          <p>超過十載產業耕耘的菁英團隊，擁有多元技術實力與豐沛實作經驗，涵蓋前端、後端、行動端、系統架構、DevOps
            與自動化測試等領域。我們提供全方位的顧問諮詢服務，為客戶打造最佳化的科技解決方案。 </p>
        </div>
        <div className={`flex w-[512px] flex-col`}>
          <p className={`text-2xl font-medium`}>CUSTOM APP DEVELOPMENT</p>
          <p>專精跨平台混合應用程式開發，著重 React Native 和 Flutter 等技術。高度重視客戶需求，全面考量最優方案，如視情況以 Progressive Web App
            取代行動應用程式。</p>
        </div>
        <div className={`flex w-[512px] flex-col`}>
          <p className={`text-2xl font-medium`}>CUSTOM SYSTEM DEVELOPMENT</p>
          <p>提供客製化的系統開發服務，我們的專業團隊涵蓋各種領域，能全面協助客戶從規劃、分析、設計、實作到維運。不僅能節省客戶的時間，更降低整體成本。</p>
        </div>
      </div>
    </section>
  )
}
