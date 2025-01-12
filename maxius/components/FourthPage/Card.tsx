'use client'
import React from "react";

interface ContentItem {
  title: string;
  description: string[];
}

interface CardProps {
  data: {
    Title: string;
    content: ContentItem[];
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <section className="h-full">
      <h2 className="text-[39.5px] font-bold mb-8 text-black px-[30px]">{data.Title}</h2>
      <div className="space-y-6 overflow-auto h-[330px] py-[40px] px-[30px] border-r border-black scrollbar-hover">
        {data.content.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2 text-gray-900 text-[13px]">{item.title}</h3>
            {item.description.map((desc, descIndex) => (
              <p key={descIndex} className="text-[13px] font-light text-gray-600 ">
                {desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;