import { Square, TaskIcon, AddNewCategory, Settings } from '../../components';
import { useCategories } from '..';
import { useNavbar } from '../../hooks';
import { routes } from '../../routes';
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {

    const maxAmount = useNavbar();
    const { categories } = useCategories();
    
    return (
        <aside className="bg-gradient-to-r md:bg-gradient-to-b from-[#5e77e6] to-[#3757e2] basis-[80px] rounded-[20px] p-6 flex items-center md:gap-6 md:flex-col">
            <Link to={routes.HomeScreen} >
                <Square />
            </Link>

            <div className="w-full justify-center items-center flex gap-4 md:gap-6 md:flex-col ">

                {
                    categories.length !== 0 && (
                        categories.map((category, index) => {

                            const { id, title } = category;

                            //* Controla que no imprima máx TaskIcons de los permitidos
                            if (index >= maxAmount) return;

                            return (
                                <NavLink rel=""to={`/category/${id}`} key={index} className={({isActive}) => `duration-300 ${isActive ? 'text-[#375bfa] scale-[1.25]' : 'text-[#37364d]'}`}>
                                    <TaskIcon char={title.charAt(0)} title={title} />
                                </NavLink>
                            )
                        })
                    )
                }
                <AddNewCategory />
                <Settings />
            </div>
        </aside>
    )
}
