function listHeader({ listName }) {
  const signOut = () => {
    console.log("Signing out");
  };
  return (
    <div className="list-Header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button classname="signOut" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
}

export default listHeader;
