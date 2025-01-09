export default function SliderCard({ children, className }: { children: React.ReactNode, className: string }) {

    return <div className={`bg-[#503F5B] rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative z-10 h-full w-full group ${className}`}>
        <div className="max-h-full flex flex-col h-[50vh]">
            <div className="px-5 py-4 flex flex-col">
                {children}
            </div>

            <div className="relative flex-grow px-5 w-full h-[170px] lg:h-[90%] 5xl:w-[95%] flex">
                <div className="relative w-full h-[90%] flex items-center justify-center">
                    <img className="absolute rotate-2 group-hover:rotate-4 w-full top-0 z-10 object-cover h-[150px] lg:h-full max-h-full max-w-full duration-150 transition-transform ease-in-out rounded-xl" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_500/f_auto/q_auto/v1/back_in_arms_2_hvzgdm?_a=BBDAAEAD0" />
                    <img className="absolute -rotate-2 group-hover:-rotate-4 w-full top-0 z-10 object-cover h-[150px] lg:h-full max-h-full max-w-full duration-150 transition-transform ease-in-out rounded-xl" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_500/f_auto/q_auto/v1/back_in_arms_3_l03yeg?_a=BBDAAEAD0" />
                    <img className="group-hover:-rotate-2 absolute w-full z-50 top-0 object-cover h-[150px] lg:h-full max-h-full max-w-full duration-150 transition-transform ease-in-out rounded-xl" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_500/f_auto/q_auto/v1/back_in_arms_fkxh7m?_a=BBDAAEAD0" />
                </div>
            </div>
        </div>
    </div>
}