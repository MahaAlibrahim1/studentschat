import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Spinner from './Spinner';
import 'semantic-ui-css/semantic.min.css';
 import firebase from 'firebase' ;
 import { BrowserRouter as Router , Switch , Route , withRouter} from 'react-router-dom';
 import {createStore} from 'redux' ;
 import {Provider , connect} from 'react-redux' ;
 import {composeWithDevTools} from 'redux-devtools-extension' ;
import rootReducer from './reducers';
import {setUser , clearUser} from './actions' ;


 const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
    // lisener 
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            // redirect user to page 
            if(user) {
              this.props.setUser(user) ;
                this.props.history.push("/");
            }else {
                this.props.history.push('/login');
                this.props.clearUser();
            }
        }) ;
    }

    render() {
        return this.props.isLoading? <Spinner/> : (
     
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
  
);

    }
}

const mapStateFromProp = state=> ({
    isLoading : state.user.isLoading
}) ;
const RootwithAuth = withRouter(connect(mapStateFromProp , {setUser , clearUser} )(Root)) ; 

// provider connect react app with redux or store ..
ReactDOM.render(
    <Provider store={store}>
    <Router>
    <RootwithAuth/>
 </Router>
 </Provider>, document.getElementById('root'));
registerServiceWorker();