import React from 'react'

function SinglePost({data}) {
    return (
        <Card style={{ marginBottom:'30px' }}>
          <Card.Img variant="top" src={data.urlToImage} style={{height:'300px',width:'auto',objectFit:'cover'}} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
             {data.content}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }

export default SinglePost