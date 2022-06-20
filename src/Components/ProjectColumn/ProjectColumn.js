import './ProjectColumn.css'
import DataProjects from '../../data/data';
import React, { useEffect } from 'react';

const ProjectColumn = () => {

    const redirectionUrlForProject = (project) => {
        // console.log(project)
        const projectName = project
        //Supprime les espaces
        const nameClean = projectName.replace(/ /g, "")
        //Supprime les majuscules
        const nameCleanLower = nameClean.toLowerCase()
        document.location.href= document.location.origin + "/" + nameCleanLower; 
    }

    return (
        <div id='ProjectColumn'>
            <div className='ProjectColumn_Header'>
                <h1>Expériences</h1>
            </div>
            <ul className='ProjectColumn_List'>
                {DataProjects.map((project, index) => {
                    return <li className='ProjectColumn_List_project' key={index} onClick={() => redirectionUrlForProject(project.name)}>{project.name}</li>
                })}
            </ul>
        </div>
    )
}

export default ProjectColumn;