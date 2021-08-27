import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './screens/Home';
import Detail from './screens/Detail';


function App() {
  
  return (
     <div>
       <BrowserRouter>
          <NavigationBar />
          <Route component={Home} exact path={'/'}/>
          <Route component={Detail} exact path={'/pokemon/:name'} />
       </BrowserRouter>
 
    </div>
  );
}

export default App;
