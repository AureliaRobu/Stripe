import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Checkout from "./Checkout.tsx";
import Payments from "./Payments.tsx";
import Customers from "./Customers.tsx";
import Subscriptions from "./Subscriptions.tsx";
import CheckoutSuccess from "./CheckoutSuccess.tsx";
import CheckoutFail from "./CheckoutFail.tsx";
import Home from "./Home.tsx";



function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/checkout">
                <span aria-label="emoji" role="img">
                  🛒
                </span>{' '}
                                Checkout
                            </Link>
                        </li>
                        <li>
                            <Link to="/payments">
                <span aria-label="emoji" role="img">
                  💸
                </span>{' '}
                                Payments
                            </Link>
                        </li>
                        <li>
                            <Link to="/customers">
                <span aria-label="emoji" role="img">
                  🧑🏿‍🤝‍🧑🏻
                </span>{' '}
                                Customers
                            </Link>
                        </li>
                        <li>
                            <Link to="/subscriptions">
                <span aria-label="emoji" role="img">
                  🔄
                </span>{' '}
                                Subscriptions
                            </Link>
                        </li>
                    </ul>
                </nav>

                <main>
                    <Routes>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/payments" element={<Payments/>}/>
                        <Route path="/customers" element={<Customers/>}/>
                        <Route path="/subscriptions" element={<Subscriptions/>}/>
                        <Route path="/success" element={<CheckoutSuccess/>}/>
                        <Route path="/failed" element={<CheckoutFail/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );

}

export default App
