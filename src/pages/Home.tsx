import Header from "../components/shared/Header";
import ColorCard from "../components/ui/ColorCard";
import DateTable from "../components/shared/DateTable";
import ImageCard from "../components/ui/ImageCard";
import SliderCard from "../components/ui/SliderCard";
import BigImageCard from "../components/ui/BigImageCard";

const Data = [
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-start',
        cards: [
            { Type: ColorCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-between',
        cards: [
            { Type: ImageCard },
            { Type: ColorCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-start',
        cards: [
            { Type: ImageCard },
            { Type: BigImageCard },
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-between',
        cards: [
            { Type: ColorCard },
            { Type: ImageCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 29',
        space: 'justify-end',
        cards: [
            { Type: SliderCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 26',
        space: 'justify-center',
        cards: [
            { Type: ColorCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-start',
        cards: [
            { Type: BigImageCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 26',
        space: 'justify-start',
        cards: [
            { Type: ImageCard },
            { Type: ColorCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 26',
        space: 'justify-end',
        cards: [
            { Type: ImageCard }
        ]
    }
]

export default function Home() {

    return <main className="home-page h-screen w-screen text-white flex flex-col lowercase">
        <section className="bg-white text-black w-full h-full flex flex-col overflow-y-hidden relative">
            <Header />

            <div className="custom-scroll flex h-full overflow-x-scroll overflow-y-hidden">
                <div className="h-full w-full flex flex-nowrap">
                    {[...Data, ...Data].map(({ date, year, space, cards }, idx) => <DateTable date={date} year={year} space={space} key={idx}>
                        {cards.map(({ Type }, idx) => <Type key={idx} />
                        )}
                    </DateTable>
                    )}
                </div>
            </div>

        </section>
    </main >
}