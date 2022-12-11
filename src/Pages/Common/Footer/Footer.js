import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import img from '../../Common/Navbar/navPhoto.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-white">
            <div>
                <img className='w-32 rounded-full' src={img} alt="" />
                <p className="font-bold">
                    DSUE Industries Ltd. <br />developertanvir2019@gamil.com
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4 text-4xl">
                    <a target='_blank' href="https://github.com/developertanvir2019" rel="noreferrer" ><FaGithub></FaGithub></a>
                    <a target="_blank" href='https://web.facebook.com/nibir.tanvir.7/' rel="noreferrer"><FaFacebook></FaFacebook></a>
                    <a target='_blank' href='https://www.linkedin.com/in/tanvir2022/' rel="noreferrer"><FaLinkedin></FaLinkedin></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;