import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
function Control({page,setPage,maxPages}){
    return ( 
    <div className="d-flex justify-content-between">
    <PreviousButton page={page} setPage={setPage} maxPages={maxPages} />
    <span>Page {page} of {maxPages}</span>
    <NextButton page={page} setPage={setPage} maxPages={maxPages} />
    </div>);
}
export default Control;