import { Navbar, HomeInfo, NoData } from '../components';
import { useCategories } from '../../global';

export const HomeScreen = () => {

    const { categories } = useCategories();

    return (
        <div className="min-h-screen flex flex-col md:flex-row-reverse px-[18px] py-2 gap-2">
            <main className="flex-grow flex flex-col justify-center items-center px-6">
               {
                   categories.length 
                            ? <HomeInfo />
                            : <NoData />
               }
            </main>

            <Navbar />
        </div>
    )
}
