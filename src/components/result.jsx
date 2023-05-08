import TeamImage from "./teamImage";

const Result = ({row}) => {
    
    return(
        <div className="result" style={{textAlign: "center", backgroundColor: "rgb(0,0,0,0.35)", color: "white", margin: "20px", borderRadius: "10em", position: "relative"}}>
            <div>
                <input type="date" value={row.date} readOnly style={{border: "none", background: "none", color:"white", textAlign: "center"}}></input>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "20% 20% 20% 20%", alignContent: "center", justifyContent: "center"}}>
                <TeamImage team={row.team1.team}/>
                <h5>{row.team1.name}</h5>
                <h5>{row.team2.name}</h5>
                <TeamImage team={row.team2.team}/>
            </div>
            <div style={{marginTop: "-120px", fontSize: "90px"}}>
                {row.set1} : {row.set2}
            </div>
        </div>
    )
}

export default Result;