document.addEventListener('DOMContentLoaded', function () {
    const stakingPair = document.getElementById('staking-pair');
    const investmentAmount = document.getElementById('investmentAmount');
    const calculateROIBtn = document.getElementById('calculateROI');
    const roiResult = document.getElementById('roiResult');

    // Calculate ROI without needing wallet connection
    calculateROIBtn.addEventListener('click', function () {
        const amount = parseFloat(investmentAmount.value);
        const pair = stakingPair.value;
        if (!amount || amount <= 0) {
            roiResult.textContent = "Please enter a valid investment amount.";
            roiResult.style.color = 'red';
            return;
        }
        let roiPercentage;
        switch (pair) {
            case 'ETH/USDC':
                roiPercentage = 40; // Set ROI percentage for ETH/USDC
                break;
            case 'LQFI/USDC':
                roiPercentage = 35; // Set ROI percentage for LQFI/USDC
                break;
            case 'ETH/USDT':
                roiPercentage = 30; // Set ROI percentage for ETH/USDT
                break;
            default:
                roiResult.textContent = "Please select a valid staking pair.";
                roiResult.style.color = 'red';
                return;
        }
        const roi = (amount * roiPercentage / 100).toFixed(2);
        roiResult.textContent = `Expected ROI: $${roi} after 1 year at a ${roiPercentage}% rate.`;
        roiResult.style.color = 'green';
    });
});
