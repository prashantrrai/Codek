import { BrowserRouter, Route, Link } from 'react-router-dom';
import Video from './Components/Video';

function App() {

  return (
    <BrowserRouter>
      <div>


        {/* <Route path="/" exact component={s} /> */}
        <Route component={Video} />
      </div>
    </BrowserRouter>
  )
}

export default App
