import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../img/img1.png'
import img2 from '../../../img/img2.png'
import img3 from '../../../img/img3.png'

const Projects = () => {
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch('allProducts.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    return (
        <div className='mx-6 lg:mx-10'>
            <h2 className='text-4xl font-semibold text-secondary py-12'>My Recent Project</h2>
            <div className="grid lg:grid-cols-3 lg:gap-6">
                {
                    project?.map(data =>

                        <div key={data.id} className="my-8 transform transition duration-500 hover:scale-110 card w-96 bg-base-100 shadow-xl" >
                            <figure><img src={data.img1} alt="Shoes" /></figure>
                            <div data-aos="zoom-in-right" className="card-body">
                                <h2 className="card-title">
                                    {data.title}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{data.description.slice(0, 120)}...</p>
                                <div className="card-actions justify-end">
                                    <a href={data.liveLink} className="btn btn-outline btn-secondary">Live</a>
                                    <a href={data.github} className="btn btn-outline btn-secondary">Github</a>
                                    <Link to={`/projects/${data.id}`} className='btn btn-outline btn-secondary'>Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;