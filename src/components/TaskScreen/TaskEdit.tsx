import { useCategories } from '../../global/categoriesAtom';
import { useState, useEffect, FormEvent, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { StatusOptions, Task } from '../../interfaces';
import { useAtom } from 'jotai';
import { editAtom } from '../../global';


export const TaskEdit = () => {

    const { id } = useParams()
    const { getTaskData } = useCategories()
    const [taskData, setTaskData] = useState<Task>();

    const [isEditable, setIsEditable] = useAtom(editAtom);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState<StatusOptions>('To do');

    const { updateTask } = useCategories();

    useEffect(
        () => {
            setTaskData(
                getTaskData(id!)
            )

            if (taskData?.title) setTitle(taskData.title);
            if (taskData?.desc) setDesc(taskData.desc);
            if (taskData?.status) setStatus(taskData.status);

        }, [taskData]
    )


    const handleUpdateTask = (e: FormEvent) => {
        e.preventDefault();

        if (id) {
            updateTask(id, title, status, desc);
        }

        setIsEditable(false);

    }

    const handleSelectStatus = (e: MouseEvent) => {
        const radioButton = e.target as Element;
        const label = radioButton.parentElement as Element;

        switch (radioButton.id) {
            case 'To do':
                setStatus(radioButton.id)
                break;
            case 'In Progress':
                setStatus(radioButton.id)
                break;
            case 'Done':
                setStatus(radioButton.id)
                break;
        }

        //* Elimino el elemento anterior que estaba activo
        const activeLabel = document.querySelector('.status-active');
        activeLabel?.classList.remove('status-active')


        if (label.classList.contains('status-no-active')) {
            label.classList.add('status-active');
        }

    }


    return (
        <form className="relative mt-2 flex flex-col gap-8 p-4" onSubmit={handleUpdateTask}>

            <button type="button" onClick={() => setIsEditable(!isEditable)} className="absolute top-0 right-4">
                <i className="fa-solid fa-xmark text-[20px]"></i>
            </button>

            <div className="flex flex-col gap-2">
                <h2 className="text-[#313131] font-bold text-[25px]">Titulo</h2>
                <input
                    className="text-[#313131] p-2 outline-none border-l border-b border-l-[#acacac] border-b-[#acacac]"
                    value={title}
                    onChange={e => setTitle(e.target.value)}

                />
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-[#313131] font-bold text-[25px]">Estado</h2>

                <div className="flex gap-4">
                    <label className={`${status === 'To do' ? 'status-active' : 'status-no-active'} duration-300 font-semibold px-6 py-[5px] rounded-[50px] cursor-pointer`}>
                        To do
                        <input
                            className="hidden"
                            type="radio"
                            name="status"
                            id="To do"
                            onClick={handleSelectStatus}
                        />
                    </label>

                    <label className={`${status === 'In Progress' ? 'status-active' : 'status-no-active'} duration-300 font-semibold px-6 py-[5px] rounded-[50px] cursor-pointer`}>
                        In Progress
                        <input
                            className="hidden"
                            type="radio"
                            name="status"
                            id="In Progress"
                            onClick={handleSelectStatus}
                        />
                    </label>

                    <label className={`${status === 'Done' ? 'status-active' : 'status-no-active'} duration-300 font-semibold px-6 py-[5px] rounded-[50px] cursor-pointer`}>
                        Done
                        <input
                            className="hidden"
                            type="radio"
                            name="status"
                            id="Done"
                            onClick={handleSelectStatus}
                        />
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-[#313131] font-bold text-[25px]">Descripción</h2>
                <textarea
                    className="resize-none p-4 rounded-[8px] border border-[#acacac] outline-none"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                >
                </textarea>
            </div>

            <button
                className="bg-gradient-to-r p-2 w-full max-w-[350px] mx-auto from-[#5e77e6] to-[#3757e2] text-white rounded-[8px]"
            >
                Guardar cambios
            </button>

        </form>
    )
}
