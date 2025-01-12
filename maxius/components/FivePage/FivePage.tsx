'use client'
const FivePage = () => {
    return (
        <section className="w-full h-screen bg-[#1B2A5E] relative overflow-hidden">
            <div className="absolute left-[180px] bottom-[15%] w-[70%]">
                <div className=" mb-[50px]">
                    <h2 className="text-4xl text-[34px] mb-[12px] ml-[5px] text-white font-bold slide-from-bottom2 stagger-delay-1">Company.</h2>
                    <div className="h-[35px] stagger-delay-1 slide-from-left4  px-[5px] w-[216px] transition-all group cursor-pointer leading-[35px] hover:bg-[#fff]">
                        <a href="mailto:support@maxius.io" className="font-light group-hover:text-slate-800  text-[14px] text-white/70">
                            support@maxius.io
                        </a>
                    </div>
                </div>
 
                <div className=" mb-[50px]">
                    <h2 className="text-4xl text-[34px] mb-[12px] ml-[5px]  text-white font-bold slide-from-bottom2 stagger-delay-2">Warranty.</h2>
                    <div className="h-[35px] stagger-delay-2 slide-from-left4  px-[5px] w-[216px] transition-all group cursor-pointer leading-[35px] hover:bg-[#fff]">
                        <a href="mailto:support@maxius.io" className="font-light group-hover:text-slate-800  text-[14px] text-white/70">
                            Learn more &gt;
                        </a>
                    </div>
                </div>
 
                <div className="">
                    <h2 className="text-4xl text-[34px] mb-[12px] ml-[5px] text-white font-bold slide-from-bottom2 stagger-delay-3">Technical support.</h2>
                    <div className="h-[35px] stagger-delay-3 slide-from-left4  px-[5px] w-[216px] transition-all group cursor-pointer leading-[35px] hover:bg-[#fff]">
                        <a href="mailto:support@maxius.io" className="font-light group-hover:text-slate-800  text-[14px] text-white/70">
                            support@maxius.io
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
 }
 
 export default FivePage