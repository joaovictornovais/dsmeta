import logo from '../../assets/imgs/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://www.twitter.com/harvtheboy" target="__blank"><span>@harvtheboy</span></a>
                    </p>
            </div>
        </header>
    )
}

export default Header
