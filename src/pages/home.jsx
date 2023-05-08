import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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

    return (
        <div className="table" style={{display : "flex", alignItems : "center", justifyContent : "center", backgroundColor: "rgb(0,0,0,0.45)", marginTop: "50px"}}>
            <Table style={{color: "white", fontWeight: "bold"}}>
                <thead>
                    <tr>
                        <th>Pozicija</th>
                        <th>Tim</th>
                        <th>Pobeda</th>
                        <th>Poraza</th>
                        <th>Osvojenih setova</th>
                        <th>Izgubljenih setova</th>
                        <th>Poena</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row) => (
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