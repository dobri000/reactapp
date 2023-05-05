import fon from "../img/fon.png";
import ekof from "../img/ekof.jpg";
import atuss from "../img/atuss.jpg";
import etf from "../img/etf.png";
import fsfv from "../img/fsfv.png";
import medicinski from "../img/medicinski.png";
import stomatoloski from "../img/stomatoloski.jpg";

const TeamImage = ({team}) => {
    var img1;
    switch(team){
        case "atuss":
            img1 = <img src={atuss}></img>
            break;
        case "ekof":
            img1 = <img src={ekof}></img>
            break;
        case "etf":
            img1 = <img src={etf}></img>
            break;
        case "fon":
            img1 = <img src={fon}></img>
            break;
        case "fsfv":
            img1 = <img src={fsfv}></img>
            break;
        case 'medicinski':
            img1 = <img src={medicinski}></img>
            break;
        case 'stomatoloski':
            img1 = <img src={stomatoloski}></img>
            break;
        default:
            break;
    }

    return img1;
}

export default TeamImage;