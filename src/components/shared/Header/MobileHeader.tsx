import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

export default function MobileHeader() {

    /** Variables Declaration */
    const [open, setOpen] = useState(false);

    return <nav className="lg:hidden relative">
        <div className="justify-between items-center w-full px-3 py-4 flex">
            <a href="/" title="logo">
                <img className="w-10" src="/assets/images/logo.svg" />
            </a>

            <div className="text-[20px] cursor-pointer" onClick={() => setOpen(!open)}>
                {open ? <VscChromeClose /> : <SlMenu />}
            </div>
        </div>

        <div className={`absolute z-50 bg-white flex items-center flex-col gap-3 top-12 font-medium left-0 w-full overflow-hidden ease-initial duration-300 ${open ? 'h-auto' : 'h-0'}`}>
            <a href="#" className="bg-white bg-opacity-10 rounded-full px-3 py-1.5">work</a>
            <a href="#" className="bg-white bg-opacity-10 rounded-full px-3 py-1.5">about-us</a>
            <a href="#" className="py-2 px-4 rounded-lg duration-150 flex gap-1 items-center bg-black text-white mb-5">get started <HiOutlineArrowRight /></a>
        </div>
    </nav >
}