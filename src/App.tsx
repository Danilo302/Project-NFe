
import { BrowserRouter } from "react-router-dom"
import GlobalStyles from "./styles"
import Rotas from "./routes"
import { Provider } from "react-redux"
import { store } from "./store"


function App() {
  
  return (
        <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles/>
        <Rotas />
      </BrowserRouter>
        </Provider>
  )
}

export default App
