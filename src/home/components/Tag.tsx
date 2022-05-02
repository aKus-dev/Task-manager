import { useRef, useEffect } from 'react';
import { useTag } from '../../global';

interface TagProps {
    children: string;
    isSuccess: boolean;
}

export const Tag = ({ children, isSuccess }: TagProps) => {

    const { addTag, removeTag } = useTag();
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(
        () => {
            if (isSuccess) {
                const btn = buttonRef.current;
                btn?.classList.remove('tag-selected');
                btn?.classList.add('tag-no-selected');
            }
        }, [isSuccess]
    )

    const hanldeTagActive = () => {
        const btn = buttonRef.current;

        if (btn?.classList.contains('tag-no-selected')) {
            btn?.classList.remove('tag-no-selected');
            btn?.classList.add('tag-selected');
            addTag(children)

        } else {
            btn?.classList.remove('tag-selected');
            btn?.classList.add('tag-no-selected');
            removeTag(children)
        }
    }

    return (
        <button type="button" onClick={hanldeTagActive} ref={buttonRef} className="tag-no-selected duration-300 font-bold px-6 py-2 rounded-[50px]">
            {children}
        </button>
    )
}
