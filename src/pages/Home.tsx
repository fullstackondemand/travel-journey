import Header from "../components/shared/Header";

export default function Home() {

    return <main className="home-page screen-size text-white flex flex-col lowercase">
        <section className="bg-white text-black w-full h-full flex flex-col overflow-y-hidden relative">
            <Header />
        </section>
    </main>
}