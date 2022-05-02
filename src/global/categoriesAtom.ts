import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Categories } from '../interfaces';

export const categoriesAtom = atomWithStorage('categories', [] as Categories[])

export const useCategories = () => {

    const [categories, setCategories] = useAtom(categoriesAtom)

    const addCategory = (category: Categories) => {
        setCategories([...categories, category])
    }

    return {
        addCategory,
        categories,
        setCategories
    }
}