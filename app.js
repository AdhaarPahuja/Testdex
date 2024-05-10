
async function performSwap() {
    const fromToken = document.getElementById('from-token').value;
    const toToken = document.getElementById('to-token').value;
    const amount = document.getElementById('from-amount').value;

    if (amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    alert('Swapping ' + amount + ' ' + fromToken + ' to ' + toToken);
}

const connectWalletButton = document.getElementById('connectWallet');

async function connectWallet() {
    if (window.ethereum) { // Check if MetaMask is installed
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(window.ethereum);
            // Display connected account
            const accounts = await web3.eth.getAccounts();
            connectWalletButton.innerText = `Connected: ${accounts[0]}`;
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert('Please install MetaMask to use this feature!');
    }
}

connectWalletButton.addEventListener('click', connectWallet);
