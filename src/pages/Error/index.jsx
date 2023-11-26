import { Link } from "react-router-dom"

export default function Error() {
    return (
        <>
            <p>You must be lost i'm Error bro ...</p>
            <p>You can reach" <Link to="/">Home</Link></p>
            <p>You can also reach <Link to="/login"></Link></p>
        </>
    )
}