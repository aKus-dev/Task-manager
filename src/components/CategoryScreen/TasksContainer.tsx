import { TaskInputSearch, CategoryInfo } from '../';
import { useCategories } from '../../global';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';


interface TasksContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const TasksContainer = ({ children }: TasksContainerProps) => {

  const { getCategoryTitle } = useCategories();
  const title = getCategoryTitle();


  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-[30px] md:text-[40px] font-bold text-[#3a3a3a] uppercase text-center">{title}</h1>
      <CategoryInfo />

      <div className="w-full flex gap-4 items-center md:justify-center max-w-[650px] mx-auto">
        {/*     <TaskInputSearch /> */}

        <Link to={routes.CreateTaskScreen} className="flex items-center justify-center shrink-0 bg-gradient-to-r from-[#5e77e6] to-[#3757e2] rounded-[50%] w-[40px] h-[40px]">
          <i className="fa-solid fa-plus text-white"></i>
        </Link>
      </div>

      <div className="max-w-[650px] mx-auto w-full flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}
