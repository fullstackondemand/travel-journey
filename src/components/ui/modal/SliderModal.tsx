import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscChromeClose } from "react-icons/vsc";
import useModal from "../../../context/ModalContext";
import OuterModal from "../OuterModal";

export default function SliderModal({ images, author }: {
    images?: Array<string>,
    author?: { name: string, image: string }
}) {

    /** Variable Declarations */
    const { open, toggleOpen } = useModal();

    return <OuterModal>
        <div className={`z-50 modal fixed top-[50%] left-[50%] translate-[-50%] max-sm:min-w-[330px] max-w-[90vw] inline-block ${open ? 'scale-x-100' : 'scale-x-0'}`}>
            <div className="text-white bg-[#ffff] rounded-xl p-1">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 7000,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination.image-slider",
                    }}
                    modules={[Pagination, Autoplay]}
                    className="image-slider h-full w-full md:w-[300px] xl:w-[400px]"
                >
                    {images?.map((image, idx) =>
                        <SwiperSlide key={idx}>
                            <img className="object-cover rounded-xl aspect-[0.833333_/_1] w-full h-full max-w-[400px] max-h-[400px]" src={image} />
                        </SwiperSlide>
                    )}

                    <div className="swiper-pagination image-slider"></div>
                </Swiper>

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