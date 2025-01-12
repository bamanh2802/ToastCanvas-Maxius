import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">

        <div className="h-48 w-full flex items-center justify-center">
            <h1 className="text-black text-[40px] font-bold">Contact us</h1>
        </div>
     
      <main className="flex flex-1">
        <div className="flex-1">
          <iframe
            title="Embedded website content" 
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.857822554473!2d126.99350081523216!3d37.56383897979998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2b3d12b9f39%3A0x2c0af1765a0d7cde!2sSeoul!5e0!3m2!1sen!2skr!4v1695755047849!5m2!1sen!2skr"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex-1 bg-gray-800 flex flex-col justify-between">
          <div className="p-[12.8%]">
            <div className="text-[14px] font-light">
              <p>5F 12-30, Simin-daero 327beon-gil, Dongan-gu,</p>
              <p>Anyang-si, Gyeonggi-do, Republic of Korea</p>
              <p>Tel: 02.851.2662</p>
              <p>Fax: 02.851.2655</p>
            </div>
          </div>

          <div className=" font-light text-right p-[12.8%]">
            <p className="text-[12px]">
              Company 
            </p>
            <a href="support@maxius.io" className="text-white text-[14px]">support@maxius.io</a>
            <p className="text-[12px]">
              Technical support
            </p>
            <a href="support@maxius.io" className="text-white text-[14px]">support@maxius.io</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;