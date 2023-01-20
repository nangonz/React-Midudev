import { useState, useEffect, useMemo, useCallback } from "react"
import styled from 'styled-components'

const SectionWrapper = styled.section`
color: white;
font-weight: bold;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 1rem;
padding: 1rem
`
const StyledInput= styled.input`
    color: red;
    font-weight: bold;
    border-radius: 5px;
    width: 9rem
`

export default function UseMemoExample(){

    const [userNumber, setUserNumber] = useState('')
    const [randomInput, setRandomInput] = useState('')
    const fib = useCallback((n) => {
        return (n<=1) ? n : fib(n-1) + fib(n-2)
    }, [])
    const fibNumber = useMemo(()=> fib(userNumber),[userNumber])

    useEffect(()=>{
        console.log('New Number')
    }, [fibNumber, fib])



    return(
        <SectionWrapper>
            <label>Fibonacci Sequence:</label>
            <StyledInput type="number" value={userNumber} 
            placeholder='Position' 
            onChange={(e)=> setUserNumber(e.target.value)}/>
            <p>Number: {fibNumber || '--'}</p>
            <label>Random input:</label>
            <StyledInput type="text" value={randomInput}
            placeholder='Random Input' 
            onChange={(e)=> setRandomInput(e.target.value)} 
            />
            <p>{randomInput}</p>
        </SectionWrapper>
    )

}