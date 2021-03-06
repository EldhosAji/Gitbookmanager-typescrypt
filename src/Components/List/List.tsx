import React from "react";
import { ListRow, Pagination } from "../Index";
import { removeFromManager, addToManager, store } from "../../redux/Index";
import { useDispatch } from "react-redux";
import { Data } from "../Types/Type";
import ListRender from "./ListRender";

interface Props {
  data: Data[];
  add?: boolean;
}

export const handleEvent = (e: Data) => {
  //const dispatch = useDispatch();
  if (e.state === true) {
    store.dispatch(addToManager(e));
  } else {
    store.dispatch(removeFromManager(e));
  }
};

const List: React.FC<Props> = ({ data, add }: Props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div data-testid="listView">
      {/* {currentPosts != null ? (
        currentPosts.map((value: any, index: number) => (
          <li
            key={index}
            className="list-group-item border"
            data-testid="liView"
          >
            <ListRow
              Title={value.Title}
              userName={value.userName}
              repoLink={value.repoLink}
              onClick={handleEvent}
              add={add}
            />
          </li>
        ))
      ) : (
        <></>
      )} */}
      <ListRender currentPosts={currentPosts} handleEvent={handleEvent} add/>
      <Pagination
        postsPerPage={postsPerPage}
        Posts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default List;
