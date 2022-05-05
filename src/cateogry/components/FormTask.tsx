import { useCategories } from '../../global/categoriesAtom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormError } from '../../home/components';
import { useState } from 'react';
import uniqid from 'uniqid'


export interface IFormData {
    title: string;
    desc: string;
}

export const FormTask= () => {

    const { actualCategory, addTask } = useCategories();
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormData>();
    const onSubmit: SubmitHandler<IFormData> = ({ title, desc }) => {
        addTask(
            actualCategory,
            {
                id: uniqid(),
                title,
                desc,
                date: Date.now().toString(),
                status: 'To do'
            }
        );

        //* Reset form fields
        reset({ title: '', desc: '' })

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
                        Tarea creada exitosamente
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

            <button className="outline-none text-center bg-gradient-to-r from-[#5e77e6] to-[#3757e2] text-white px-6 py-2 w-full rounded-[10px]">Crear tarea</button>
        </form>
    )
}
