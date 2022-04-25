import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component'
import Home from "./routes/home/home.component"

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () =>  {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* saying when the / route is matched, what ever route has index will also render */}
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
