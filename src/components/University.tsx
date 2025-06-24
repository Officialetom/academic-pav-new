import { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

interface university {
  name: string;
  image: string;
}

interface universityList {
  data: university[];
}

function University({ data }: universityList) {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(12);
  const totalRecords = data.length;

  const currentData = data.slice(first, first + rows);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <>
      <div className="university-container">
        {currentData.map((uni, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={`${uni.image}`} alt="" />
            </div>
            <div className="card-text">
              <a href="">{uni.name}</a>
            </div>
          </div>
        ))}
      </div>

      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      />
    </>
  );
}

export default University;
