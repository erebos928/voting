function PreviousButton({page,setPage,maxPages}){
    const isDisabled = page === 1; 
    const handleClick = () => {if (!isDisabled) 
        setPage(page - 1);
    };
    return (
        <button type="button" onClick={handleClick} className="btn btn-outline-primary" disabled={isDisabled}>Previous</button>
    )
}
export default PreviousButton;