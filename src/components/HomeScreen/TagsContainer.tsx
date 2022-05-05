interface TagsContainerProps {
    children: JSX.Element | JSX.Element[];
}

export const TagsContainer = ({children}: TagsContainerProps) => {

  return (
    <div className="flex gap-4 flex-wrap">
        {children}
    </div>
  )
}
