import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  ContainerUser,
  ContainerSearch,
  ContainerHome,
  HeadNavigatorHome,
  ContainerLogoandNav,
  ListOptions,
  ContainerUserAndSearch,
  Navbar,
  ContainerUserOptions,
} from "../component-for-home";
import NetflixLogo from "../../assets/img/Logonetflix.png";
import UseerIcon from "../../assets/img/AAAABX5_zNxCZOEGlSGykILrWVH75fVZe_-5H9HlAXtJoNs6AK8FTjyMG-llwgLJXGA8RUwxotwOOHMh3ovdrXFpq9-J4CBmFKA.png";
import { privateRoutes } from "../../routes";
import { FiSearch, FiUser } from "react-icons/fi";
import { useToggle } from "../../hooks";
import { CgBell } from "react-icons/cg";
import { MdOutlineArrowDropDown, MdEdit } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/state/user";

const LayoutHome = () => {
  const [toggle, setToggle] = useToggle();
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewMobileNav, setviewMobileNav] = useToggle();
  const [viewUserOptions, setViewUserOptions] = useToggle();
  const listNavRef = useRef()
  const dispatch = useDispatch();
  window.onscroll = () => {
    window.pageYOffset === 0 ? setIsScrolled(false) : setIsScrolled(true);
    return () => (window.onscroll = null);
  };

  const logoutUser = () => {
    dispatch(logout());
  };
  const handleClickMobileOne = () => {
    if (viewUserOptions) {
      setviewMobileNav(false);
    }
    setviewMobileNav(true)
  };
  const handleClickMobileTwo = () => {
    if (viewMobileNav) {
      setViewUserOptions(false);
    }
  
    setViewUserOptions(true);
  };
  return (
    <ContainerHome>
      <HeadNavigatorHome isScrolled={isScrolled}>
        <ContainerLogoandNav>
          <Link to={`/${privateRoutes.PRIVATE}`}>
            <img src={NetflixLogo} alt="Netflix Logo" />
          </Link>
          <Navbar viewMobileNav={viewMobileNav}>
            <ListOptions viewMobileNav={viewMobileNav}>
              <li>
                <Link to={privateRoutes.HOME} onClick={() => {setviewMobileNav(false)}}>Inicio</Link>
              </li>
              <li>
                <Link to={privateRoutes.TVSHOWS} onClick={() => {setviewMobileNav(false)}}>Series</Link>
              </li>
              <li>
                <Link to={privateRoutes.MOVIES} onClick={() => {setviewMobileNav(false)}}>Películas</Link>
              </li>
              <li>
                <Link to={privateRoutes.TRENDING} onClick={() => {setviewMobileNav(false)}}>Novedades populares</Link>
              </li>
              <li>Mi lista</li>
              <li>Explorar por idiomas</li>
            </ListOptions>
            <span onClick={handleClickMobileOne}>
              <MdOutlineArrowDropDown />
            </span>
          </Navbar>
        </ContainerLogoandNav>

        <ContainerUserAndSearch>
          <ContainerSearch toggle={toggle}>
            <input placeholder="Títulos, personas, géneros" />
            <FiSearch onClick={setToggle} />
          </ContainerSearch>
          <ContainerUser viewUserOptions={viewUserOptions}>
            <CgBell />
            <img src={UseerIcon} alt="icon user" onClick={handleClickMobileTwo} />
            <span>
              <MdOutlineArrowDropDown />
            </span>
            <ContainerUserOptions viewUserOptions={viewUserOptions}>
              <li>
                <MdEdit />
                Administrar perfiles
              </li>
              <li>
                <BiTransfer />
                Transferir perfil
              </li>
              <li>
                <FiUser />
                Cuenta
              </li>
              <li>
                <FaRegQuestionCircle />
                Centro de ayuda
              </li>
              <li>
                <button onClick={logoutUser}>Cerrar sesion en Netflix</button>
              </li>
            </ContainerUserOptions>
          </ContainerUser>
        </ContainerUserAndSearch>
      </HeadNavigatorHome>
      <Outlet></Outlet>
    </ContainerHome>
  );
};

export default LayoutHome;
