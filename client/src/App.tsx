import Navbar from './components/Navbar/Navbar';
import Home from './container/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar>
        Hobbey Tracker
      </Navbar>
      <Home />
      {/* <Input type='text' placeholder='Add User' value='' onChange={() => {}} /> */}
    </div>
  );
}

export default App;
