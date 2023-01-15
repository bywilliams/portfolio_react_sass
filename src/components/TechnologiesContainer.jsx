import '../styles/components/technologiescontainer.sass'

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiPhp,
    DiMysql,
    DiReact
} from 'react-icons/di';

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5/> },
    { id: "css", name: "CSS3", icon: <DiCss3/> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge/> },
    { id: "php", name: "PHP", icon: <DiPhp/> },
    { id: "mysql", name: "MySQL", icon: <DiMysql/> },
    { id: "react", name: "React", icon: <DiReact/> },
];

const TechnologiesContainer = () => { 
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => ( 
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technolgy-info">
                            <h3>{tech.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;