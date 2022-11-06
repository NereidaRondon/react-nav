import cat from "./images/githubcat.svg";
import lin from "./images/linkedin.svg";
import portfolio from "./images/folder.svg";
import email from "./images/envelope.svg";

export default function Socials(){
    
    return(
        <div className="socials-container">
            <div className="github logos">
                <a href="https://github.com/NereidaRondon"><img src={cat} alt="View my GitHub account"></img></a>
            </div>

            <div className="linkedin logos">
                <a href="https://www.linkedin.com/in/nereida-rondon-65403a22b/"><img src={lin} alt="Connect with me on Linkedin"></img></a>
            </div>

            <div className="portfolio logos">
                <a href="https://nereidarondon.com/index.html"><img src={portfolio} alt="View my Portfolio"></img></a>
            </div>

            <div className="email logos">
                <a href="mailto:Nereida.Rondon5@gmail.com"><img src={email} alt="Send me an email"></img></a>
            </div>
        </div>
    );
} 