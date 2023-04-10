
const data = [
    {team1: getImgAndName('fon'), team2: getImgAndName('fsfv'), set1: 2, set2: 0, date: '19.11.2022.'},
    {team1: getImgAndName('etf'), team2: getImgAndName('medicinski'), set1: 2, set2: 1, date: '20.11.2022.'},
    {team1: getImgAndName('stomatoloski'), team2: getImgAndName('ekof'), set1: 2, set2: 0, date: '27.11.2022.'},
    {team1: getImgAndName('atuss'), team2: getImgAndName('fsfv'), set1: 1, set2: 2, date: '27.11.2022.'},
    {team1: getImgAndName('fon'), team2: getImgAndName('etf'), set1: 2, set2: 1, date: '27.11.2022.'},
    {team1: getImgAndName('fsfv'), team2: getImgAndName('stomatoloski'), set1: 2, set2: 1, date: '04.12.2022.'},
    {team1: getImgAndName('etf'), team2: getImgAndName('atuss'), set1: 2, set2: 0, date: '04.12.2022.'},
    {team1: getImgAndName('ekof'), team2: getImgAndName('fsfv'), set1: 0, set2: 2, date: '11.12.2022.'},
    {team1: getImgAndName('atuss'), team2: getImgAndName('medicinski'), set1: 2, set2: 0, date: '11.12.2022.'},
    {team1: getImgAndName('fon'), team2: getImgAndName('atuss'), set1: 2, set2: 0, date: '26.02.2023.'},
    {team1: getImgAndName('medicinski'), team2: getImgAndName('stomatoloski'), set1: 0, set2: 2, date: '26.02.2023.'},
    {team1: getImgAndName('stomatoloski'), team2: getImgAndName('fon'), set1: 1, set2: 2, date: '05.03.2023.'},
    {team1: getImgAndName('fsfv'), team2: getImgAndName('etf'), set1: 2, set2: 1, date: '05.03.2023.'},
    {team1: getImgAndName('ekof'), team2: getImgAndName('medicinski'), set1: 0, set2: 2, date: '05.03.2023.'},
    {team1: getImgAndName('stomatoloski'), team2: getImgAndName('atuss'), set1: 2, set2: 0, date: '12.03.2023.'},
    {team1: getImgAndName('medicinski'), team2: getImgAndName('fsfv'), set1: 0, set2: 2, date: '12.03.2023.'},
    {team1: getImgAndName('fon'), team2: getImgAndName('ekof'), set1: 2, set2: 0, date: '12.03.2023.'},
    {team1: getImgAndName('atuss'), team2: getImgAndName('ekof'), set1: 2, set2: 0, date: '19.03.2023.'},
    {team1: getImgAndName('stomatoloski'), team2: getImgAndName('etf'), set1: 0, set2: 2, date: '26.03.2023.'},
    {team1: getImgAndName('fon'), team2: getImgAndName('medicinski'), set1: 2, set2: 0, date: '26.03.2023.'},
    {team1: getImgAndName('etf'), team2: getImgAndName('ekof'), set1: 2, set2: 0, date: '26.03.2023.'}
    
]

const Results = () => {
    return(
        <div className="results">
            
        </div>
    )
}

function getImgAndName(team) {
    var name;
    var img = 'img/';
    switch(team){
        case "atuss":
            name = 'ATUSS';
            img = img + team + '.jpg';
            break;
        case "ekof":
            name = 'Ekonomski fakultet';
            img = img + team + '.jpg';
            break;
        case "etf":
            name = 'Elektrotehnicki fakultet';
            img = img + team + '.png';
            break;
        case "fon":
            name = 'Fakultet organizacionih nauka';
            img = img + team + '.png';
            break;
        case "fsfv":
            name = 'Fakultet sporta i fizickog vaspitanja';
            img = img + team + '.png';
            break;
        case 'medicinski':
            name = 'Medicinski fakultet';
            img = img + team + '.png';
            break;
        case 'stomatoloski':
            name = 'Stomatoloski fakultet';
            img = img + team + '.jpg';
    }
    return {name: name, img: img};
}

export default Results;