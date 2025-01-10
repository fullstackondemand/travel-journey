import useModal from "../../context/ModalContext";

export default function OuterModal({ children }: {
    children: React.ReactNode
}) {

    /** Variable Declarations */
    const { open, toggleOpen } = useModal();

    return <div className="flex items-center justify-center">
        {open && <div className="z-10 fixed top-0 left-0 h-screen w-screen bg-black/40" onClick={toggleOpen}></div>}
        {children}
    </div>
}