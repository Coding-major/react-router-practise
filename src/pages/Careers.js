import { useState } from "react"
import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()
    const [paramid, setParamID] = useState('');

    function changeID(event) {
        setParamID(event.target.value)
    }

    return (
        <div>
            <div>
                {careers.map(career => (
                    <Link to={`${career.id}`} key={career.id}>
                        <div style={{background: "#2a2b2a"}}>
                            <p>{career.title}</p>
                            <p>Based in {career.location}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div style={{background: "#2a2b2a"}}>
                <input style={{background: "#46484d"}} type="text" onChange={changeID} />
                <Link to={`${paramid}`}><button >findJob</button></Link>
            </div>
        </div>
    )
}

//loader function
export const careersLoader = async () => {
    const response = await fetch("http://localhost:4000/careers")
    if (!response.ok) {
        throw Error("routes for jobs does not exist")
    }
    return response.json()
}