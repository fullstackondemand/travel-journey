import BigImageCard from "../components/ui/card/BigImageCard";
import ColorCard from "../components/ui/card/ColorCard";
import ImageCard from "../components/ui/card/ImageCard";
import SliderCard from "../components/ui/card/SliderCard";

export default function useCardComponent(card: string) {

    switch (card) {
        case 'bigImage':
            return BigImageCard;
        case 'image':
            return ImageCard;
        case 'slider':
            return SliderCard;
        case 'color':
            return ColorCard;
        default:
            return ColorCard;
    }
}