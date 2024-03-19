import "./Badges.css"
import data from "../../json/logements.json"

const Badges = (id) => {

    const badge = data.find(el => el.id === id.id);
    

return(
<div className="badges">

{badge.tags.map((Element,index) => (
    <span key={index} className="badge">{Element}</span>
    ))}

</div>



)
}
export default Badges;