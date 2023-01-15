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
            <a href="#" className="btn">
                Download Currículo
            </a>
        </aside>
    );
}

export default Sidebar;