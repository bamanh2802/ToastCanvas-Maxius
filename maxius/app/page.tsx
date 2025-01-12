'use client'
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import FirstPage from "@/components/FirstPage/FirstPage";
import SecondPage from "@/components/SecondPage/SecondPage";
import ThirdPage from "@/components/ThirdPage/ThirdPage";
import FourthPage from "@/components/FourthPage/FourthPage";
import FivePage from "@/components/FivePage/FivePage";

const PageSection = ({ id, Component }) => {
  const [key, setKey] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setKey(prev => prev + 1);
      window.history.pushState(null, '', `#${id}`);
    }
  }, [inView, id]);

  return (
    <div 
      id={id}
      ref={ref} 
      className="h-screen snap-start"
    >
      {inView && (
        <Component key={key} />
      )}
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <PageSection id="firstPage" Component={FirstPage} />
      <PageSection id="secondPage" Component={SecondPage} />
      <PageSection id="thirdPage" Component={ThirdPage} />
      <PageSection id="fourthPage" Component={FourthPage} />
      <PageSection id="fivePage" Component={FivePage} />
    </main>
  );
}