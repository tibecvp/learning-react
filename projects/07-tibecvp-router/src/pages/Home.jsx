import { Link } from '../Link.jsx'

export default function HomePage() {
    return (
        <>
            <h1>Home Page</h1>
            <p>This is an example page to create a react router from scratch.</p>
            <Link to='/about'>Go to About Us</Link>
        </>
    )
}