import Modal from "./Modal";

function listHeader({ listName }) {
  const signOut = () => {
    console.log("Signing out");
  };
  return (
    <div className="list-Header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button classname="signOut">SIGN OUT</button>
      </div>
      <Modal />
    </div>
  );
}

export default listHeader;
