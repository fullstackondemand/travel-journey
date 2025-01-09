import { GrPin } from "react-icons/gr";

export default function BigImageCard() {

    return <div className="big-image-card text-white ease-initial duration-1000 scale-0" data-scroll data-scroll-class="scale-100">
        <div className="bg-[#2f2f2f] rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative z-10 h-full w-full">

            <div className="py-5 px-2.5 h-full w-full">
                <div className="px-2 mb-4">
                    <p className="font-semibold text-sm md:text-[16px]">shooting our upcoming yt series</p>
                    <div className="flex text-[#D1D1D1] text-[12px] md:text-sm items-center gap-2 mt-2.5">
                        <GrPin className="text-[14px]" />
                        <p className="text-[12px] md:text-sm">posted by jens</p>
                    </div>
                </div>

                <img className="w-full object-cover aspect-square max-w-[700px] max-h-[700px]" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_700/f_auto/q_auto/v1/shooting_yt_video_yjf8sk?_a=BBDAAEAD0" />
            </div>

        </div>
    </div>
}