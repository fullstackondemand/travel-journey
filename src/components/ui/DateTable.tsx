export default function DateTable({ date, year, children, space }
    : {
        date: string,
        space: string,
        year: number,
        children: React.ReactNode
    }
) {

    return <div className="date-table w-[60vw] sm:w-1/2 lg:w-1/4 xl:w-1/5 flex-none flex flex-col h-full text-black">
        <div className="flex flex-col items-center py-3 h-full">
            <p className="text-sm font-bold">{date}</p>
            <p className="text-xs text-[#474747]">{year}</p>

            <div className={`flex flex-grow h-full flex-col p-1.5 border-t border-r border-[#F5F5F5] gap-3 ${space} w-full mt-3`}>
                {children}
            </div>

        </div>
    </div>
}