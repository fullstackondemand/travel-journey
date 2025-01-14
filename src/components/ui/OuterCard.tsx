import PostContent from "./PostContent";
import useModal from "../../context/ModalContext";
import useCardComponent from "../../hooks/useCardComponent";
import useModalComponent from "../../hooks/useModalComponent";

export default function OuterCard({ card, modal, link, author, title }: {
    card: {
        type: string,
        color?: string,
        image?: string,
        images?: Array<string>
    },
    modal?: {
        type: string,
        image?: string,
        images?: Array<string>,
        link?: string
    },
    author: {
        name: string,
        image: string
    }
    link?: string,
    title: string,
}) {

    /** Variable Declarations */
    const { toggleOpen } = useModal();
    const Card = useCardComponent(card.type);
    const Modal = useModalComponent(modal?.type);

    // Click Handler Function
    const clickHandler = () => {
        if (link) return window.open(link, "_blank");
        if (modal) return toggleOpen();
        return true;
    }

    return <div className="card">
        <div className="outer-card text-white ease-initial duration-1000 scale-0 h-full" data-scroll data-scroll-class="scale-100" onClick={clickHandler}>
            <Card {...card}>
                <PostContent postBy={author.name} title={title} />
            </Card>
        </div>
        {modal && <Modal {...modal} author={author} />}
    </div>
}