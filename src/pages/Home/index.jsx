import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <p>Welcome aboard you're in your Home</p>
            <p>You can reach the <Link to="/login">Login</Link> page from here</p>
        </div>
    )
}