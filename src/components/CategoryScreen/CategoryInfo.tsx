export const CategoryInfo = () => {
    return (
        <section className="text-center w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[650px] mx-auto">
            <article className="bg-gradient-to-r from-[#6d83e6] to-[#5875f7] flex gap-4 shadow-lg rounded-[10px] p-[10px] border border-[#d4d1d1]">
                <div className="w-[7px] h-[50px] bg-[#FFF] rounded-t-[50px] rounded-b-[50px]">
                </div>

                <div className="flex-grow text-left flex flex-col justify-center text-white">
                    <h2 className="font-semibold">General</h2>
                    <span className="text-[#e0e0e0]">16 Tasks</span>
                </div>
            </article>

            <article className="bg-gradient-to-r from-[#6d83e6] to-[#5875f7] flex gap-4 shadow-lg rounded-[10px] p-[10px] border border-[#d4d1d1]">
                <div className="w-[7px] h-[50px] bg-[#FFF] rounded-t-[50px] rounded-b-[50px]">
                </div>

                <div className="flex-grow text-left flex flex-col justify-center text-white">
                    <h2 className="font-semibold">To do</h2>
                    <span className="text-[#e0e0e0]">16 Tasks</span>
                </div>
            </article>

            <article className="bg-gradient-to-r from-[#6d83e6] to-[#5875f7] flex gap-4 shadow-lg rounded-[10px] p-[10px] border border-[#d4d1d1]">
                <div className="w-[7px] h-[50px] bg-[#FFF] rounded-t-[50px] rounded-b-[50px]">
                </div>

                <div className="flex-grow text-left flex flex-col justify-center text-white">
                    <h2 className="font-semibold">In Progress</h2>
                    <span className="text-[#e0e0e0]">16 Tasks</span>
                </div>
            </article>

            <article className="bg-gradient-to-r from-[#6d83e6] to-[#5875f7] flex gap-4 shadow-lg rounded-[10px] p-[10px] border border-[#d4d1d1]">
                <div className="w-[7px] h-[50px] bg-[#FFF] rounded-t-[50px] rounded-b-[50px]">
                </div>

                <div className="flex-grow text-left flex flex-col justify-center text-white">
                    <h2 className="font-semibold">Done</h2>
                    <span className="text-[#e0e0e0]">16 Tasks</span>
                </div>
            </article>
        </section>
    )
}


{/* <h1 className="text-[30px] md:text-[40px] font-bold bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-transparent bg-clip-text uppercase">{title}</h1>
<p className="text-[#5e77e6]">Lista de tareas de la categoría</p> */}