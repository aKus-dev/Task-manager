import { useNavigate } from "react-router-dom"

export const BackButton = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <button onClick={handleBack}  className="text-white text-[25px]">
            <i className="fa-solid fa-arrow-left-long"></i>
        </button>
    )
}
