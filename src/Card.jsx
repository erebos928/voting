import { useState } from "react";
function Card({city})
{
const [positiveVotes,setPositiveVotes] = useState(city.positiveVotes);
return <div className="col-md-3 mb-4">
<div className="card">
<div className="card-header cursive-text">{city.name}</div>
<ul className="list-group list-group-flush">
    <li className="list-group-item"><i className="bi bi-plus-circle" style={{color:"green"}} onClick={()=>setPositiveVotes(city.positiveVotes++)}></i> {city.positiveVotes}</li>
    <li className="list-group-item"><i class="bi bi-dash-circle" style={{color:"red"}}></i> {city.negativeVotes}</li>
</ul>
</div>
</div>
}
export default Card;