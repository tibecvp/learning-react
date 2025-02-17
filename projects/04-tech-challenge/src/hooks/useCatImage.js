import { useState, useEffect } from 'react'

const CAT_IMAGE_ENPOINT = 'https://cataas.com/cat/says'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        // const fristWord = fact.split(' ')[0]
        const firstWord = fact.split(' ').slice(0, 3).join(' ')
        console.log(firstWord)
        setImageUrl(`${CAT_IMAGE_ENPOINT}/${firstWord}`)
    }, [fact])
    return { imageUrl }
}