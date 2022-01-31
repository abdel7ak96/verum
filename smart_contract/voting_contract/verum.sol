pragma solidity ^0.4.0;

contract verumElection {
    
    struct Candidate {
        string name;
        uint voteCount;
    }
    
    struct Station {
        string name;
        bool authorized;
    }
    
    address public owner;
    bool public electionGoing;
    Candidate[4] public candidates;
    mapping(address => Station) public stations;
    
    event ElectionResult(string name, uint voteCount);
    
    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    modifier onlyAuthorized {
        require(stations[msg.sender].authorized, "Only authorized polling stations (ETH accounts) can cast votes");
        _;
    }
    
    modifier onlyWhenFree {
        require(!electionGoing, "Only when there's no election already running");
        _;
    }
    
    function createEvent(string _can1, string _can2, string _can3, string _can4) public {
        owner = msg.sender;
        electionGoing = true;
        
        candidates[0].name = _can1; candidates[0].voteCount = 0;
        candidates[1].name = _can2; candidates[1].voteCount = 0;
        candidates[2].name = _can3; candidates[2].voteCount = 0;
        candidates[3].name = _can4; candidates[3].voteCount = 0;
    }
    
    function authorize(string _name ,address _address) onlyOwner public {
        require(!stations[_address].authorized);
        stations[_address].name = _name;
        stations[_address].authorized = true;
    }
    
    function vote(uint voteIndex) onlyAuthorized public {
        require(electionGoing);
        
        candidates[voteIndex].voteCount++;
    }
    
    function currentResult() public view returns (uint[4]) {
        uint[4] memory result;
        for(uint i=0; i<4; i++) {
            result[i] = candidates[i].voteCount;
        }
        return result;
    }
    
    function terminateEvent() onlyOwner public {
        require(msg.sender == owner);
        require(electionGoing);
        electionGoing = false;
        
        for(uint i=0; i < candidates.length; i++) {
            emit ElectionResult(candidates[i].name, candidates[i].voteCount);
        }
    }
}