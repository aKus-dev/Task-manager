import { CategoryCard, FilterCategory } from '../';
import { useCategories } from '../../global';
import { Link } from 'react-router-dom';

export const HomeInfo = () => {

    const { filter } = useCategories();

    return (
        <div className="text-center flex flex-col gap-8 w-full py-6">
            <div>
                <h1 className="text-[30px] md:text-[40px] font-bold bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-transparent bg-clip-text uppercase">Tus categorías</h1>
                <p className="text-[#5e77e6]">Selecciona una categoría para empezar a crear tareas</p>
                <FilterCategory />
            </div>

            <div className="flex flex-col max-w-[1000px] mx-auto gap-8 md:flex-row md:flex-wrap w-full">

                {
                    filter.length
                        ?
                        (
                            filter.map(({ id, title, desc }) => (
                                <Link to={`/category/${id}`} key={id} className="mx-auto cursor-pointer w-[100%] p-4 max-w-[450px] shadow-lg rounded-[10px] border border-[#3757e2] flex flex-col justify-center sm:justify-start items-center gap-4 sm:flex-row md:duration-300 md:hover:shadow-[5px_5px_20px_#6c83e6] md:hover:scale-105">
                                    <CategoryCard.icon>
                                        <i className="fa-solid fa-sheet-plastic text-[25px] text-white"></i>
                                    </CategoryCard.icon>

                                    <div className="flex flex-col items-start gap-[3px] truncate">
                                        <CategoryCard.title>{title}</CategoryCard.title>
                                        <CategoryCard.desc>{desc}</CategoryCard.desc>
                                    </div>
                                </Link>
                            ))
                        )
                        :
                        (
                            <div className="border-l-[4px] border-red-400 py-2 px-6 text-red-700 bg-red-100 text-center rounded-[5px]  mx-auto">
                                No se han encontrado resultados
                            </div>
                        )

                }

            </div>
        </div>
    )
}

