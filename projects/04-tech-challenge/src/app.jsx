import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
import { Otro } from './components/Otro';

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>Cats App</h1>

            <button onClick={handleClick}>Get New Fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt="Random cat image" />}
            <Otro />
        </main>
    );
}