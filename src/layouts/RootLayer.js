import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/BreadCrumbs";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <Breadcrumbs />
            <main>
                <Outlet />
            </main>
        </div>
    )
}