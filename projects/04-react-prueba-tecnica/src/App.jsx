import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new Fact</button>
      <p>{fact}</p>
      <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='Cat says image' />
    </main>
  )
}
