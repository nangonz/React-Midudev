
export const Square = ({children, isSelected, updateBoard, index}) =>{
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleOnClick = () =>{
      updateBoard(index)
    }
    return(
      <div className={className} onClick={handleOnClick}>
        {children}
      </div>
    )
  }