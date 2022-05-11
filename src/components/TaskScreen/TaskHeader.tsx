import { editAtom } from '../../global';
import { useAtom } from 'jotai';

export const TaskHeader = () => {

    const [isEditable, setIsEditable] = useAtom(editAtom);

    return (
        <header className="flex justify-end">
            <button  onClick={() => setIsEditable(!isEditable)} className="shadow-[0px_0px_15px_#CED4D5] p-2 rounded-[8px] w-[40px] h-[40px]">
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
        </header>
    )
}
