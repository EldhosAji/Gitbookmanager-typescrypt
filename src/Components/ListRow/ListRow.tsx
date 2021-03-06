import React from "react";

interface Props {
  Title?: string | null;
  userName: string;
  repoLink: string;
  onClick: (e: string | any) => void;
  add?: boolean;
}

const ListRow: React.FC<Props> = ({
  Title,
  userName,
  repoLink,
  onClick,
  add,
}) => {
  const [title, setTitle] = React.useState("");
  const [state, setState] = React.useState(add);
  const titleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const eventHandler = () => {
    onClick({ userName, repoLink, Title: title, state });
    setState(add ? !state : false);
  };

  const trimmer = (str: String, l: number): String => {
    return str.length > 30 ? `${str.slice(0, l)}....` : str;
  };

  return (
    <div className="row" data-testid="ListRow">
      <div className="p-2 col-3">
        <p>{trimmer(userName.toString(), 20)}</p>
      </div>
      <div className="p-2 col-4">
        <a href={repoLink}>{trimmer(repoLink.toString(), 30)}</a>
      </div>
      <div className="p-2 col-4">
        {!add ? (
          <p>{Title}</p>
        ) : (
          <input
            name="search"
            className="form-control"
            type="text"
            placeholder="Give a title (Optional)"
            onChange={titleChange}
          />
        )}
      </div>
      <div className="p-2 col-1">
        <a
          role="button"
          data-toggle="tooltip"
          data-placement="right"
          title={state ? "Add to manager" : "Remove from manager"}
          style={{ textAlign: "right", flex: 1, marginLeft: 20 }}
          onClick={eventHandler}
          id="#onclick-test"
        >
          <i
            style={{ color: state ? "green" : "red" }}
            className={state ? "fas fa-plus-circle" : "fas fa-trash"}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default ListRow;
