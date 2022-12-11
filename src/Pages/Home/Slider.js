import React from 'react';
import { FiDownload } from "react-icons/fi";

const Slider = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/1337668467/vector/modern-rainbow-glow-backlight-frame.jpg?s=612x612&w=0&k=20&c=xbuNlYJsMRHstRLRkJyAW_eDaYLE6sXjQoFFo1tmFSo=")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-secondary mb-5 text-5xl font-bold">Welcome to Tanvirs World</h1>
                    <p className="mb-5">I am professional web developer since 2021. I build some project with react.</p>
                    <a className="btn btn-outline btn-secondary" href="https://drive.google.com/u/0/uc?id=1qGYOxIvDjIMjjXroi_7fdG8sH6cSZb87&export=download">Resume <FiDownload className='text-2xl'></FiDownload></a>
                </div>
            </div>
        </div>
    );
};

export default Slider;