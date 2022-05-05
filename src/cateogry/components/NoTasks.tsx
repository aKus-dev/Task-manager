import { Link } from 'react-router-dom';
import { routes } from '../../routes';

interface NoTaskProps {
    title: string | undefined;
}

// TODO: Crear en routes.ts la ruta para crear una task

export const NoTasks = ({title}: NoTaskProps) => {
    return (
        <div className="flex flex-col gap-8 items-center">
            <div>
                <h1 className="text-center text-[30px] md:text-[40px] font-bold bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-transparent bg-clip-text uppercase">{title}</h1>
                <p className="text-[#5e77e6]">Empieza creando tu primer tarea para esta categoría</p>
            </div>
            <img className="h-[320px]" src="/img/tasks.svg" alt="Task" />

            <Link to={routes.CreateTaskScreen} className="text-center bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-white px-6 py-2 max-w-[350px] w-full rounded-[10px]">Crear</Link>
        </div>
    )
}
