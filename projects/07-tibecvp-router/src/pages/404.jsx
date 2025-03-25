import { Link } from "../Link";

export default function Page404() {
    return (
        <>
            <div>
                <h1>Error 404: This is not fine</h1>
                <img src="https://i.pinimg.com/originals/c0/4a/ae/c04aae1e761928f630eea80459347c2f.gif" alt="This is not fine image" />
            </div>
            <Link to='/'>Go to Home</Link>
        </>
    )
}