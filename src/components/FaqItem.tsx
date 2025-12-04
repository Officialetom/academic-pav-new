import { ReactNode, useState } from "react";

interface props {
  title: string;
  children: ReactNode;
}

const FaqItem = ({ title, children }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="accordion-arrow">{isOpen ? "+" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default FaqItem;
