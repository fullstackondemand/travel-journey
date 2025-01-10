import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscChromeClose } from "react-icons/vsc";
import useModal from "../../../context/ModalContext";
import OuterModal from "../OuterModal";

export default function ImageModal() {

    /** Variable Declarations */
    const { open, toggleOpen } = useModal();

    return <OuterModal>
        <div className={`z-50 modal fixed top-[50%] left-[50%] translate-[-50%] max-sm:min-w-[350px] max-w-[90vw] inline-block ${open ? 'scale-x-100' : 'scale-x-0'}`}>
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
                    <SwiperSlide>
                        <img className="object-cover rounded-xl aspect-[0.833333_/_1] w-full h-full max-w-[400px] max-h-[400px]" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_400/f_auto/q_auto/v1/talked_to_creators_1_ewistu?_a=BBDAAEAD0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="object-cover rounded-xl aspect-[0.833333_/_1] w-full h-full max-w-[400px] max-h-[400px]" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_500/f_auto/q_auto/v1/back_in_arms_2_hvzgdm?_a=BBDAAEAD0" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="object-cover rounded-xl aspect-[0.833333_/_1] w-full h-full max-w-[400px] max-h-[400px]" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_500/f_auto/q_auto/v1/back_in_arms_3_l03yeg?_a=BBDAAEAD0" />
                    </SwiperSlide>

                    <div className="swiper-pagination image-slider"></div>
                </Swiper>

                <div className="flex items-center justify-between p-1 py-4 text-black">
                    <div className="flex items-center gap-3">
                        <img className="w-6 rounded-full" src="https://creatormate.com/_ipx/_/https://accounts.creatormate.com/storage/v1/object/public/calendar_images/jens_profile.png" />
                        by jens
                    </div>
                    <VscChromeClose className="mr-2 mt-1 hover:cursor-pointer hover:text-gray-400 text-[16px]" onClick={toggleOpen} />
                </div>

            </div>
        </div>
    </OuterModal>
}