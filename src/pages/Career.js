import { Link, useLoaderData } from "react-router-dom"
export default function Career() {
    //const {id} = useParams()
    const career = useLoaderData()
    return (
        
        <div>
            <div><Link to='/careers'><button>Careers</button></Link></div>
            <h2>{career.title}</h2>
            <p>{career.salary}</p>
            <p>{career.location}</p>
            <p>The job is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}

export const careerLoader = async({params}) => {
    const {id} = params

    const response = await fetch(`http://localhost:4000/careers/${id}`)
    if(!response.ok) {
        throw Error("Could not find page/career")
    }
    return response.json()
}