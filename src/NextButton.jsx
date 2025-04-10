function NextButton({page,setPage,maxPages}){
    const handleClick = () => {if (!isDisabled) 
        setPage(page + 1);
    };
    const isDisabled = page === maxPages; 
    return (
        <button type="button" className="btn btn-outline-primary" onClick={handleClick} disabled={isDisabled}>Next</button>
    )
}
export default NextButton;