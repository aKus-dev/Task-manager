import { Navbar } from '../../global/components';
import { useParams } from 'react-router-dom';
import { useCategories } from '../../global';
import { useEffect, useState } from 'react';
import { Categories } from '../../interfaces';
import { NoTasks } from '../components/NoTasks';
export { NoTasks } from '../components';

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
          !category?.tasks.length && <NoTasks title={category?.title} />
        }

      </main>
      <Navbar />
    </div>
  )
}
