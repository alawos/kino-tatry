import {
    HashRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import BuyTicket from './pages/BuyTicket';
import Menu from './pages/Menu';
import Logo from '/logo.jpg';
import './App.css'

function App() {

    return (
        <Router>
            <div className="App">
                <img className="App-Logo" src={Logo} />
                <div className="App-Content">
                    <Routes>
                        <Route
                            path='/'
                            element={<Menu />}
                        ></Route>
                        <Route
                            path='/buy-ticket'
                            element={<BuyTicket />}
                        ></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
