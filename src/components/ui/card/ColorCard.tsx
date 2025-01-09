export default function ColorCard({ children, className }: { children: React.ReactNode, className: string }) {

    return <div className={`rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative h-full w-full bg-[#324A5E] ${className}`}>
        <div className="px-5 py-4 flex flex-col pb-6 lg:pb-36 h-[30vh] text-[#283b4b]">
            {children}
        </div>
    </div>
}