import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/Home/Home';
import Menubar from './Components/HomePage/Menubar/Menubar';
import AboutUs from './Components/HomePage/AboutUs/AboutUs';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login/Login';
import CoomSoon from './Components/CoomSoon/CoomSoon';
import Package from './Components/Package/Package';
import PivateRoute from './Components/PrivateRoute/PivateRoute';
import BookNow from './Components/BookNow/BookNow';
import MyBooking from './Components/BookNow/Booking/MyBooking/MyBooking';
import ManaqgeBooking from './Components/BookNow/Booking/ManageBooking/ManaqgeBooking';
import MyBooked from './Components/BookNow/Booking/MyBooked/MyBooked';
import ManageAllBooking from './Components/BookNow/Booking/ManageAllBooking/ManageAllBooking';
import AddPackage from './Components/AddPackage/AddPackage';
import AllPackage from './Components/AllPackage/AllPackage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Menubar></Menubar>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/aboutus'>
              <AboutUs></AboutUs>
            </Route>

            <Route path='/package'>
              <Package></Package>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <PivateRoute path='/booknow/:bookId'>
              <BookNow></BookNow>
            </PivateRoute>

            <Route path='/coomsoon'>
              <CoomSoon></CoomSoon>
            </Route>

            <Route path='/mybooking'>
              <MyBooking></MyBooking>
            </Route>

            <Route path='/managebooking'>
              <ManaqgeBooking></ManaqgeBooking>
            </Route>

            <Route path='/manageallbooking'>
              <ManageAllBooking></ManageAllBooking>
            </Route>

            <Route path='/mybooked'>
              <MyBooked></MyBooked>
            </Route>

            <Route path='/addpackage'>
              <AddPackage></AddPackage>
            </Route>

            <Route path='/allpackage'>
              <AllPackage></AllPackage>
            </Route>

            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
