import { TaskInputSearch } from './';
import { useCategories } from '../../global';
interface TasksContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const TasksContainer = ({ children }: TasksContainerProps) => {

  const { actualCategory, getCategoryTitle } = useCategories();
  const title = getCategoryTitle(actualCategory);


  return (
    <div className="w-full flex flex-col gap-6">

      <div className="text-center w-full">
        <h1 className="text-[30px] md:text-[40px] font-bold bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-transparent bg-clip-text uppercase">Tareas</h1>
        <p className="text-[#5e77e6]">Lista de tareas para la categoría {title?.toLowerCase()}</p>
      </div>

      <div className="w-full flex gap-4 items-center md:justify-center max-w-[550px] mx-auto">
        <TaskInputSearch />

        <button className="shrink-0 bg-gradient-to-r from-[#5e77e6] to-[#3757e2] rounded-[50%] w-[40px] h-[40px]">
          <i className="fa-solid fa-plus text-white"></i>
        </button>
      </div>

      <div className="max-w-[550px] mx-auto w-full">
        {children}
      </div>
    </div>
  )
}
