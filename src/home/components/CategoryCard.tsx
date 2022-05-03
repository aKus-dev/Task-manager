interface CategoryCardProps {
    children: JSX.Element | JSX.Element[] | string;
}


export const CategoryCard = ({ children }: CategoryCardProps) => {
    return (
        <div className="mx-auto cursor-pointer w-[95%] p-6 max-w-[450px] shadow-lg rounded-[10px] border border-[#3757e2] flex items-center gap-4 md:duration-300 md:hover:shadow-[5px_5px_20px_#6c83e6] md:hover:scale-105">
            {children}
        </div>
    )
}

CategoryCard.title = ({ children }: CategoryCardProps) => {
    return (
        <h2 className="font-bold text-[18px] text-[#131419] w-full text-center sm:text-left">{children}</h2>
    )
}

CategoryCard.icon = ({ children }: CategoryCardProps) => {
    return (
        <div className="bg-[#3757e2] w-[60px] h-[60px] rounded-[10px] flex justify-center items-center shrink-0">
            {children}
        </div>
    )
}

CategoryCard.desc = ({ children }: CategoryCardProps) => {
    return (
        <div className="w-full truncate text-[#686666] text-center md:text-left">
            <span>{children}</span>
        </div>
    )
}

CategoryCard.info = ({ children }: CategoryCardProps) => {
    return (
        <div className="flex gap-2 items-center">
            {children}
        </div>
    )
}

