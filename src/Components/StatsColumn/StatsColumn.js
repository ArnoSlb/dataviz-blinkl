import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import DataProjects from '../../data/data'
 
import "./StatsColumn.css"

const StatColumn = () => {

    const [projectSelected, setProjectSelected] = useState();

    const Params = useParams()
    
    useEffect(() => {
        console.log(Params.project)
        setProjectSelected(Params.project)
    },[Params])

    return(
        <div id='StatColumn'>
            <div className='StatColumn_header'>
                <h1>{projectSelected}</h1>
            </div>
        </div>
    )
}

export default StatColumn