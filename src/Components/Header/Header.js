import './Header.css'

import BlinklstudioLogo from '../../assets/blinklstudio_logo.png'

const Header = () => {
    return(
        <div className="StatsScreen_Header">
            <h1 className='StatsScreen_Header_title'>Statistiques des projets Blinkl Studio</h1>
            <img className='BlinklstudioLogo' src={BlinklstudioLogo} alt="" />
        </div>
    )
}

export default Header