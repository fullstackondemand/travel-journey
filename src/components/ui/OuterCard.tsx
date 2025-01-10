import PostContent from "./PostContent";
import useModal from "../../context/ModalContext";
import useCardComponent from "../../hooks/useCardComponent";
import useModalComponent from "../../hooks/useModalComponent";

export default function OuterCard({ card, modal, link }: {
    card: string,
    modal?: string
    link?: string
}) {

    /** Variable Declarations */
    const { toggleOpen } = useModal();
    const Card = useCardComponent(card);
    const Modal = useModalComponent(modal);

    // Click Handler Function
    const clickHandler = () => {
        if (link) return window.open(link, "_blank");
        if (modal) return toggleOpen();
        return true;
    }

    return <div className="card">
        <div className="outer-card text-white ease-initial duration-1000 scale-0 h-full" data-scroll data-scroll-class="scale-100" onClick={clickHandler}>
            <Card>
                <PostContent />
            </Card>
        </div>
        {modal && <Modal />}
    </div>
}