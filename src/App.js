import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Laboratory from './components/Laboratory/Laboratory';
import Login from './components/Login/Login';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/laboratory'>
            <Laboratory />
          </PrivateRoute>
          <PrivateRoute path='/news'>
            <News />
          </PrivateRoute>
          <PrivateRoute path='/about'>
            <About />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <PrivateRoute path='/service/:serviceId'>
            <Detail />
          </PrivateRoute>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
