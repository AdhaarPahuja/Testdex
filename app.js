document.addEventListener('DOMContentLoaded', function () {
    const swapButton = document.getElementById('swapTokens');
    const calculateROIBtn = document.getElementById('calculateROI');
    const investmentSlider = document.getElementById('investmentAmount');
    const amountDisplay = document.getElementById('amountDisplay');
    const roiResult = document.getElementById('roiResult');
    const stakingPair = document.getElementById('staking-pair');

    // Update displayed amount from slider
    investmentSlider.oninput = function () {
        amountDisplay.textContent = '$' +this.value; // Update display as slider moves
    };

    // Handle token swapping
    swapButton.addEventListener('click', function () {
        const swapPair = document.getElementById('swap-pair').value;
        alert('Swapping tokens for the pair: ' + swapPair); // Simulated swap action
    });

    // Handle ROI calculation
    calculateROIBtn.addEventListener('click', function () {
        const amount = parseFloat(investmentSlider.value);
        const pair = stakingPair.value;
        let roiPercentage;

        // Set ROI percentages based on selected pair
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
                roiPercentage = 0; // Default case if no valid pair is selected
                break;
        }
        
        // Calculate expected ROI based on amount and percentage
        const roi = (amount * roiPercentage / 100).toFixed(2);
        roiResult.textContent = `Expected ROI: $${roi} after 1 year at a ${roiPercentage}% rate.`;
    });
});
