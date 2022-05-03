import { Navbar } from '../../global/components';
import { useParams, Link } from 'react-router-dom';
import { useCategories } from '../../global';
import { useEffect, useState } from 'react';
import { Categories } from '../../interfaces';

//TODO Validar cuando no se encuentra una category

export const CategoryScreen = () => {

  const [category, setCategory] = useState<Categories>();
  const { id } = useParams();
  const { getCategoryByid } = useCategories();


  useEffect(
    () => {
      const category = getCategoryByid(id!);
      setCategory(category)
    }, [id]
  )



  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse px-[18px] py-2 gap-2">
      <main className="flex-grow flex flex-col justify-center items-center px-6 gap-6">
        {
          !category?.tasks.length && (
            <div className="flex flex-col gap-8 items-center">
              <div>
                <h1 className="text-center text-[30px] md:text-[40px] font-bold bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-transparent bg-clip-text uppercase">{category?.title}</h1>
                <p className="text-[#5e77e6]">Empieza creando tu primer tarea para esta categoría</p>
              </div>
              <img className="h-[320px]" src="/img/tasks.svg" alt="Task" />

              <Link to='' className="text-center bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-white px-6 py-2 max-w-[350px] w-full rounded-[10px]">Crear</Link>
            </div>
          )
        }

      </main>
      <Navbar />
    </div>
  )
}
