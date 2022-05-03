import { useAtom, atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Categories } from '../interfaces';
import { ChangeEvent, useState, useEffect } from 'react';

export const categoriesAtom = atomWithStorage('categories', [] as Categories[])
export const filterCategoriesAtom = atom<Categories[]>([])

export const useCategories = () => {

    const [categories, setCategories] = useAtom(categoriesAtom)
    const [filter, setFilter] = useAtom(filterCategoriesAtom);
    const [filterText, setFilterText] = useState('');

    const addCategory = (category: Categories) => {
        setCategories([...categories, category])
    }

    const handleFilterText = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value)
    }

    const getCategoryByid = (id: string) => {
        return categories.find(c => c.id === id);
    }

    useEffect(
        () => {

            if (!filterText) {
                setFilter(categories)
            } else {
                const result = categories.filter(({ title }) => {
                    const lowerTitle = title.toLowerCase();
                    const lowerFilterText = filterText.toLowerCase();

                    return lowerTitle.includes(lowerFilterText)
                });

                if (!result.length) {
                    setFilter([]);
                    return;
                };

                setFilter(result)
            }

        }, [filterText]
    )

    return {
        addCategory,
        categories,
        setCategories,
        filterText,
        handleFilterText,
        filter,
        getCategoryByid
    }
}