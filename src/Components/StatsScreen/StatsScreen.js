import Header from '../Header/Header';
import ProjectColumn from '../ProjectColumn/ProjectColumn';
import StatColumn from '../StatsColumn/StatsColumn';
import { Routes, Route } from 'react-router-dom'

import './StatsScreen.css'

const StatsScreen = () => {

    return(
        <div id="StatsScreen">
            <Header/>
            <div className='split_columns'>
                <ProjectColumn/>
                <StatColumn/>   
            </div>
        </div>
    )
}

export default StatsScreen;