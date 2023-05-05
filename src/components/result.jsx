import TeamImage from "./teamImage";

const Result = ({row}) => {
    
    return(
        <div className="result">
            <span>
                <input type="date" value={row.date}></input>
                <TeamImage team={row.team1.team}/>
                <h5>{row.team1.name}</h5>
                <h5>{row.team2.name}</h5>
                <TeamImage team={row.team2.team}/>
            </span>
            
        </div>
    )
}

export default Result;