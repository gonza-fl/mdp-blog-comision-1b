export const fetchApi = (url, setChangePage, setCharacters) => {
  fetch(url)
    .then((res) => res.json())
    .then(({ info: { next, prev, pages }, results }) => {
      setChangePage({ next, prev, pages });
      setCharacters(results);
    });
};
