import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <>
            <h4>Ready to assist you</h4>
            <p><NavLink to="faq"> fequently asked question</NavLink></p>
            <p><NavLink to="discussion"> Discussion</NavLink></p>
            <Outlet />
        </>
    )
}