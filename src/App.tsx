import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeScreen, CreateCategoryScreen } from './home/pages';
import { routes } from './routes';


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path={routes.HomeScreen} element={ <HomeScreen />} />
        <Route  path={routes.CreateCategoryScreen} element={ <CreateCategoryScreen />} />
      </Routes>
    </Router>
  )
}
