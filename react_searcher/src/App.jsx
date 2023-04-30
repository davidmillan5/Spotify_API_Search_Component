import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID = 'c4e4d2868b494d09b6c3cc58ee500090';
const CLIENT_SECRECT = '4913008ece8f45a9913114fc98f5f1bd';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRECT,
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  // Search Function

  async function search() {
    console.log('Search for ' + searchInput);

    // Get Request using search to get the Artist ID
    var artistParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };
    var artistID = await fetch(
      'https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist',
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    // Get request with Artist ID grab all the albums from the artist

    // Display Those Albums to The Users
  }

  return (
    <>
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search For Artist"
            type="input"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          ></FormControl>
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card className="m-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-3">
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default App;
