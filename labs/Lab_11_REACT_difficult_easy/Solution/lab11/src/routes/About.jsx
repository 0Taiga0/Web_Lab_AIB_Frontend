import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
    const { day, year, month } = useParams();
    return (
        <div>
            {console.log(day, year, month)}
        </div>
    )
}

export default About;