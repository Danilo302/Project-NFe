import NavBar from "./Components/NavBar"
import SiderBar from "./Components/SideBar"
import Dashboards from "./Containers/Dashboards"
import GlobalStyles, { Container } from "./styles"


function App() {
  
  return (
      <>
        <GlobalStyles/>
        <NavBar/>
        <Container>
          <SiderBar/>
        <Dashboards/>
        </Container>
      </>
  )
}

export default App
