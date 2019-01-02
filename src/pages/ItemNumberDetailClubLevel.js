import React, {Component} from 'react';
import * as StateActions from '../actions/StateActions';
import Header from '../components/Header';
import ItemInfo from '../components/ItemInfo';
import BuyerInfo from '../components/BuyerInfo';
import Grid from '@material-ui/core/Grid';
import ItemNumberSearchBar from '../components/ItemNumberSearchBar';
import logo from '../public/assets/logo.svg';
import '../public/css/App.css';

class ItemNumberDetailClublevel extends Component {
  render() {
    StateActions.setActiveItemNumber(this.props.match.params.itemNumber)
    return (<div className="container-fluid">
      <Header/>
      <ItemNumberSearchBar/>
      <Grid container spacing={24}>
        <ItemInfo/>
        <BuyerInfo/>
      </Grid>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>);
  }
}

export default ItemNumberDetailClublevel;
