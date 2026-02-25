
import { BrowserRouter } from "react-router-dom"
import GlobalStyles, { Container } from "./styles"
import Rotas from "./routes"
import { Provider } from "react-redux"
import { store } from "./store"
import SideBar from "./Containers/SideBar"


function App() {
  
  return (
        <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles/>
        <Container>
          <SideBar />
          <Rotas />
        </Container>
      </BrowserRouter>
        </Provider>
  )
}

export default App
