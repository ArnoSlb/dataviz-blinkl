import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import DataProjects from '../../data/data'
 
import "./StatsColumn.css"

const StatColumn = () => {

    const [projectSelected, setProjectSelected] = useState(DataProjects);
    const [projectGraphs, setProjectGraphs] = useState(DataProjects[0].graphs);
    const [projectMaps, setProjectMaps] = useState(DataProjects[0].maps);

    const Params = useParams()


    //Animate Number Spin
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
    }
    
    useEffect(() => {

        const getGraphs = (urlInBrowser) => {
            // console.log(Params.project, DataProjects)
            //On filtre le tableau de DataProjects et on cherche dans un sous-tableau avec une catégorie "url" qui est égale au parametre inscrit dans l'adress url du navigateur clieny
            let projectToShow = DataProjects.filter(Project => Project.url === urlInBrowser)
            // console.log(projectToShow)
            //On met dans une variable le tableau des graphs à montrer coresspond au bon projet
            let graphsToShow = projectToShow[0].graphs
            let mapsToShow = projectToShow[0].maps
            // 
            //On donne cette nouvelle valeur au state projectGraphs
            setProjectGraphs(graphsToShow)
            setProjectMaps(mapsToShow)
        }

        console.log(Params)
        const projectData = DataProjects.filter(Project => Project.url === Params.project)
        const projectScansNb = projectData[0].scans
        const projectUsersNb = projectData[0].users
        setProjectSelected(projectData)
        getGraphs(Params.project)
          
        const valueUsers = document.getElementById("valueUsers");
        animateValue(valueUsers, 0, projectUsersNb, 2000);
        const valueScans = document.getElementById("valueScans");
        animateValue(valueScans, 0, projectScansNb, 2000);
    },[Params])

    return(
        <div id='StatColumn'>
            <div className='StatColumn_header'>
                <div className='StatBox'>
                    <p>Nom du projet</p>
                    <h1>{projectSelected[0].name}</h1>
                </div>
                <div className='StatBox'>
                    <p>Période du projet</p>
                    <h1>{projectSelected[0].year}</h1>
                </div>
                <div className='StatBox'>
                    <p>Nbre d'utilisateurs</p>
                    <h1 id='valueUsers'>{projectSelected[0].users}</h1>
                </div>
                <div className='StatBox'>
                    <p>Nbre de scans</p>
                    <h1 id='valueScans'>{projectSelected[0].scans}</h1>
                </div>
            </div>
            <div className='Graphs_container'>
                {projectGraphs.map((project, index) => {
                    // console.log(project.src)
                        return <iframe 
                                    key={index} 
                                    title='Interactive or visual content' 
                                    src={project.src}
                                    frameBorder='0' 
                                    scrolling='no' 
                                    style={{width: "45%", height: "300px", borderRadius: "20px"}}>
                               </iframe>        
                    })}
                {projectMaps.map((project, index) => {
                        return <iframe 
                                    key={index} 
                                    title='Interactive or visual content' 
                                    src={project.src}
                                    frameBorder='0' 
                                    scrolling='no' 
                                    style={{width: "65%", height: "60vh", borderRadius: "20px"}}>
                               </iframe>        
                    })}
            </div>
        </div>
    )
}

export default StatColumn