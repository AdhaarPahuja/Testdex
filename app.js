
function performSwap() {
    const fromToken = document.getElementById('from-token').value;
    const toToken = document.getElementById('to-token').value;
    const amount = document.getElementById('from-amount').value;

    if (amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    alert('Swapping ' + amount + ' ' + fromToken + ' to ' + toToken);
}
