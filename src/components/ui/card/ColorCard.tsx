export default function ColorCard({ children, color }: {
    children: React.ReactNode,
    color?: string
}) {

    return <div style={{ background: color}} className="rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative h-full w-full max-h-[35vh]">
        <div className="px-5 py-4 flex flex-col pb-6 lg:pb-36 h-[30vh] text-[#283b4b]">
            {children}
        </div>
    </div>
}