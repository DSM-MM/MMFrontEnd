import { Link } from "react-router-dom";
import * as S from "./styles";
import {
  ProfileLogo,
  MentoMatch,
  Messenger,
  FindProject,
  MMMainLogo,
} from "../../../assets/index";

const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.MenuWrapper>
          <Link className="profile" to="/profile">
            <img src={ProfileLogo} alt="Profile Logo" />
          </Link>
          <Link className="menu" to="/mento">
            <img src={MentoMatch} alt="Mento Match Logo" />
          </Link>
          <Link className="menu" to="/message">
            <img src={Messenger} alt="Messenger" />
          </Link>
          <Link className="menu" to="/findProject">
            <img src={FindProject} alt="Find Project" />
          </Link>
        </S.MenuWrapper>
        <img className="mainLogo" src={MMMainLogo} alt="MM Main Logo" />
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
