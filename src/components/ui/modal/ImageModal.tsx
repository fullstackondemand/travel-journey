import { VscChromeClose } from "react-icons/vsc";
import useModal from "../../../context/ModalContext";
import OuterModal from "../OuterModal";

export default function ImageModal({ image, author }: {
    image?: string,
    author?: { name: string, image: string }
}) {

    /** Variable Declarations */
    const { open, toggleOpen } = useModal();

    return <OuterModal>
        <div className={`z-50 image-modal fixed top-[50%] left-[50%] translate-[-50%] max-sm:min-w-[330px] max-w-[90vw] inline-block ${open ? 'scale-x-100' : 'scale-x-0'}`}>
            <div className="text-white bg-[#ffff] rounded-xl p-1">
                <div className="h-full w-full md:w-[300px] xl:w-[400px] md:h-[350px] xl:h-[480px]">
                    <img className="object-cover rounded-xl max-w-[400px] max-h-[480px] aspect-[0.833333_/_1] w-full" src={image} />
                </div>

                <div className="flex items-center justify-between p-1 py-4 text-black">
                    <div className="flex items-center gap-3">
                        <img className="w-6 rounded-full" src={author?.image} />
                        by {author?.name}
                    </div>
                    <VscChromeClose className="mr-2 mt-1 hover:cursor-pointer hover:text-gray-400 text-[16px]" onClick={toggleOpen} />
                </div>
            </div>
        </div>
    </OuterModal>
}