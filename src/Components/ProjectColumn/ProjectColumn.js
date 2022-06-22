import './ProjectColumn.css'
import DataProjects from '../../data/data';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectColumn = () => {

    const [projectSelected, setProjectSelected] = useState();

    const Params = useParams()
    
    useEffect(() => {
        setProjectSelected(Params.project)
        
        let projectsList = document.querySelectorAll('.ProjectColumn_List_project')
        projectsList.forEach(element => element.classList.remove('ProjectColumn_selected'))

        let elementSelected = document.getElementById(Params.project)
        if(elementSelected != null){
            elementSelected.classList.add('ProjectColumn_selected')
        }
        

    },[Params])

    const getCleanName = (project) => {
        // console.log(project)
        const projectName = project
        //Supprime les espaces
        const nameClean = projectName.replace(/ /g, "")
        //Supprime les majuscules
        const nameCleanLower = nameClean.toLowerCase()
        return(nameCleanLower)
    }


    const redirectionUrlForProject = (project) => {
        const newUrl = "/blinklstudio_stats/" + getCleanName(project);
        return(  newUrl ) 
    }

    return (
        <div id='ProjectColumn'>
            <div className='ProjectColumn_Header'>
                <h1>Expériences</h1>
            </div>
            <ul className='ProjectColumn_List'>
                {DataProjects.map((project, index) => {
                    return <div key={index}>
                                <Link to={redirectionUrlForProject(project.name)}>
                                    <li className='ProjectColumn_List_project' id={getCleanName(project.name)}>{project.name}</li>
                                </Link>
                            </div>        
                })}
            </ul>
        </div>
    )
}

export default ProjectColumn