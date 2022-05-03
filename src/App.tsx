import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeScreen, CreateCategoryScreen } from './home/pages';
import { CategoryScreen } from './cateogry/pages';
import { routes } from './routes';


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path={routes.HomeScreen} element={ <HomeScreen />} />
        <Route  path={routes.CreateCategoryScreen} element={ <CreateCategoryScreen />} />
        <Route  path={routes.CategoryScreen} element={ <CategoryScreen />} />
        <Route  path='*' element={ <h1>Not found</h1> } />
      </Routes>
    </Router>
  )
}
