import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeScreen, CreateCategoryScreen, CategoryScreen, CreateTaskScreen , TaskScreen } from './pages';
import { routes } from './routes';


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path={routes.HomeScreen} element={ <HomeScreen />} />
        <Route  path={routes.CreateCategoryScreen} element={ <CreateCategoryScreen />} />
        <Route  path={routes.CategoryScreen} element={ <CategoryScreen />} />
        <Route  path={routes.CreateTaskScreen} element={ <CreateTaskScreen />} />
        <Route  path={routes.TaskScreen} element={ <TaskScreen />} />
        <Route  path='*' element={ <h1>Not found</h1> } />
      </Routes>
    </Router>
  )
}
