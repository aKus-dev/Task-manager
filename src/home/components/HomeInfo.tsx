import { CategoryCard } from './';
import { useCategories } from '../../global';
//TODO Ver que diseño hacerle a la card de las categorias

export const HomeInfo = () => {

    const { categories } = useCategories();

    return (
        <div className="text-center flex flex-col gap-8 w-full p-8">
            <div>
                <h1 className="text-[40px] font-bold bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-transparent bg-clip-text uppercase">Tus categorías</h1>
                <p className="text-[#5e77e6]">Selecciona una categoría para empezar a crear tareas</p>
            </div>

            <div className="flex flex-col max-w-[1000px] mx-auto gap-8 md:flex-row md:flex-wrap">

                {
                    categories.map(({ title, desc }) => (
                        <CategoryCard>
                            <CategoryCard.icon>
                                <i className="fa-solid fa-sheet-plastic text-[25px] text-white"></i>
                            </CategoryCard.icon>

                            <div className="flex flex-col items-start gap-[3px] truncate">
                                <CategoryCard.title>{title}</CategoryCard.title>
                                <CategoryCard.desc>{desc}</CategoryCard.desc>
                            </div>
                        </CategoryCard>
                    ))
                }

            </div>
        </div>
    )
}
