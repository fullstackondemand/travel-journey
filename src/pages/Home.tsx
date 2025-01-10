import Header from "../components/shared/Header";
import OuterCard from "../components/ui/OuterCard";
import { ModalContextProvider } from "../context/ModalContext";
import DateColumn from "../components/ui/DateColumn";
import data from "../../public/data/post.json";

export default function Home() {

    // /** Variables Declarations */
    // const [data, setData] = useState<DataProps[]>([]);

    // // Fetch Post Data
    // useEffect(() => {
    //     fetch('/data/post.json').then(async (response) => {
    //         const post = await response.json();
    //         setData(post);
    //     });
    // }, []);

    return <main className="home-page h-dvh w-screen text-white flex flex-col lowercase">
        <section className="bg-white text-black w-full h-full flex flex-col overflow-y-hidden">
            <Header />

            <div className="custom-scroll flex h-full overflow-x-scroll overflow-y-hidden">
                <div className="h-full w-full flex flex-nowrap">

                    {data.map(({ date, year, space, cards }, dateIdx) =>
                        <DateColumn year={year} date={date} space={space} key={dateIdx}>

                            {cards.map((card, cardIdx) =>
                                <ModalContextProvider key={cardIdx}>
                                    <OuterCard {...card} />
                                </ModalContextProvider>
                            )}

                        </DateColumn>
                    )}
                </div>
            </div>

        </section>
    </main >
}