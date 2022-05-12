import { useAtom, atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Categories, StatusOptions, Task } from '../interfaces';
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

    const getCategoryTitle = () => {
        const category = categories.find(c => c.id === actualCategory);
        return category?.title;
    }

    const setActualCategoryFunc = (id: string) => {
        setActualCategory(id);
    }

    const addTask = (idCategory: string, task: Task) => {
        const category = categories.find(c => c.id === idCategory);
        category?.tasks.push(task)

        const newCategories = categories.map(c => {
            if (c.id === category?.id) return category;
            return c;
        })

        setCategories(newCategories)
    }

    const getTaskData = (idTask: string) => {
        const category = categories.find(c => c.id == actualCategory);
        return category?.tasks.find(t => t.id === idTask);
    }

    const updateTask = (idTask: string, title: string, status: StatusOptions, desc: string) => {
        const category = categories.find(c => c.id === actualCategory);
        const oldTasks = category!.tasks;

        const tasksUpdated: Task[] = oldTasks.map(t => {
            if (t.id !== idTask) return t;

            return {
                ...t,
                title,
                desc,
                status
            }
        })


        const categoriesUpdated = categories.map(c => {
            if (c.id !== actualCategory) return c;

            return {
                ...c,
                tasks: tasksUpdated
            }
        })

        setCategories(categoriesUpdated!)

    }

    const getTaskInfo = () => {
        const category = categories.find(c => c.id === actualCategory);

        const total = category?.tasks.length;
        const toDo = category?.tasks.filter(t => t.status == 'To do').length;
        const inProgress = category?.tasks.filter(t => t.status == 'In Progress').length;
        const done = category?.tasks.filter(t => t.status == 'Done').length;

        return { 
            total: total?.toString(), 
            toDo: toDo?.toString(), 
            inProgress: inProgress?.toString(),
            done: done?.toString()
        }
    }

    const deleteTask = (idTask: string) => {
        const categoriesUpdated = categories.map(c => {
            if(c.id !== actualCategory) return c;

            const newTasks = c.tasks.filter(t => t.id !== idTask);

            return {
                ...c,
                tasks: newTasks
            }
        })

        setCategories(categoriesUpdated);
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
        addTask,
        deleteTask,
        getTaskData,
        updateTask,
        getTaskInfo
    }
}