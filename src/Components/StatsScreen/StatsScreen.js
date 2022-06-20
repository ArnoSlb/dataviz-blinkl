import Header from '../Header/Header';
import ProjectColumn from '../ProjectColumn/ProjectColumn';

import './StatsScreen.css'

const StatsScreen = () => {


    return(
        <div id="StatsScreen">
            <Header/>
            <div className='split_columns'>
                <ProjectColumn/>
            </div>
        </div>
    )
}

export default StatsScreen;