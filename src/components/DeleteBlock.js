const DeleteBlock = () => {

    const deleteTicket = () => {
        console.log("delete")
    }

    return(
        <div className="delete-block">
            <div className="delete-icon" onClick={deleteTicket}>x</div>
        </div>
    )
}

export default DeleteBlock