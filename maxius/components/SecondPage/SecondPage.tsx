'use client'

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const Highlight = ({ text }: { text: string }) => (
  <span className="text-[#f93]">{text}</span>
);

const SecondPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('secondPage');
  const content = t.raw('content'); // Trả về mảng

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="products"
      className="section w-full h-full flex justify-center items-center bg-[#1B1F3B] text-white overflow-hidden"
    >
      <div
        className={`container w-fit max-w-[1300px] 2xl:text-[48px] lg:text-[30px] md:text-[20px] font-bold transition-transform duration-700 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {content.map((item: any, index: number) => (
          <p key={index} className="leading-10 transition-all">
            {item.text && <span>{item.text}</span>}
            {item.highlight && <Highlight text={item.highlight} />}
            {item.textMiddle && <span>{item.textMiddle}</span>}
            {item.highlight2 && <Highlight text={item.highlight2} />}
            {item.textMiddle2 && <span>{item.textMiddle2}</span>}
            {item.highlight3 && <Highlight text={item.highlight3} />}
            {item.textAfter && <span>{item.textAfter}</span>}
          </p>
        ))}
      </div>
    </section>
  );
};

export default SecondPage;
