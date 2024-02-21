import { useLoaderData, Link } from "react-router-dom"

export default function Career() {
    const careers = useLoaderData()

    return (
        <div>
            {careers.map(career => (
                <Link to='/' key={career.id}>
                    <div style={{background: "#2a2b2a"}}>
                        <p>{career.title}</p>
                        <p>Based in {career.location}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

//loader function
export const careerLoader = async () => {
    const response = await fetch("http://localhost:4000/careers")

    return response.json()
}