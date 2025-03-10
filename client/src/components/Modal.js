// what the fuck is a modal
// this function is an overlay over the existing todolist.
//

function Modal() {
  const mode = 'edit'
  const handleChange = 'boobs'
  return (
    <div className="overlay">
      <div className="modal">
        <div>
          <h3>Let's update {mode} task</h3>
          <button>X</button>
        </div>

        <form>
          <input
            required
            maxlength={30}
            placeholder="Task dalde bhai"
            name="TITLE"
            value={""}
            onChange={handleChange}
          />
          <br />
          <input
            required
            tupe="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={handleChange}
          />
          <input className = {mode} type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
