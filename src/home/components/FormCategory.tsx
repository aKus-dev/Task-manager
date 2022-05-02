import { useForm, SubmitHandler } from 'react-hook-form';
import { useTag, useCategories } from '../../global';
import { Link } from 'react-router-dom';
import { TagsContainer, Tag, FormError } from './';
import { routes } from '../../routes';
import { useState } from 'react';
import uniqid from 'uniqid'

export interface IFormData {
    title: string;
    desc: string;
}

export const FormCategory = () => {

    const { tags } = useTag();
    const { addCategory } = useCategories();
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormData>();
    const onSubmit: SubmitHandler<IFormData> = ({ title, desc }) => {
        addCategory({
            id: uniqid(),
            title,
            desc,
            tags: tags,
            tasks: []
        })

        //* Reset form fields
        reset({title: '', desc: ''})

        //* Success alert
        setIsSuccess(true);

        setTimeout(
            () => {
                setIsSuccess(false);
            }, 3000
        )
    };


    return (
        <form className="flex flex-col gap-8 max-w-[450px] mx-auto w-full" onSubmit={handleSubmit(onSubmit)}>

            {
                isSuccess && (
                    <div className="border-l-[4px] border-green-400 p-2 text-green-700 bg-green-100 text-center rounded-[5px]">
                        Categoría creada exitosamente
                    </div>
                )
            }

            <h2 className="text-center bg-gradient-to-r from-[#3757e2] to-[#5e77e6] text-transparent bg-clip-text font-bold text-[22px] mt-4">Completa los datos</h2>

            <div className="flex flex-col gap-2">
                <label htmlFor='title' className="text-[#3757e2] font-bold">Titulo</label>
                <input {
                    ...register("title", { required: true, minLength: 2 })}
                    id='title'
                    className="text-[#3757e2] p-2 outline-none border-l border-b border-l-[#5e77e6] border-b-[#5e77e6]"
                />

                {errors?.title?.type === 'required' && <FormError>Campo requerido</FormError>}
                {errors?.title?.type === 'minLength' && <FormError>Debe tener mínimo 2 caracteres</FormError>}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor='desc' className="text-[#3757e2] font-bold">Descripción</label>
                <input {
                    ...register("desc", { required: true, minLength: 10 })}
                    id='desc'
                    className="text-[#3757e2] p-2 outline-none border-l border-b border-l-[#5e77e6] border-b-[#5e77e6]"
                />

                {errors?.desc?.type === 'required' && <FormError>Campo requerido</FormError>}
                {errors?.desc?.type === 'minLength' && <FormError>Debe tener mínimo 10 caracteres</FormError>}
            </div>

            <div className="flex flex-col gap-4">
                <label className="text-[#3757e2] font-bold">Tags</label>

                <TagsContainer>
                    <Tag isSuccess={isSuccess}>Trabajo</Tag>
                    <Tag isSuccess={isSuccess}>Música</Tag>
                    <Tag isSuccess={isSuccess}>Deportes</Tag>
                    <Tag isSuccess={isSuccess}>Películas</Tag>
                </TagsContainer>

                <Link to={routes.TagsScreen} className="text-[#5e77e6] underline">Crear tags personalizados</Link>
            </div>

            <button className="outline-none text-center bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-white px-6 py-2 w-full rounded-[10px]">Crear categoría</button>
        </form>
    )
}
