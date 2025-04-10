import Card from './Card';
function Row({row}){
    const k = row;
    return (
    <div className="row">
     {   
        row.map(
            (city)=>
            <Card city={city} />
        )
    }
    </div>
    );
}
export default Row;