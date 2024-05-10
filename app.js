
async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            document.getElementById('connectWallet').innerText = 'Wallet Connected';
            fetchPools(web3);
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert('Please install MetaMask to use this feature!');
    }
}

async function fetchPools(web3) {
    const factoryAddress = '0xca143ce32fe78f1f7019d7d551a6402fc5350c73';
    const factoryABI = [{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"type":"function"}];
    const factoryContract = new web3.eth.Contract(factoryABI, factoryAddress);
    const poolLength = await factoryContract.methods.allPairsLength().call();
    const poolsList = document.getElementById('poolsList');

    for (let i = 0; i < poolLength && i < 10; i++) {  // Limit to first 10 pools for performance
        const poolAddress = await factoryContract.methods.allPairs(i).call();
        const poolElement = document.createElement('div');
        poolElement.innerText = `Pool ${i + 1}: ${poolAddress}`;
        poolsList.appendChild(poolElement);
    }
}

document.getElementById('connectWallet').addEventListener('click', connectWallet);
