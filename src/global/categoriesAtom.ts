import { useAtom, atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Categories, Task } from '../interfaces';
import { ChangeEvent, useState, useEffect } from 'react';

export const categoriesAtom = atomWithStorage('categories', [] as Categories[])
export const filterCategoriesAtom = atom<Categories[]>([])
export const actualCategoryAtom = atom('');

export const useCategories = () => {
actualCategoryAtom
    const [categories, setCategories] = useAtom(categoriesAtom)
    const [filter, setFilter] = useAtom(filterCategoriesAtom);
    const [actualCategory, setActualCategory] = useAtom(actualCategoryAtom);
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

    const getCategoryTitle = (id: string) => {
        const category = categories.find(c => c.id === id);
        return category?.title;
    }

    const setActualCategoryFunc = (id:string) => {
        setActualCategory(id);
    }

    const addTask = (idCategory: string, task: Task) => {
        const category = categories.find(c => c.id === idCategory);
        category?.tasks.push(task)

        const newCategories = categories.map(c => {
            if(c.id === category?.id) return category;
            return c;
        })

        setCategories(newCategories)
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
        getCategoryByid,
        setActualCategoryFunc,
        actualCategory,
        getCategoryTitle,
        addTask
    }
}