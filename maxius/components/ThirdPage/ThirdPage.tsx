import { useTranslations } from 'next-intl';

const ThirdPage = () => {
  const t = useTranslations('thirdPage');

  const data = [
    {
      title: t('productTitle'),
      content: [
        t('productContent1'),
        t('productContent2'),
      ],
      secondContent: t('productSecondContent'),
      highlight: [t('productHighlight1'), t('productHighlight2'), t('productHighlight3')],
    },
    {
      title: t('technologyTitle'),
      content: [
        t('technologyContent1'),
        t('technologyContent2'),
        t('technologyContent3'),
        t('technologyContent4'),
        t('technologyContent5'),
      ],
      secondContent: t('technologySecondContent'),
      highlight: [t('technologyHighlight1'), t('technologyHighlight2'), t('technologyHighlight3')],
    },
    {
      title: t('applicationTitle'),
      content: [
        t('applicationContent1'),
        t('applicationContent2'),
        t('applicationContent3'),
      ],
      secondContent: t('applicationSecondContent'),
      highlight: [t('applicationHighlight1'), t('applicationHighlight2'), t('applicationHighlight3')],
    },
    {
      title: t('blockchainTitle'),
      content: [
        t('blockchainContent1'),
        t('blockchainContent2'),
      ],
      secondContent: t('blockchainSecondContent'),
      highlight: [t('blockchainHighlight1'), t('blockchainHighlight2')],
    },
  ];

  const highlightText = (content: string, highlights: string[]) => {
    if (!highlights) return content;
    let highlightedContent = content;
    highlights.forEach((term) => {
      const regex = new RegExp(`(${term})`, 'gi');
      highlightedContent = highlightedContent.replace(
        regex,
        `<span class="text-[#f93] font-light">$1</span>`
      );
    });
    return highlightedContent;
  };

  return (
    <div className="flex justify-center h-screen bg-gradient-to-b from-[#0b1438] to-[#162551] text-white">
      <div className="flex w-full max-w-[70%] mr-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`group flex-1 flex items-center p-5 ${
              index !== data.length - 1 ? 'border-r border-white/45' : ''
            } transition-all hover:bg-[#242c4c] duration-100 ease-in hover:flex-[2] hover:opacity-100 flex-[1]`}
          >
            <div
              className={`h-96 flex flex-col text-left ${
                index % 2 === 0 ? 'slide-from-bottom' : 'slide-from-top'
              }`}
              style={{ animationDelay: `${index * 0.4}s` }} 
            >
              <h3 className="text-[30px] font-bold transition">
                {item.title}
              </h3>
              <div className="mt-10 text-sm leading-7 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in">
                {item.content.map((line, i) => (
                  <p
                    key={i}
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: highlightText(line, item.highlight),
                    }}
                  ></p>
                ))}
              </div>
              {item.secondContent && (
                <p className="text-left mt-5 text-sm leading-7 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in">
                  {item.secondContent}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
