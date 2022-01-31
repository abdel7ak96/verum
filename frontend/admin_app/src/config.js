const VOTING_CONTRACT_ADDRESS = "0x42a02d0D77A9F46c1F964Be0eED21d9519464197";

const VOTING_CONTRACT_ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "voteIndex",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "terminateEvent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCurrentResult",
		"outputs": [
			{
				"name": "",
				"type": "uint256[4]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "electionGoing",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "authorize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_can1",
				"type": "string"
			},
			{
				"name": "_can2",
				"type": "string"
			},
			{
				"name": "_can3",
				"type": "string"
			},
			{
				"name": "_can4",
				"type": "string"
			}
		],
		"name": "createEvent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"name": "ElectionResult",
		"type": "event"
	}
];

const contract = {
  VOTING_CONTRACT_ADDRESS,
  VOTING_CONTRACT_ABI,
};

export default contract;
