import { Link } from "react-router-dom";


const Anchor = ({to, className, children}) => {

    return <Link to={to} className={`button ${className}`}>{children}</Link>
}


export default Anchor;