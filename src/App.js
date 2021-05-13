import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import List from "./components/List";


function App() {
  
 
  return (
    <Container>
      <Jumbotron fluid>
         <List />
      </Jumbotron>
    </Container>
  )
}

export default App