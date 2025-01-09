import { GrPin } from "react-icons/gr";

export default function ColorCard() {

    return <div className="colour-card text-white">
        <div className="rounded-2xl duration-500 starting:scale-0 starting:opacity-0 opacity-100 hover:scale-95 transition-[scale] relative z-10 h-full w-full bg-[#324A5E]">

            <div className="px-5 py-4 flex flex-col pb-6 lg:pb-36 h-[30vh] text-[#283b4b]">
                <p className="font-semibold text-sm md:text-[16px] text-white">we bought creatormate.com</p>

                <div className="flex text-[#D1D1D1] text-[12px] md:text-sm items-center gap-2 mt-2.5">
                    <GrPin className="text-[14px]" />
                    <p className="text-[12px] md:text-sm">posted by jens</p>
                </div>
            </div>

        </div>
    </div>
}