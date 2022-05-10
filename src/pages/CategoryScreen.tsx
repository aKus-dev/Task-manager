import { Navbar } from '../global/components';
import { useParams } from 'react-router-dom';
import { useCategories } from '../global';
import { useEffect, useState } from 'react';
import { Categories } from '../interfaces';
import { NoTasks, TasksContainer, Task } from '../components';
import { Reorder } from "framer-motion"

//TODO Validar cuando no se encuentra una category

export const CategoryScreen = () => {

  const [category, setCategory] = useState<Categories>();
  const { id } = useParams();
  const { getCategoryByid, setActualCategoryFunc } = useCategories();

  useEffect(
    () => {
      const category = getCategoryByid(id!);
      setCategory(category)
      setActualCategoryFunc(id!);
    }, [id, category]
  )

  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse px-[18px] py-2 gap-2">
      <main className="flex-grow flex flex-col justify-center items-center md:px-6 gap-6">
        {
          !category?.tasks.length
            ? <NoTasks title={category?.title} />
            : (
              <TasksContainer>
                {
                  category?.tasks.map(({ id, title }) => (
                    <div key={id}>
                      <Task taskTitle={title} id={id} />
                    </div>
                  ))
                }
              </TasksContainer>
            )
        }

      </main>
      <Navbar />
    </div>
  )
}
