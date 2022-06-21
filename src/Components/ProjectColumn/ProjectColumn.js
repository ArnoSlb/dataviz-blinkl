import './ProjectColumn.css'
import DataProjects from '../../data/data';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectColumn = () => {

    const [projectSelected, setProjectSelected] = useState();

    const Params = useParams()
    
    useEffect(() => {
        console.log(Params.project)
        setProjectSelected(Params.project)

    },[Params])

    const redirectionUrlForProject = (project) => {
        // console.log(project)
        const projectName = project
        //Supprime les espaces
        const nameClean = projectName.replace(/ /g, "")
        //Supprime les majuscules
        const nameCleanLower = nameClean.toLowerCase()
        const newUrl = "/" + nameCleanLower;
        return( newUrl ) 
    }

    return (
        <div id='ProjectColumn'>
            <div className='ProjectColumn_Header'>
                <h1>Expériences</h1>
            </div>
            <ul className='ProjectColumn_List'>
                {DataProjects.map((project, index) => {
                    return <li className='ProjectColumn_List_project' key={index}>
                                <Link to={redirectionUrlForProject(project.name)}>{project.name}</Link> 
                            </li>
                })}
            </ul>
        </div>
    )
}

export default ProjectColumn