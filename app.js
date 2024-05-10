document.addEventListener('DOMContentLoaded', function () {
    const connectWalletButton = document.getElementById('connectWallet');
    const walletStatus = document.getElementById('walletStatus');
    const swapTokensButton = document.getElementById('swapTokens');
    const pairSelect = document.getElementById('pair');
    const oneYearFDBtn = document.getElementById('oneYearFD');

    // Connect Wallet Button Interaction
    connectWalletButton.addEventListener('click', async function () {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                walletStatus.innerText = 'Wallet Connected';
                swapTokensButton.disabled = false;
                oneYearFDBtn.disabled = false;
                walletStatus.classList.add('connected');
            } catch (error) {
                console.error("User denied account access");
                alert('Wallet connection failed!');
                walletStatus.classList.add('error');
            }
        } else {
            alert('Please install MetaMask to use this feature!');
        }
    });

    // Token Swap Interaction
    swapTokensButton.addEventListener('click', function () {
        if (pairSelect.value !== "") {
            alert(`Initiating swap for selected pair: ${pairSelect.value}`);
            swapTokensButton.classList.add('active');
            // Animation to simulate processing
            setTimeout(() => {
                alert(`Swap completed successfully!`);
                swapTokensButton.classList.remove('active');
            }, 2000);
        }
    });

    // Fixed Deposit Interaction
    oneYearFDBtn.addEventListener('click', function () {
        alert(`Initiating fixed deposit for 1 year with expected 50% ROI`);
        oneYearFDBtn.classList.add('active');
        // Animation to simulate processing
        setTimeout(() => {
            alert(`Fixed deposit successful!`);
            oneYearFDBtn.classList.remove('active');
        }, 2000);
    });
});
