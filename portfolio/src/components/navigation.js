import { AiOutlineGithub, AiOutlineTwitter, FaLinkedinIn } from "react-icons/all"
import logo from "../images/logo.png"

const Navigation = () => {
    return (
        <header>
            <div className="top-nav">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <ul>
                        <li>
                            <a href="http://github.com/elineka">
                                <AiOutlineGithub className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com">
                                <AiOutlineTwitter className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="http://linkedin.com/in/">
                               <FaLinkedinIn className="icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-nav">
                <nav>
                    <ul>
                        <li>
                            <a href="#works">Works</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navigation
