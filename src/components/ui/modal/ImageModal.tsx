import { VscChromeClose } from "react-icons/vsc";

export default function ImageModal() {

    return <div className="bg-[#ffff] absolute z-50 p-1 rounded-xl top-0 -right-[320px] xl:-right-[420px]">
        <div className="relative rounded-xl z-50">
            <div className="absolute h-full top-0 left-0 w-1/4 cursor-pointer z-50"></div>
            <div className="absolute h-full right-0 top-0 w-1/4 cursor-pointer z-50"></div>
            <div className="h-full w-full md:w-[300px] xl:w-[400px] md:h-[350px] xl:h-[480px]">
                <img className="object-cover rounded-xl max-w-[400px] max-h-[480px] aspect-[0.833333_/_1] w-full" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_400/f_auto/q_auto/v1/we_bought_creatormate_plmmsb?_a=BBDAAEAD0" />
            </div>
        </div>

        <div className="flex items-center justify-between p-1 py-4 text-black">
            <div className="flex items-center gap-3">
                <img className="w-6 rounded-full" src="https://creatormate.com/_ipx/_/https://accounts.creatormate.com/storage/v1/object/public/calendar_images/jens_profile.png" />
                by jens
            </div>
            <VscChromeClose className="mr-2 mt-1 hover:cursor-pointer hover:text-gray-400 text-[16px]" />
        </div>

    </div>
}