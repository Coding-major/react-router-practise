import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {

    const location = useLocation();
    
    let currentLink = ''
    let crumbs = location.pathname.split("/")
    .filter((crumb) => crumb !== "")
    console.log(crumbs.pop())
    
    let newDatas = crumbs
    .map((crumb) => {
        currentLink += `/${crumb}`

        return (
                
                <div key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
        )
    })
    
    return ( 
        <>
            <div><Link to='/'>Home</Link></div>
            {newDatas}
        </>
    // <div>Breadcrumbs</div>
     );
}

export default Breadcrumbs;