import { useCategories } from '../../global/categoriesAtom';
interface TaskProps {
  taskTitle: string;
}

export const Task = ({ taskTitle }: TaskProps) => {

  const { actualCategory } = useCategories();

  return (
    <article className="p-[15px] border border-[#d4d1d1] rounded-[8px] border-l-[6px] border-l-[#3757e2] flex justify-between items-center">
      <h1 className="flex-grow text-[18px]">{taskTitle}</h1>

      <div className="w-[60px] flex gap-4 text-[25px] ">
        <button className="text-[#3757e2] cursor-pointer">
          <i className="fa-solid fa-xmark text-red-600"></i>
        </button>
        
        <button className="text-[#3757e2] cursor-pointer">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </article>
  )
}
