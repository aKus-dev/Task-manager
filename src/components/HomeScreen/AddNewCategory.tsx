import { Link } from 'react-router-dom';
import { routes } from '../../routes';

export const AddNewCategory = () => {
    return (
        <Link to={routes.CreateCategoryScreen} className="select-none shrink-0 cursor-pointer rounded-[50%] bg-white text-[#3656e1] w-[40px] h-[40px] flex justify-center items-center font-bold text-[20px] uppercase border-[2px] border-[#c8c8c9]">
            <i className="fa-solid fa-plus"></i>
        </Link>
    )
}
