import { atom, useAtom } from "jotai";

export const tagAtom = atom<string[]>([])

export const useTag = () => {

    const [tags, setTags] = useAtom(tagAtom);

    const addTag = (tagName: string) => {
        setTags([
            ...tags,
            tagName
        ])
    }

    const removeTag = (tagName: string) => {
        const newTags = tags.filter(tag => tag !== tagName);
        setTags(newTags)
    }

    return {
        addTag,
        removeTag,
        tags,
        setTags
    }
}