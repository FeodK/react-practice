const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

const getPagesArray = (totalPages) => {
  let pagesArray = [];
  for (let index = 0; index < totalPages; index++) {
    pagesArray.push(index + 1);
  }
  return pagesArray;
};

export { getPageCount, getPagesArray };
