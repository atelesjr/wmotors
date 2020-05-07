import React, {useState} from 'react';
import './index.css';


import Container from 'components/Container'
import Content from 'components/Content'
import Header from 'components/Header'
import Navigation from 'components/Navigation'
import Search from 'pages/Search'
//import MotoSearch from 'pages/MotoSearch'

function App() {
  const [page, setPage ] = useState('car')

  // const ChoosePage = (page) => ({
  //   car: <CarSearch page={ page }/>,
  //   moto: <MotoSearch page={ page } />
  // })[page]

  return (
    <Container>
      <Content>
        <Header /> 
        <Navigation page={ page } setPage={setPage} />
        <Search page={ page }/>
      </Content>
  </Container>
  );
}

export default App;
