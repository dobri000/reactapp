import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const data = [
    {position:1, team:"Fakultet organizacionih nauka", wins:6, losses:0, points:16, setsWon:12, setsLost:2},
    {position:2, team:"Elektrotehnicki fakultet", wins:4, losses:2, points:13, setsWon:10, setsLost:5},
    {position:3, team:"Fakultet sporta i fizickog vaspitanja", wins:5, losses:1, points:12, setsWon:10, setsLost:5},
    {position:4, team:"Stomatoloski fakultet", wins:3, losses:3, points:11, setsWon:8, setsLost:6},
    {position:5, team:"ATUSS", wins:2, losses:4, points:7, setsWon:5, setsLost:8},
    {position:6, team:"Medicinski fakultet", wins:1, losses:5, points:4, setsWon:3, setsLost:10},
    {position:7, team:"Ekonomski fakultet", wins:0, losses:6, points:0, setsWon:0, setsLost:12}
  ];

const Home = () => {

    const [displayedData, setDisplayedData] = useState(data);
    const [positionSorted, setPositionSorted] = useState(true);
    const [winsSorted, setWinsSorted] = useState(true);
    const [lossesSorted, setLossesSorted] = useState(true);
    const [setsWonSorted, setSetsWonSorted] = useState(true);
    const [setsLostSorted, setSetsLostSorted] = useState(true);
    const [pointsSorted, setPointsSorted] = useState(true);
    const sortPosition = ()=> {
        let newData;
        if(positionSorted){
            newData = data.sort((a,b) =>  (a.position-b.position));
            setDisplayedData(newData);
            setPositionSorted(false);
        } else {
            newData = data.sort((a,b) =>  (b.position-a.position));
            setDisplayedData(newData);
            setPositionSorted(true);
        }
    }
    const sortWins = ()=> {
        let newData;
        if(winsSorted){
            newData = data.sort((a,b) =>  (a.wins-b.wins));
            setDisplayedData(newData);
            setWinsSorted(false);
        } else {
            newData = data.sort((a,b) =>  (b.wins-a.wins));
            setDisplayedData(newData);
            setWinsSorted(true);
        }
    }
    const sortLosses = ()=> {
        let newData;
        if(lossesSorted){
            newData = data.sort((a,b) =>  (a.losses-b.losses));
            setDisplayedData(newData);
            setLossesSorted(false);
        } else {
            newData = data.sort((a,b) =>  (b.losses-a.losses));
            setDisplayedData(newData);
            setLossesSorted(true);
        }
    }
    const sortSetsWon = ()=> {
        let newData;
        if(setsWonSorted){
            newData = data.sort((a,b) =>  (a.setsWon-b.setsWon));
            setDisplayedData(newData);
            setSetsWonSorted(false);
        } else {
            newData = data.sort((a,b) =>  (b.setsWon-a.setsWon));
            setDisplayedData(newData);
            setSetsWonSorted(true);
        }
    }
    const sortSetsLost = ()=> {
        let newData;
        if(setsLostSorted){
            newData = data.sort((a,b) =>  (a.setsLost-b.setsLost));
            setDisplayedData(newData);
            setSetsLostSorted(false);
        } else {
            newData = data.sort((a,b) =>  (b.setsLost-a.setsLost));
            setDisplayedData(newData);
            setSetsLostSorted(true);
        }
    }
    const sortPoints = ()=> {
        let newData;
        if(pointsSorted){
            newData = data.sort((a,b) =>  (a.points-b.points));
            setDisplayedData(newData);
            setPointsSorted(false);
        } else {
            newData = data.sort((a,b) =>  (b.points-a.points));
            setDisplayedData(newData);
            setPointsSorted(true);
        }
    }

    return (
        <div className="table" style={{display : "flex", alignItems : "center", justifyContent : "center", backgroundColor: "rgb(0,0,0,0.45)", marginTop: "50px"}}>
            <Table style={{color: "white", fontWeight: "bold"}}>
                <thead>
                    <tr>
                        <th onClick={sortPosition}>Pozicija</th>
                        <th id="headTim">Tim</th>
                        <th onClick={sortWins}>Pobeda</th>
                        <th onClick={sortLosses}>Poraza</th>
                        <th onClick={sortSetsWon}>Osvojenih setova</th>
                        <th onClick={sortSetsLost}>Izgubljenih setova</th>
                        <th onClick={sortPoints}>Poena</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        displayedData.map((row) => (
                            <tr>
                                <td>{row.position}</td>
                                <td>{row.team}</td>
                                <td>{row.wins}</td>
                                <td>{row.losses}</td>
                                <td>{row.setsWon}</td>
                                <td>{row.setsLost}</td>
                                <td>{row.points}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default Home;