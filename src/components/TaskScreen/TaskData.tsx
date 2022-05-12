import { useCategories } from '../../global/categoriesAtom';
import { TaskHeader } from '../';
import { useEffect } from 'react';

interface TaskDataProps {
    taskName: string | undefined;
    status: string | undefined;
    date: string | undefined;
    desc: string | undefined;
}

export const TaskData = ({ taskName, status, date, desc }: TaskDataProps) => {

    const { getCategoryTitle } = useCategories()

    return (
        <>
            <TaskHeader />
            
            <div className="mt-2 flex flex-col gap-8 p-4">
                <h1 className="flex flex-col sm:flex-row gap-2 sm:items-center text-[22px]">
                    <span className="text-[#313131] font-bold ">{getCategoryTitle()}</span>
                    <span className="text-[#444444]">/ {taskName}</span>
                </h1>


                <div className="flex flex-col gap-6">
                    <div className="flex items-center flex-wrap gap-2">
                        <div className="w-[120px] flex items-center gap-2">
                            <i className="fa-solid fa-bullhorn"></i>
                            <span className="text-[18px]">Estado</span>
                        </div>
                        <h3 className="font-semibold bg-[#e7e982c5] text-[#27220e] px-6 py-[5px] rounded-[50px]">{status}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <div className="w-[120px] flex items-center gap-2">
                            <i className="fa-solid fa-clock"></i>
                            <span className="text-[18px]">Creación</span>
                        </div>

                        <h3 className="items-start font-semibold bg-[#e7e982c5] text-[#27220e] px-6 py-[5px] rounded-[50px]">{date}</h3>
                    </div>
                </div>

                <div className="p-4 rounded-[8px] border border-[#acacac]">
                    <p className="text-[#363636]">{desc}</p>
                </div>
            </div>
        </>
    )
}
