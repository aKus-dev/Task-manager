import { useCategories } from '../../global';

export const FilterCategory = () => {

    const { filterText, handleFilterText } = useCategories();

    return (
        <form className="mt-4">
            <input
                type="text"
                placeholder='Busca por titulo'
                value={filterText}
                onChange={handleFilterText}
                className="w-full max-w-[380px] mx-auto text-[#5e77e6] outline-none px-4 py-2 border border-[#3757e2] rounded-[50px]"
            />
        </form>
    )
}
