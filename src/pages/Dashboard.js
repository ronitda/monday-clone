import TicketsCard from "../components/TicketsCard"

const Dashboard = () => {

    const tickets = [
        {
            category: "q1 2022",
            color: "red",
            title: "NFT",
            owner: "John",
            status: "working on it",
            priority: 2,
            progress: 80,
            
        },
        {
            category: "q2 2022",
            color: "red",
            title: "NFT",
            owner: "jorge",
            status: "done",
            priority: 3,
            progress: 20,
            
        },
        {
            category: "q3 2022",
            color: "red",
            title: "NFT",
            owner: "will",
            status: "stuck",
            priority: 5,
            progress: 40,
            
        }
    ]

    const uniqueCategories = [...new Set(tickets?.map(({category}) => category))]


    console.log(uniqueCategories)

    return(
<div className="dashboard">
    <h1>My project</h1>
    <div className="ticket-container">
         {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
                <h3>{uniqueCategory}</h3>
                   {tickets.filter(ticket => ticket.category === uniqueCategory)
                   .map((filteredTickets, _index) => (
                    <TicketsCard
                    id={_index}
                    color={filteredTickets.color}
                    ticket={filteredTickets}
                    />
                   ))
                   }

            </div>
         ))}
    </div>

</div>
    )

}

export default Dashboard