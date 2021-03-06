import React from "react";
import { ListRow } from "../Index";
import { Data } from "../Types/Type";

interface LProps {
  currentPosts: Data[];
  handleEvent: (e: string | any) => void;
  add?: boolean;
}
function ListRender({ currentPosts, handleEvent, add }: LProps) {
  const handleEventList = (e: string | any) => {
    handleEvent(e);
  };

  if (currentPosts.length > 0)
    return (
      <div>
        {currentPosts.map((value: any, index: number) => (
          <li
            key={index}
            className="list-group-item border"
            data-testid="liView"
          >
            <ListRow
              Title={value.Title}
              userName={value.userName}
              repoLink={value.repoLink}
              onClick={handleEventList}
              add={add}
            />
          </li>
        ))}
      </div>
    );
  return <div data-testid="null-obj" />;
}

export default ListRender;
