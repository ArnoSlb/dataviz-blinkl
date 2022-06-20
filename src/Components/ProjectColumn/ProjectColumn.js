import './ProjectColumn.css'
import DataProjects from '../../data/data';
import React, { useEffect } from 'react';

const ProjectColumn = () => {

    for (const project of DataProjects){
        console.log(project.name);
    }
    
    useEffect(() => {
        console.log(DataProjects)
      },[]);

    return (
        <div id='ProjectColumn'>
            <div className='ProjectColumn_Header'>
                <h1>Expériences</h1>
            </div>
            <ul className='ProjectColumn_List'>
                {DataProjects.map((project, index) => {
                    return <li className='ProjectColumn_List_project' key={index}>{project.name}</li>
                })}
            </ul>
        </div>
    )
}

export default ProjectColumn;