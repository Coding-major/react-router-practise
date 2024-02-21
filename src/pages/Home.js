import { NavLink } from "react-router-dom"
export default function Home() {
    return(
        <div className="home">
            <h1>Home page</h1>
            <header>
                <nav>
                    <h1>JOB REACT</h1>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="about">About</NavLink>
                </nav>
            </header>
            <p>
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </p>
        </div>
    )
}