document.addEventListener('DOMContentLoaded', function () {
    const connectWalletButton = document.getElementById('connectWallet');
    const swapButton = document.getElementById('swapTokens');

    connectWalletButton.addEventListener('click', function () {
        // Simulated wallet connection
        alert("Wallet connected successfully!");
    });

    swapButton.addEventListener('click', function () {
        const payToken = document.getElementById('pay-token').value;
        const receiveToken = document.getElementById('receive-token').value;
        alert(`Swapping from ${payToken} to ${receiveToken}`);
    });
});
