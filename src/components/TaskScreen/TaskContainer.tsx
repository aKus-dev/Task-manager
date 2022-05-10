interface TaskContainerProps {
    children: JSX.Element | JSX.Element[]
}

export const TaskContainer = ({ children }: TaskContainerProps) => {
    return (
        <main className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#5e77e6] to-[#3757e2] p-4">
            <div className="w-full bg-white p-4 rounded-[10px] max-w-[700px] mx-auto">
                {children}
            </div>
        </main>
    )
}
