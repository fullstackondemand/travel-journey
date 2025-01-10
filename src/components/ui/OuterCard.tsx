import { ElementType } from "react";
import PostContent from "./PostContent";
import useModal from "../../context/ModalContext";

export default function OuterCard({ Card, Modal }: {
    Card: ElementType,
    Modal: ElementType
}) {

    /** Variable Declarations */
    const { toggleOpen } = useModal();

    return <div className="card">
        <div className="text-white ease-initial duration-1000 scale-0 h-full" data-scroll data-scroll-class="scale-100" onClick={toggleOpen}>
            <Card>
                <PostContent />
            </Card>
        </div>
        <Modal />
    </div>
}