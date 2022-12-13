import { useState, useEffect } from "react";
import { useTokenAPI } from "../hooks/useTokenAPI";
import { useParams, useNavigate } from "react-router-dom";
import EditLink from "../components/EditLink";
import { useAuth } from "../hooks/useAuth";
import { useAPI } from "../hooks/useAPI";
import { Link } from "react-router-dom";

const Editor = () => {
  const { username } = useParams();
  const { auth } = useAuth();
  const api = useAPI();
  const tokenApi = useTokenAPI();
  const [deletedIds, setDeletedIds] = useState([]);
  const [myLinks, setMyLinks] = useState([]);
  const navigate = useNavigate();
  const [saveBtnDisplay, setSaveBtnDisplay] = useState("Save all");

  const cardRoute = `card/${username}`;

  // restrict access to authorized user
  useEffect(() => {
    if (username != auth.username) return navigate("/", { replace: true });
  }, []);

  // get initial state
  useEffect(() => {
    api.get(cardRoute).then((res) => {
      if (!res.data.links) return;
      setMyLinks(
        res.data.links.map((link) => {
          return { id: link.id, url: link.url, linkType: link.linkType };
        })
      );
    });
  }, []);

  function handleAddLink() {
    setSaveBtnDisplay("Save all");
    setMyLinks((oldLinks) => [...oldLinks, {}]);
  }

  function handleDeleteLink(idx) {
    setSaveBtnDisplay("Save all");
    setMyLinks((oldLinks) =>
      oldLinks.filter((link, i) => {
        if (i == idx) {
          if (link.id != null) setDeletedIds((oldIds) => [...oldIds, link.id]);
          return false;
        }
        return true;
      })
    );
  }

  function handleUrlChanged(idx, val) {
    setSaveBtnDisplay("Save all");
    setMyLinks((oldLinks) =>
      oldLinks.map((link, i) => {
        if (i == idx) link.url = val;

        return link;
      })
    );
  }

  function handleTypeChanged(idx, val) {
    setSaveBtnDisplay("Save all");
    setMyLinks((oldLinks) =>
      oldLinks.map((link, i) => {
        if (i == idx) link.linkType = val;

        return link;
      })
    );
  }

  function handleSave() {
    // delete links
    if (deletedIds.length > 0)
      tokenApi
        .post(`${cardRoute}/delete`, {
          ids: deletedIds,
        })
        .then((res) => setSaveBtnDisplay("Saved!"))
        .catch((err) => console.log(err));

    // add/update links
    tokenApi
      .post(cardRoute, {
        links: myLinks,
      })
      .then((res) => setSaveBtnDisplay("Saved!"))
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="bg-no-repeat bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url("https://i.postimg.cc/rsd8FzcJ/hd-wallpaper-g3ef56cacf-1920.jpg")`,
      }}
    >
      <div className="flex justify-evenly pt-10">
        <div className="card w-146 bg-base-100 shadow-xl shadow-info-content bg-secondary bg-opacity-90">
          {/* TODO: Implement user name here */}
          <h2 className="card-title flex justify-center mt-8 text-2xl">
            @{username}
          </h2>
          <div className="card-body">
            {/* TODO: IMPLEMENT COMPONENT FOR ADD LINK */}
            {myLinks.map((link, i) => (
              <EditLink
                key={i}
                idx={i}
                linkType={link.linkType}
                url={link.url}
                handleDeleteLink={handleDeleteLink}
                handleUrlChanged={handleUrlChanged}
                handleTypeChanged={handleTypeChanged}
              />
            ))}
            {/* TODO: IMPLEMENT BUTTONS HERE */}
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleAddLink}>
                Add Link
              </button>
              <button className="btn btn-secondary" onClick={handleSave}>
                {saveBtnDisplay}
              </button>
              <Link to="/directory">
                <button className="btn btn-primary">Directory</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Editor;
