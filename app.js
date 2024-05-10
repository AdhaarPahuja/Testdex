
document.addEventListener('DOMContentLoaded', function () {
    const connectWalletButton = document.getElementById('connectWallet');
    const walletStatus = document.getElementById('walletStatus');

    connectWalletButton.addEventListener('click', async function () {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                walletStatus.innerText = 'Wallet Connected';
            } catch (error) {
                console.error("User denied account access");
                alert('Wallet connection failed!');
            }
        } else {
            alert('Please install MetaMask to use this feature!');
        }
    });

    // Staking buttons
    document.getElementById('oneYearStake').addEventListener('click', function () {
        alert('Simulated: 1 Year Staking at 40% return');
    });
    document.getElementById('twoYearStake').addEventListener('click', function () {
        alert('Simulated: 2 Years Staking at 60% return');
    });
    document.getElementById('fiveYearStake').addEventListener('click', function () {
        alert('Simulated: 5 Years Staking at 80% return');
    });
});
