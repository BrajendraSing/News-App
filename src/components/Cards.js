import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({data}) {
  return (
    <Card style={{ marginBottom:'30px' }}>
      <Card.Img variant="top" src={data.urlToImage} style={{height:'300px',width:'auto',objectFit:'cover'}} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.description}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;