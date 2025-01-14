import useModal from "../../../context/ModalContext";
import { SiInstagram } from "react-icons/si";
import OuterModal from "../OuterModal";

export default function InstagramModal({ images, link }: {
    images?: Array<string>,
    link?: string
}) {

    /** Variable Declarations */
    const { open } = useModal();

    return <OuterModal>
        <div className={`w-[95%] lg:w-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white ${open ? 'scale-x-100' : 'scale-x-0'}`}>
            <div className="flex w-full">
                {images && <>
                    <img className="aspect-square rotate-6 z-10 object-cover min-w-[33%] lg:min-w-[35vh] min-h-[33%] lg:min-h-[35vh] max-w-[33%] lg:max-w-[35vh] max-h-[33%] lg:max-h-[35vh] rounded-2xl" src={images[0]} />
                    <img className="aspect-square -rotate-6 z-10 object-cover min-w-[33%] lg:min-w-[35vh] min-h-[33%] lg:min-h-[35vh] max-w-[33%] lg:max-w-[35vh] max-h-[33%] lg:max-h-[35vh] rounded-2xl" src={images[1]} />
                    <img className="aspect-square rotate-12 z-50 object-cover min-w-[33%] lg:min-w-[35vh] min-h-[33%] lg:min-h-[35vh] max-w-[33%] lg:max-w-[35vh] max-h-[33%] lg:max-h-[35vh] rounded-2xl" src={images[2]} />
                </>}
            </div>

            <div className="justify-center flex w-full mt-9">
                <div className="bg-[#F5F5F5] rounded-xl px-10 py-6 text-center flex flex-col items-center text-black">
                    <h3 className="font-semibold text-xl mb-2">meet marnix</h3>
                    <p className="text-sm sm:text-base w-[95%] sm:w-[35vh]">the guy who thought starting a tech company with zero coding skills was a solid plan. marketeer, creator, and part-time chaos manager. powered by coffee and big dreams.</p>
                    <a href={link ?? undefined} target="_blank" className="flex items-center mt-4 text-white py-2 px-4 rounded-xl gap-2 bg-black">
                        <SiInstagram /> follow
                    </a>
                </div>
            </div>
        </div>
    </OuterModal>
}