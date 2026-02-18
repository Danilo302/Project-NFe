
import { BrowserRouter } from "react-router-dom"
import GlobalStyles, { Container } from "./styles"
import Rotas from "./routes"
import { Provider } from "react-redux"
import { store } from "./store"
import NavBar from "./Components/NavBar"
import SideBar from "./Containers/SideBar"


function App() {
  
  return (
        <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles/>
        <NavBar />
        <Container>
          <SideBar />
          <Rotas />
        </Container>
      </BrowserRouter>
        </Provider>
  )
}

export default App
