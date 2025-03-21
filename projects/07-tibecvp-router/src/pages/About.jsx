import { navigate } from '../Link.jsx'

export function AboutPage() {
    return (
        <>
            <h1>About Us</h1>
            <div>
                <img width='240px' src="https://media.licdn.com/dms/image/v2/D5603AQHEORdTR4pcuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724258334598?e=1747872000&v=beta&t=xqkZsLN5L7XV4w-zeyakXgXVVBvQakFJvfmwkPoGNyc" alt="Tibe´s picture" />
            </div>
            <p>This is an example page to create a react router from scratch.</p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </>
    )
}