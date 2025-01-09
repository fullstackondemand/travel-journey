import { GrPin } from "react-icons/gr";

export default function ImageCard() {

    return <div className="image-card text-white max-h-[35vh] ease-initial duration-1000 scale-0" data-scroll data-scroll-class="scale-100">
        <div className="bg-[#324A5E] rounded-2xl duration-500 starting:scale-0 starting:opacity-0 hover:scale-95 transition-[scale] relative z-10 h-full w-full">

            <div className="relative flex flex-col flex-grow h-full rounded-2xl">
                <div className="mb-6 px-5 py-6 absolute top-0 h-full">
                    <p className="font-semibold text-sm md:text-[16px]">jelmer joins creatormate</p>

                    <div className="flex text-[#D1D1D1] text-[12px] md:text-sm items-center gap-2 mt-2.5">
                        <GrPin className="text-[14px]" />
                        <p className="text-[12px] md:text-sm">posted by marnix</p>
                    </div>

                </div>
                <img className="w-full object-cover h-full rounded-2xl aspect-square max-w-[700px] max-h-[700px]" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_700/f_auto/q_auto/v1/jelmer_joins_ses6af?_a=BBDAAEAD0" />
            </div>
        </div>
    </div>
}