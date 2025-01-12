'use client'
import { useTranslations } from 'next-intl';


export default function FirstPage() {
  const t = useTranslations('firstPage');

  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden z-10">
      <main className="relative z-10  container mx-auto px-6 mt-20">
        <div className="items-center">
          <div className="space-y-8 w-full ml-[2%] mt-56">
            <h1 className="text-[#1B2A5E] firstPageTop text-6xl lg:text-[95.5px] font-bold">
              {t('title')}
            </h1>

            <div className="max-w-xl">
              <p className="text-black ml-1 slide-from-left2 leading-7 text-[20.5px] w-[415px] font-extralight text-lg max-w-xl">
                {t('description')}
              </p>

              <p className="text-black ml-1 slide-from-left3 text-[20.5px] opacity-95 font-extralight text-xl mt-[100px]">
                {t('subDescription')}
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
