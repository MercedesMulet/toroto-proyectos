import './scss/app.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ProjectsPageContainer } from './components/ProjectsPageContainer/ProjectsPageContainer';
import { DetailProjectPageContainer } from './components/DetailProjectPageContainer/DetailProjectPageContainer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop /> 
      <Switch>
        <Route exact path="/">
          <ProjectsPageContainer />
        </Route>
        <Route path="/:projectid">
          <DetailProjectPageContainer />
        </Route>
        <Route path="*">
          <div>ERROR 404</div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
