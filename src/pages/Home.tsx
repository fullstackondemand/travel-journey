import { useState } from "react";
import Header from "../components/shared/Header";
import ColorCard from "../components/ui/card/ColorCard";
import ImageCard from "../components/ui/card/ImageCard";
import SliderCard from "../components/ui/card/SliderCard";
import BigImageCard from "../components/ui/card/BigImageCard";
import PostContent from "../components/ui/PostContent";
import { VscChromeClose } from "react-icons/vsc";

const Data = [
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-start',
        cards: [
            { Card: ColorCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-between',
        cards: [
            { Card: ImageCard },
            { Card: ColorCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-start',
        cards: [
            { Card: ImageCard },
            { Card: BigImageCard },
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-between',
        cards: [
            { Card: ColorCard },
            { Card: ImageCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 29',
        space: 'justify-end',
        cards: [
            { Card: SliderCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 26',
        space: 'justify-center',
        cards: [
            { Card: ColorCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 21',
        space: 'justify-start',
        cards: [
            { Card: BigImageCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 26',
        space: 'justify-start',
        cards: [
            { Card: ImageCard },
            { Card: ColorCard }
        ]
    },
    {
        year: 2024,
        date: 'feb 26',
        space: 'justify-end',
        cards: [
            { Card: ImageCard }
        ]
    }
]

export default function Home() {

    /** Variable Declarations */
    const [open, setOpen] = useState('-1');

    // Model Open Function
    const modalOpen = (idx: string) => {
        if (idx == open) return setOpen("-1");
        setOpen(idx);
    }

    // Model Close Function
    const modalClose = () => setOpen("-1");

    return <main className="home-page h-screen w-screen text-white flex flex-col lowercase">
        <section className="bg-white text-black w-full h-full flex flex-col overflow-y-hidden relative">
            <Header />

            <div className="custom-scroll flex h-full overflow-x-scroll overflow-y-hidden">
                <div className="h-full w-full flex flex-nowrap">

                    {[...Data, ...Data].map(({ date, year, space, cards }, dateIdx) =>
                        <div className="w-[60vw] sm:w-1/2 lg:w-1/4 xl:w-1/5 flex-none flex flex-col h-full text-black" key={dateIdx}>

                            <div className="flex flex-col items-center py-3 h-full relative">

                                <p className="text-sm font-bold">{date}</p>
                                <p className="text-xs text-[#474747]">{year}</p>

                                <div className={`flex flex-grow h-full flex-col p-1.5 border-t border-r border-[#F5F5F5] gap-3 ${space} w-full mt-3`}>

                                    {cards.map(({ Card }, cardIdx) =>
                                        <div className="card lg:relative" key={cardIdx}>
                                            <div className="slider-card text-white ease-initial duration-1000 scale-0 h-full" data-scroll data-scroll-class="scale-100" onClick={() => modalOpen(`${dateIdx}${cardIdx}`)}>
                                                <Card key={cardIdx} className={Card != BigImageCard ? 'max-h-[35vh]' : ''}>
                                                    <PostContent />
                                                </Card>
                                            </div>

                                            {/* Modal Start */}
                                            <div className={`modal max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg;-translate-y-1/2 max-lg:w-[90%] max-xs:w-9/12 text-white bg-[#ffff] absolute z-50 p-1 rounded-xl top-0 -right-[320px] -right-[420px] ${open == `${dateIdx}${cardIdx}` ? 'scale-x-100' : 'scale-x-0'}`}>
                                                <div className="relative rounded-xl z-50">
                                                    <div className="h-full w-full md:w-[300px] xl:w-[400px] md:h-[350px] xl:h-[480px]">
                                                        <img className="object-cover rounded-xl max-w-[400px] max-h-[480px] aspect-[0.833333_/_1] w-full" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_400/f_auto/q_auto/v1/we_bought_creatormate_plmmsb?_a=BBDAAEAD0" />
                                                    </div>
                                                </div>

                                                <div className={`flex items-center justify-between p-1 py-4 text-black ease-initial duration-1000 ${open ? 'scale-100' : 'scale-0'}`}>
                                                    <div className="flex items-center gap-3">
                                                        <img className="w-6 rounded-full" src="https://creatormate.com/_ipx/_/https://accounts.creatormate.com/storage/v1/object/public/calendar_images/jens_profile.png" />
                                                        by jens
                                                    </div>
                                                    <VscChromeClose className="mr-2 mt-1 hover:cursor-pointer hover:text-gray-400 text-[16px]" onClick={modalClose} />
                                                </div>

                                            </div>
                                            {/* Modal End */}

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>

        </section>
    </main >
}