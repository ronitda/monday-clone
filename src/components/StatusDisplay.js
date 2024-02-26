const StatusDisplay = ({status}) => {
const getColor = () => {
    let color
    switch (status) {
      case "done": color = "green"
      break

      case "working on it": color = "Orange"
      break 

      case "stuck": color = "red"
      break

    }
    return color
}

return(
    <div className="status-display" style={{ backgroundColor: getColor(status)}}>
     {status}
    </div>
)

}

export default StatusDisplay