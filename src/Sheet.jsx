
import Row from "./Row";

function Sheet({rows}){
    return (
    <>
        {
            rows.map((row)=>
                <Row row={row} />)
        }
    </>);
}
export default Sheet;