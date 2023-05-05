import Result from "../components/result";


const data = [
    {team1: getName('fon'), team2: getName('fsfv'), set1: 2, set2: 0, date: '2022-11-19'},
    {team1: getName('etf'), team2: getName('medicinski'), set1: 2, set2: 1, date: '2022-11-20'},
    {team1: getName('stomatoloski'), team2: getName('ekof'), set1: 2, set2: 0, date: '2022-11-27.'},
    {team1: getName('atuss'), team2: getName('fsfv'), set1: 1, set2: 2, date: '2022-11-27'},
    {team1: getName('fon'), team2: getName('etf'), set1: 2, set2: 1, date: '2022-11-27'},
    {team1: getName('fsfv'), team2: getName('stomatoloski'), set1: 2, set2: 1, date: '2022-12-04'},
    {team1: getName('etf'), team2: getName('atuss'), set1: 2, set2: 0, date: '2022-12-04'},
    {team1: getName('ekof'), team2: getName('fsfv'), set1: 0, set2: 2, date: '2022-12-11'},
    {team1: getName('atuss'), team2: getName('medicinski'), set1: 2, set2: 0, date: '2022-12-11'},
    {team1: getName('fon'), team2: getName('atuss'), set1: 2, set2: 0, date: '2023-02-26'},
    {team1: getName('medicinski'), team2: getName('stomatoloski'), set1: 0, set2: 2, date: '2023-02-26'},
    {team1: getName('stomatoloski'), team2: getName('fon'), set1: 1, set2: 2, date: '2023-03-05'},
    {team1: getName('fsfv'), team2: getName('etf'), set1: 2, set2: 1, date: '2023-03-05'},
    {team1: getName('ekof'), team2: getName('medicinski'), set1: 0, set2: 2, date: '2023-03-05'},
    {team1: getName('stomatoloski'), team2: getName('atuss'), set1: 2, set2: 0, date: '2023-03-12'},
    {team1: getName('medicinski'), team2: getName('fsfv'), set1: 0, set2: 2, date: '2023-03-12'},
    {team1: getName('fon'), team2: getName('ekof'), set1: 2, set2: 0, date: '2023-03-12'},
    {team1: getName('atuss'), team2: getName('ekof'), set1: 2, set2: 0, date: '2023-03-19'},
    {team1: getName('stomatoloski'), team2: getName('etf'), set1: 0, set2: 2, date: '2023-03-26'},
    {team1: getName('fon'), team2: getName('medicinski'), set1: 2, set2: 0, date: '2023-03-26'},
    {team1: getName('etf'), team2: getName('ekof'), set1: 2, set2: 0, date: '2023-03-26'}
    
]

const Results = () => {
    return(
        <div className="results">
            {data.map((row) => (
                <Result row = {row}/>
            ))}
        </div>
    )
}

function getName(team) {
    let name = "ime";
    switch(team){
        case "atuss":
            name = 'ATUSS';
            //img = img + team + '.jpg';
            break;
        case "ekof":
            name = 'Ekonomski fakultet';
            //img = img + team + '.jpg';
            break;
        case "etf":
            name = 'Elektrotehnicki fakultet';
            //img = img + team + '.png';
            break;
        case "fon":
            name = 'Fakultet organizacionih nauka';
            //img = img + team + '.png';
            break;
        case "fsfv":
            name = 'Fakultet sporta i fizickog vaspitanja';
            //img = img + team + '.png';
            break;
        case 'medicinski':
            name = 'Medicinski fakultet';
            //img = img + team + '.png';
            break;
        case 'stomatoloski':
            name = 'Stomatoloski fakultet';
            //img = img + team + '.jpg';
            break;
        default:
            break;
    }
    return {team: team, name: name};
}

export default Results;