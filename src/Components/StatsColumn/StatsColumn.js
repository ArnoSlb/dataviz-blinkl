import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import DataProjects from '../../data/data'
 
import "./StatsColumn.css"

const StatColumn = () => {

    const [projectSelected, setProjectSelected] = useState();
    const [projectGraphs, setProjectGraphs] = useState(DataProjects[0].graphs);

    const Params = useParams()
    
    useEffect(() => {

        const getGraphs = (urlInBrowser) => {
            // console.log(Params.project, DataProjects)
            //On filtre le tableau de DataProjects et on cherche dans un sous-tableau avec une catégorie "url" qui est égale au parametre inscrit dans l'adress url du navigateur clieny
            const projectToShow = DataProjects.filter(Project => Project.url === urlInBrowser)
            // console.log(projectToShow)
            //On met dans une variable le tableau des graphs à montrer coresspond au bon projet
            let graphsToShow = projectToShow[0].graphs
            // 
            //On donne cette nouvelle valeur au state projectGraphs
            setProjectGraphs(graphsToShow)
        }

        setProjectSelected(Params.project)
        getGraphs(Params.project)
    },[Params])

    return(
        <div id='StatColumn'>
            <div className='StatColumn_header'>
                <h1>{projectSelected}</h1>   
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
            </div>
        </div>
    )
}

export default StatColumn