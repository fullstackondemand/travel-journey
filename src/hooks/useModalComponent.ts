import ImageModal from "../components/ui/modal/ImageModal";
import InstagramModal from "../components/ui/modal/InstagramModal";
import SliderModal from "../components/ui/modal/SliderModal";

export default function useModalComponent(modal: string | undefined) {

    switch (modal) {
        case 'slider':
            return SliderModal;
        case 'instagram':
            return InstagramModal;
        default:
            return ImageModal;
    }
}