document.addEventListener('DOMContentLoaded', function () {
    const connectWalletButton = document.getElementById('connectWallet');
    const walletStatus = document.getElementById('walletStatus');
    const swapTokensButton = document.getElementById('swapTokens');
    const investmentAmount = document.getElementById('investmentAmount');
    const calculateROIBtn = document.getElementById('calculateROI');
    const roiResult = document.getElementById('roiResult');
    const pairSelect = document.getElementById('pair');

    // Enable interaction after wallet connection
    connectWalletButton.addEventListener('click', async function () {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                walletStatus.innerText = 'Wallet Connected';
                walletStatus.classList.add('connected');
                swapTokensButton.disabled = false;
            } catch (error) {
                console.error("User denied account access");
                walletStatus.innerText = 'Connection Failed';
                walletStatus.classList.add('error');
            }
        } else {
            alert('Please install MetaMask to use this feature!');
        }
    });

    // Handle ROI calculation
    calculateROIBtn.addEventListener('click', function () {
        const amount = parseFloat(investmentAmount.value);
        if (isNaN(amount) || amount <= 0) {
            roiResult.textContent = "Please enter a valid amount.";
            roiResult.classList.add('error');
            return;
        }
        const selectedPair = pairSelect.value;
        let roiPercentage = 0;
        switch (selectedPair) {
            case 'ETH/USDC':
            case 'LQFI/USDC':
                roiPercentage = 40; // Example percentage for these pairs
                break;
            case 'ETH/USDT':
                roiPercentage = 35; // Different ROI for different pair
                break;
            default:
                roiResult.textContent = "Please select a valid pair.";
                roiResult.classList.add('error');
                return;
        }
        const roi = amount * (roiPercentage / 100);
        roiResult.textContent = `Expected ROI: $${roi.toFixed(2)} after 1 year at ${roiPercentage}% rate.`;
        roiResult.classList.remove('error');
    });
});
