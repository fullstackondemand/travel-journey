import { GrPin } from "react-icons/gr";

export default function PostContent({ postBy, title }: {
    postBy: string,
    title: string
}) {

    return <>
        <p className="font-semibold text-sm md:text-[16px] text-white">{title}</p>

        <div className="flex text-[#D1D1D1] text-[12px] md:text-sm items-center gap-2 mt-2.5">
            <GrPin className="text-[14px]" />
            <p className="text-[12px] md:text-sm">posted by {postBy}</p>
        </div>
    </>
}