import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
    const [singleProduct, setSingleProduct] = useState({})
    console.log(singleProduct);
    const routeId = useParams()
    console.log(routeId.id);
    // const data = await 

    return (
        <div>
            <h2 className='text-6xl'>data is hare</h2>
        </div>
    );
};

export default SingleProject;