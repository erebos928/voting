import Sheet from './Sheet';
import Control from './Control';
import prepareRows from "./utils.";
import { useState } from "react";
function Grid({cities}){
    const [page,setPage] = useState(1);
    const result = prepareRows(cities,page);
    return (
    <>
       <Sheet rows={result.rows} />
       <Control page={page} setPage={setPage} maxPages={result.maxPages} />
    </>);
}
export default Grid;