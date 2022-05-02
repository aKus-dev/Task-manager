import { Link } from 'react-router-dom';
import { routes } from '../../routes';

export const NoData = () => {
    return (
        <div className="flex  flex-col justify-center gap-4 items-center">
            <img
                src="/img/no-data3.svg"
                alt="No data"
                className="w-[350px]"
            />

            <h1 className="text-[22px] font-bold text-[#33314d]">No hemos detectado tareas</h1>
            <p className="text-[#33314d] text-[18px]">Empieza creando una categoría </p>
            <Link to={routes.CreateCategoryScreen} className="text-center bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-white px-6 py-2 w-[200px] rounded-[10px]">Crear</Link>
        </div>
    )
}
