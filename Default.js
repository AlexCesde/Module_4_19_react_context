// Routing
import { Link } from 'react-router-dom';

// Context
import { useContext } from 'react';
import { OurContex } from './Components/OurContext';

const Default = () => {
    const context = useContext(OurContex);

    return (
        <>
            | <Link to="/">Home</Link> |
            | <Link to="/custom/hello">Custom</Link> |
            | <Link to="/form">Form</Link> |
            | <Link to="/location">Location</Link> |
            | <Link to="/">{context.title}</Link> |
        </>
    );
};

export default Default;
