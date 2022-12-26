import Avatar from "../img/wil.jpeg";

import  "../styles/components/sidebar.sass";

const Sidebar = () =>{
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="William Silva" title="wil jpeg" />
            <p className="title">Desenvolvedor Front-End</p>
            <p>Redes Sociais</p>
            <p>Informações de contato</p>
            <a href="#" className="btn">
                Download CV
            </a>
        </aside>
    );
}

export default Sidebar;