import Pagination from 'react-bootstrap/Pagination';
import { fetchApi } from '../utils/fetchApi';

const FIRST_PAGE_URL = 'https://rickandmortyapi.com/api/character?page=1';

function CPagination({ setCharacters, changePage, setChangePage }) {
  const { next: next_url, prev: prev_url, pages: pages_amount } = changePage;

  const LAST_PAGE_URL = `https://rickandmortyapi.com/api/character?page=${pages_amount}`;

  const handleClick = (action) => {
    if (action === 'first')
      return fetchApi(FIRST_PAGE_URL, setChangePage, setCharacters);
    if (action === 'last')
      return fetchApi(LAST_PAGE_URL, setChangePage, setCharacters);
    if (action === 'prev' && prev_url !== null)
      return fetchApi(prev_url, setChangePage, setCharacters);
    if (action === 'next' && next_url !== null)
      return fetchApi(next_url, setChangePage, setCharacters);
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => handleClick('first')} />
      <Pagination.Prev onClick={() => handleClick('prev')} />
      {/* <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next onClick={() => handleClick('next')} />
      <Pagination.Last onClick={() => handleClick('last')} />
    </Pagination>
  );
}

export default CPagination;
