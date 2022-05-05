interface FormErrorProps {
    children: string;
}

export const FormError = ({children}: FormErrorProps) => {
    return (
        <div className="flex gap-2 items-center text-red-600">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <p>{children}</p>
        </div>
    )
}
