import { Link } from "react-router-dom";

interface props {
  href: string;
  name: string;
  class_name: string;
}

function Button({ href, name, class_name }: props) {
  return (
    <Link to={href} className={class_name}>
      {name}
    </Link>
  );
}

export default Button;
