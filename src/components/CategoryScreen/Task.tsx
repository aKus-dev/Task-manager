import { useCategories } from '../../global/categoriesAtom';
import { Link } from 'react-router-dom';

interface TaskProps {
  taskTitle: string;
  id: string;
}

export const Task = ({ taskTitle, id }: TaskProps) => {

  const { deleteTask } = useCategories();

  return (
    <article className="p-[15px] border border-[#d4d1d1] rounded-[8px] border-l-[6px] border-l-[#3757e2] flex justify-between items-center">
      <h1 className="flex-grow text-[18px]">{taskTitle}</h1>

      <div className="w-[60px] flex gap-4 text-[25px] ">

        <button onClick={() => deleteTask(id)} className="text-[#3757e2] cursor-pointer">
          <i className="fa-solid fa-xmark text-red-600"></i>
        </button>
        
        <Link to={`/task/${id}`} className="text-[#3757e2] cursor-pointer">
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  )
}
