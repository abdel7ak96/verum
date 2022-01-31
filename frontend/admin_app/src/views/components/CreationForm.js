import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import TextField from "@material-ui/core/TextField";
import Web3 from 'web3';
import contractConfig from "../../config";

class CreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidate1: "",
      candidate2: "",
      candidate3: "",
      candidate4: "",
      address: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  }

  async createEvent() {
    const web3 = new Web3("http://localhost:8545");
    const contract = await new web3.eth.Contract(contractConfig.VOTING_CONTRACT_ABI, contractConfig.VOTING_CONTRACT_ADDRESS);
    const account = await web3.eth.getAccounts();
    console.log(account[0]);

    contract.methods
      .createEvent(this.state.candidate1, this.state.candidate2, this.state.candidate3, this.state.candidate4)
      .send({
        from: account[0],
        gas:3000000
      })
      .on("receipt", function (receipt) {
        console.log("receipt");
      })
      .on("confirmation", function (confirmationNumber, receipt) {
        console.log("confirmation");
      })
      .on("error", function (error, receipt) {
        console.log(error);
      });
      console.log("createEvent called");
  }

  async authorize() {
    const web3 = new Web3("http://localhost:8545");
    const contract = await new web3.eth.Contract(contractConfig.VOTING_CONTRACT_ABI, contractConfig.VOTING_CONTRACT_ADDRESS);
    const account = await web3.eth.getAccounts();

    contract.methods
      .authorize("Station 1", this.state.address)
      .send({
        from: account[0],
        gas:3000000
      })
      .on("receipt", function (receipt) {
        console.log("receipt");
      })
      .on("confirmation", function (confirmationNumber, receipt) {
        console.log("confirmation");
      })
      .on("error", function (error, receipt) {
        console.log(error);
      });
      console.log("Authorize called");
  }

  render() {
    return (
      <Grid container spacing={1} direction="column">
        <Grid item lg={8}>
          <Title>Create event</Title>
        </Grid>
        <Grid item lg={8}>
          <TextField
            name="candidate1"
            onChange={this.handleInputChange}
            value={this.candidate1}
            id="can1"
            label="Candidate 1"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={8}>
          <TextField
            name="candidate2"
            onChange={this.handleInputChange}
            value={this.candidate2}
            id="can2"
            label="Candidate 2"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={8}>
          <TextField
            name="candidate3"
            onChange={this.handleInputChange}
            value={this.candidate3}
            id="can3"
            label="Candidate 3"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={8}>
          <TextField
            name="candidate4"
            onChange={this.handleInputChange}
            value={this.candidate4}
            id="can4"
            label="Candidate 4"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={8}>
          <Button variant="contained" color="primary" onClick={() => this.createEvent()}>
            Create event
          </Button>
        </Grid>
        <div style={{ height: "50px" }}></div>
        <Grid item lg={8}>
          <TextField
            name="address"
            onChange={this.handleInputChange}
            value={this.address}
            id="accAdd"
            label="Authorized account address"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item lg={8}>
          <Button variant="contained" color="primary" onClick={() => this.authorize()}>
            Add
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default CreationForm;
