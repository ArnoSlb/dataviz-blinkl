import BottomArrow from '../../assets/Bottom_Arrow.png'
import "../StatsColumn/StatsColumn"

const StatColumnHome = () => {

    return(
        <div id='StatColumnHome'>
            <h1>Selectionnez un projet dans la colonne de gauche pour en voir les statistiques.</h1>
            <img className='StatColumnHome_arrow' src={BottomArrow} alt="" />
        </div>
    )
}

export default StatColumnHome