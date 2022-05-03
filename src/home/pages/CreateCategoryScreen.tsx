import { FormCategory } from '../components';
import { BackButton } from '../../global/components';

export const CreateCategoryScreen = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#3757e2] to-[#5e77e6] lg:grid lg:grid-cols-2">
            <header className="relative flex flex-col gap-4 min-h-[25vh] p-8 lg:h-screen lg:justify-center lg:items-center lg:gap-0">
                <div className="lg:absolute lg:top-6 left-6">
                    <BackButton />
                </div>
                <h1 className="text-white font-bold text-[30px] lg:text-[40px]">Crear una categoría</h1>
                <p className="lg:block text-[#dad8d8] lg:max-w-[300px] lg:text-center">Las categorías sirven para agrupar tareas según una temática.</p>
            </header>

            <main className="flex-grow rounded-t-[50px] bg-white p-10 flex flex-col gap-6 justify-center items-center lg:rounded-t-none lg:rounded-l-[50px]">
                <FormCategory />
            </main>
        </div>
    )
}
