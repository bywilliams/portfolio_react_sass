import { AiFillPhone, AiOutlineMail, AiFillEnvironment, AiFillHome } from "react-icons/ai";

import "../styles/components/informationcontainer.sass"

const InformationContainer = () =>{
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(47)999941132</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>wpaulista_sp@hotmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillHome id="home-icon" />
            <div>
                <h3>Web-site</h3>
                <a href="https://bywilliams.github.io/site/" target="_newblank"><p>bywilliams.github.io/site</p></a>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>São Paulo - SP</p>
            </div>
        </div>
    </section>
};

export default InformationContainer;