import Header from "../components/shared/Header";
import ColorCard from "../components/ui/card/ColorCard";
import ImageCard from "../components/ui/card/ImageCard";
import SliderCard from "../components/ui/card/SliderCard";
import BigImageCard from "../components/ui/card/BigImageCard";
import OuterCard from "../components/ui/OuterCard";
import ImageModal from "../components/ui/modal/ImageModal";
import SliderModal from "../components/ui/modal/SliderModal";
import { ModalContextProvider } from "../context/ModalContext";
import DateColumn from "../components/ui/DateColumn";

const Data = [
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-start',
        cards: [
            {
                Card: ColorCard,
                Modal: SliderModal
            }
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-between',
        cards: [
            {
                Card: ImageCard,
                Modal: ImageModal
            },
            {
                Card: ColorCard,
                Modal: SliderModal
            }
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-start',
        cards: [
            {
                Card: ImageCard,
                Modal: SliderModal
            },
            {
                Card: BigImageCard,
                Modal: ImageModal
            },
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-between',
        cards: [
            {
                Card: SliderCard,
                Modal: SliderModal
            }
        ]
    }
]

export default function Home() {

    return <main className="home-page h-screen w-screen text-white flex flex-col lowercase">
        <section className="bg-white text-black w-full h-full flex flex-col overflow-y-hidden">
            <Header />

            <div className="custom-scroll flex h-full overflow-x-scroll overflow-y-hidden">
                <div className="h-full w-full flex flex-nowrap">

                    {[...Data, ...Data].map(({ date, year, space, cards }, dateIdx) =>
                        <DateColumn year={year} date={date} space={space} key={dateIdx}>

                            {cards.map(({ Card, Modal }, cardIdx) =>
                                <ModalContextProvider key={cardIdx}>
                                    <OuterCard Card={Card} />
                                    <Modal />
                                </ModalContextProvider>
                            )}

                        </DateColumn>
                    )}
                </div>
            </div>

        </section>
    </main >
}