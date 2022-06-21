import Header from '../Header/Header';
import ProjectColumn from '../ProjectColumn/ProjectColumn';
import StatColumnHome from '../StatsColumnHome/StatsColumnHome';

import '../StatsScreen/StatsScreen.css'

const StatsScreenHome = () => {

    return(
        <div id="StatsScreen">
            <Header/>
            <div className='split_columns'>
                <ProjectColumn/>
                <StatColumnHome/>   
            </div>
        </div>
    )
}

export default StatsScreenHome;