import { HiOutlineArrowRight } from "react-icons/hi";

export default function DesktopHeader() {

    return <nav className="justify-between items-center w-full px-32 pt-4 hidden lg:flex relative">
        <a href="/" title="logo">
            <img className="w-10" src="/assets/images/logo.svg" alt="logo" />
        </a>

        <ul className="inline-flex gap-9 text-sm list-none">
            <li>
                <a href="#" className="hover:text-[#303030] duration-150">work</a>
            </li>
            <li>
                <a href="#" className="hover:text-[#303030] duration-150">about us</a>
            </li>
        </ul>
        <a href="#" className="px-4 py-2 rounded-lg duration-150 flex gap-1 items-center bg-black text-white hover:bg-[#303030]">get started <HiOutlineArrowRight /></a>
    </nav>
}