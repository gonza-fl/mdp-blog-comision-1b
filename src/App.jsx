import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap';
import CPagination from './components/CPagination';
import { fetchApi } from './utils/fetchApi';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);
const BASE_URL = 'https://rickandmortyapi.com/api/character';

function App() {
  const [characters, setCharacters] = useState([
    {
      id: 'err404',
      name: '404 character not found',
      status: 'unknown',
      type: 'unknown',
      location: 'unknown',
      specie: 'unknown',
      gender: 'unknown',
      created: 'unknown',
      image: 'https://static.thenounproject.com/png/55168-200.png',
    },
  ]);
  const [changePage, setChangePage] = useState({
    prev: '',
    next: '',
    pages: '',
  });

  useEffect(() => {
    fetchApi(BASE_URL, setChangePage, setCharacters);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <CPagination
            setCharacters={setCharacters}
            changePage={changePage}
            setChangePage={setChangePage}
          />
        </Col>
      </Row>
      <Row>
        {characters.map((e, i) => (
          <Col key={i} xs={4} md={4}>
            <Card>
              <CardHeader>
                <h4>{e.name}</h4>
              </CardHeader>
              <CardBody>
                <Image
                  className='w-100'
                  src={e.image}
                  alt={`${e.name} image`}
                />
                <ListGroup>
                  <ListGroupItem>{e.location.name}</ListGroupItem>
                  <ListGroupItem>{e.type}</ListGroupItem>
                  <ListGroupItem>{e.specie}</ListGroupItem>
                  <ListGroupItem>{e.gender}</ListGroupItem>
                </ListGroup>
              </CardBody>
              <CardFooter>{e.created}</CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>{/* <CPagination setCharacters={setCharacters} /> */}</Col>
      </Row>
    </Container>
  );
}

export default App;
