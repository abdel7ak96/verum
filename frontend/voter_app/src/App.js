import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './views/Login';
import Main from './views/Main';
import Feedback from './views/Feedback';

import Web3 from 'web3';

import contractConfig from './config';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      contract: undefined,
      account: ""
    }
  }

  componentDidMount(){
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3("http://localhost:8545");
    const contract = await new web3.eth.Contract(contractConfig.VOTING_CONTRACT_ABI, contractConfig.VOTING_CONTRACT_ADDRESS);
    const account = await web3.eth.getAccounts();
    let candidates = [];
    for(let i=0; i<4; i++) {
      let candidate = await contract.methods.candidates(i).call();
      candidates.push(candidate);
    }
    this.setState({
      candidates: candidates,
      contract: contract,
      account: account[1]
    });
  }

  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/main">
          <Main candidates={this.state.candidates} contract={this.state.contract} account={this.state.account}/>
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
      </Switch>
    </Router>
    );
  }
}

export default App;