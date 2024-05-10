document.addEventListener('DOMContentLoaded', function () {
    const investmentSlider = document.getElementById('investmentAmount');
    const amountDisplay = document.getElementById('amountDisplay');
    const calculateROIBtn = document.getElementById('calculateROI');
    const roiResult = document.getElementById('roiResult');
    const stakingPair = document.getElementById('staking-pair');

    investmentSlider.oninput = function () {
        amountDisplay.textContent = '$' + this.value; // Update display as slider moves
    };

    calculateROIBtn.addEventListener('click', function () {
        const amount = parseFloat(investmentSlider.value);
        const pair = stakingPair.value;
        let roiPercentage = (pair === 'ETH/USDC') ? 40 : (pair === 'LQFI/USDC') ? 35 : 30;
        const roi = (amount * roiPercentage / 100).toFixed(2);
        roiResult.textContent = `Expected ROI: $${roi} after 1 year at a ${roiPercentage}% rate.`;
    });
});
