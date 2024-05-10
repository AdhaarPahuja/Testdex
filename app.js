document.addEventListener('DOMContentLoaded', function () {
    const connectWalletButton = document.getElementById('connectWallet');
    const walletStatus = document.getElementById('walletStatus');
    const stakingPair = document.getElementById('staking-pair');
    const investmentAmount = document.getElementById('investmentAmount');
    const calculateROIBtn = document.getElementById('calculateROI');
    const roiResult = document.getElementById('roiResult');

    // Enable interaction after wallet connection
    connectWalletButton.addEventListener('click', async function () {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                walletStatus.innerText = 'Wallet Connected';
                walletStatus.classList.add('connected');
            } catch (error) {
                console.error("User denied account access");
                walletStatus.innerText = 'Connection Failed';
                walletStatus.classList.add('error');
            }
        } else {
            alert('Please install MetaMask to use this feature!');
        }
    });

    // Calculate ROI based on the selected staking pair and investment amount
    calculateROIBtn.addEventListener('click', function () {
        const amount = parseFloat(investmentAmount.value);
        const pair = stakingPair.value;
        if (!amount || amount <= 0) {
            roiResult.textContent = "Please enter a valid investment amount.";
            roiResult.classList.add('error');
            return;
        }
        let roiPercentage;
        switch (pair) {
            case 'ETH/USDC':
                roiPercentage = 40; // Example: 40% ROI for ETH/USDC
                break;
            case 'LQFI/USDC':
                roiPercentage = 35; // Example: 35% ROI for LQFI/USDC
                break;
            case 'ETH/USDT':
                roiPercentage = 30; // Example: 30% ROI for ETH/USDT
                break;
            default:
                roiResult.textContent = "Please select a valid staking pair.";
                roiResult.classList.add('error');
                return;
        }
        const roi = (amount * roiPercentage / 100).toFixed(2);
        roiResult.textContent = `Expected ROI: $${roi} after 1 year at a ${roiPercentage}% rate.`;
        roiResult.classList.remove('error');
    });
});
