import SocialNetwork from "./SocialNetworks";
import Avatar from "../img/wil.jpeg";

import  "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () =>{
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="William Silva" title="wil jpeg" />
            <p className="title">Desenvolvedor Front-End</p>
            <SocialNetwork />
            <InformationContainer/>
            <a href="https://drive.google.com/file/d/11vn2KSycbX_GSOc9NrhOi8NN-WWDEYCv/view?usp=sharing" target="_newblank" className="btn">
                Download Currículo
            </a>
        </aside>
    );
}

export default Sidebar;