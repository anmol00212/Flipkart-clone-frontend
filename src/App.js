import {BrowserRouter, Switch, Route} from 'react-router-dom'

//components
import Header from './components/header/header'
import Home from './components/Home/Home'
import Cart from "./components/cart/Cart"
import TemplateProvider from './components/templates/templateProvide'
import ContextProvider from './context/ContextProvider'
import DetailView from './components/itemdetails/DetailView'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
    <BrowserRouter>
     <Header />
     <Switch>
     <Route exact path= '/' component={Home} />
            <Route exact path= '/cart' component={Cart} />
            {/* <Route exact path= '/product/:id' component={Product} /> */}
            <Route exact path= '/product/:id' component={DetailView} />
    </Switch> 
    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
