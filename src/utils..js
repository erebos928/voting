function prepareRows(cities,pageNum){
  if (!Array.isArray(cities)) {
    return {error:'Cities prop is not an array.'};
  }
  const pageSize = 8;
  const maxPages = Math.ceil(cities.length / pageSize);
  const rowSize = 4;
  const startIndex = (pageNum - 1) * pageSize;
  const page = cities.slice(startIndex,startIndex + pageSize );
  const rows = [];
  const rowCount = Math.ceil(page.length / rowSize);
  for (let i = 0; i < rowCount; i++ ){
    rows[i] = [];
    for (let j = 0 ; j < rowSize &&  j < page.length ; j++ )
      rows[i][j] = page[i * rowSize + j];
  }
return {rows:rows,maxPages:maxPages};    
}
//module.exports={prepareRows};
export default prepareRows;