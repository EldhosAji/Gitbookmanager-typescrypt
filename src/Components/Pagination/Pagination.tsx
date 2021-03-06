import React from "react";

interface Props {
  postsPerPage: number;
  Posts: number;
  paginate: (val: number) => void;
}

const Pagination: React.FC<Props> = ({ postsPerPage, Posts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(Posts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginateEvent = (number: number) => {
    paginate(number);
    return;
  };
  return (
    <div data-testid="Pagination">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginateEvent(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
