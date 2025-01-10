export default function ImageCard({ children }: { children: React.ReactNode }) {

    return <div className="bg-[#324A5E] rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative z-10 h-full max-h-[35vh] w-full">
        <div className="relative flex flex-col flex-grow h-full rounded-2xl">
            <div className="mb-6 px-5 py-6 absolute top-0 h-full">
                {children}
            </div>
            <img className="w-full object-cover h-full rounded-2xl aspect-square max-w-[700px] max-h-[700px]" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_700/f_auto/q_auto/v1/jelmer_joins_ses6af?_a=BBDAAEAD0" />
        </div>
    </div>
}