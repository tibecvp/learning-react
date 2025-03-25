import { useEffect } from "react"

export default function SearchPage({ routeParams }) {
    useEffect(() => {
        document.title = `Search for ${routeParams.query}`
    }, [])

    return (
        <>
            <h1>Results for {routeParams.query}</h1>
        </>
    )
}