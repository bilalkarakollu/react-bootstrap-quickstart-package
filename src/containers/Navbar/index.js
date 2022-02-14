import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/detail'}>Detail</Link></li>
            </ul>
        </div>
    )
}