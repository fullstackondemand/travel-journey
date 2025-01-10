import { VscChromeClose } from "react-icons/vsc";
import useModal from "../../../context/ModalContext";

export default function ImageModal() {

    /** Variable Declarations */
    const { open, toggleOpen } = useModal();

    return <div className="flex items-center justify-center">
        {open && <div className="z-10 fixed top-0 left-0 h-screen w-screen bg-black/40" onClick={toggleOpen}></div>}
        <div className={`z-50 modal fixed top-[50%] left-[50%] translate-[-50%] max-sm:min-w-[350px] max-w-[90vw] inline-block ${open ? 'scale-x-100' : 'scale-x-0'}`}>

            <div className="text-white bg-[#ffff] rounded-xl p-1">

                  kkk
                

                <div className="flex items-center justify-between p-1 py-4 text-black">
                    <div className="flex items-center gap-3">
                        <img className="w-6 rounded-full" src="https://creatormate.com/_ipx/_/https://accounts.creatormate.com/storage/v1/object/public/calendar_images/jens_profile.png" />
                        by jens
                    </div>
                    <VscChromeClose className="mr-2 mt-1 hover:cursor-pointer hover:text-gray-400 text-[16px]" onClick={toggleOpen} />
                </div>

            </div>
        </div>
    </div>
}