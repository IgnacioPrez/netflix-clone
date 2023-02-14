import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ContainerHome, HeadNavigatorHome ,ContainerLogoandNav,ListOptions} from '../component-for-home'
import  NetflixLogo from "../../assets/img/Logonetflix.png"
import { privateRoutes } from '../../routes'
const LayoutHome = () => {
  return (
    <ContainerHome>
        <HeadNavigatorHome>
            <ContainerLogoandNav>
                <Link to={`/${privateRoutes.PRIVATE}`}>
                    <img src={NetflixLogo} alt="Netflix Logo"/>
                </Link>
            <nav>
                <ListOptions>
                    <li>Inicio</li>
                    <li>Serie</li>
                    <li>Peliculas</li>
                    <li>Novedades populares</li>
                </ListOptions>
            </nav>
            </ContainerLogoandNav>

            <div>
                <div>
                    <input/>
                    <img/>
                </div>
                <div>
                    <img/>
                    <span></span>
                </div>
            </div>
        </HeadNavigatorHome>
        <Outlet></Outlet>
    </ContainerHome>
  )
}

export default LayoutHome