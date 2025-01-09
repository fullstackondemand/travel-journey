export default function BigImageCard({ children, className }: { children: React.ReactNode, className: string }) {

    return <div className={`bg-[#2f2f2f] rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative z-10 h-full w-full ${className}`}>
        <div className="py-5 px-2.5 h-full w-full">
            <div className="px-2 mb-4">
                {children}
            </div>

            <img className="w-full object-cover aspect-square max-w-[700px] max-h-[700px]" src="https://res.cloudinary.com/dusb7aq4h/image/upload/c_limit,w_700/f_auto/q_auto/v1/shooting_yt_video_yjf8sk?_a=BBDAAEAD0" />
        </div>
    </div>
}