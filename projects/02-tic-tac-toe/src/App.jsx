import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const Square = ({children, isSelected, updateBoard, index}) =>{
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

function App() {

  const [board, setBoard] = useState(Array(9).fill(null)) 
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    //no actualizamos esta posicion
    //si ya tiene algo
    if(board[index]) return
    const newBoard = [...board]
    //actualizar el tablero
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  }

  const checkWinner = (boardToCheck) =>{
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  return (
    <main className='board'>
    <h1>tic-tac-toe</h1>
    <section className='game' >
      {
        board.map((_,index)=>{
          return(
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          )
        })
      }
    </section>

    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>

    <section>
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                   ? 'Empate'
                   : 'Ganó'
                }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer><button>Nueva Partida</button></footer>
            </div>

          </section>
        )

      }
    </section>
    </main>
  )
}

export default App
