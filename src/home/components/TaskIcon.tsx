interface TaskIconProps {
    char: string;
    title: string;
}

export const TaskIcon = ({char, title}: TaskIconProps) => {
    return (
        <div title={title} className="select-none shrink-0 cursor-pointer rounded-[50%] bg-white text-[#37364d] w-[40px] h-[40px] flex justify-center items-center font-bold text-[20px] uppercase border-[2px] border-[#c8c8c9]">
            <p>{char}</p>
        </div>
    )
}
