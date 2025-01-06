import { Link } from "react-router-dom";


function Description({message,linkText,link,variant}) {
  return (
    <p className={`description ${variant}`}>
      <span className="description-message">{message}</span>
      <Link to={link} className="description-link">{linkText}</Link>
    </p>
  );
}

export default Description;