const Dialog = (props) => {

    function cancelHandler() {
        props.closeDialog()
    }
    function confirmHandler() {
        props.closeDialog()
    }

    return (
        <div className="dialog">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}
 
export default Dialog;