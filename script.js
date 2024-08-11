document.getElementById('generateBtn').addEventListener('click', function() {
    const randomNum = Math.floor(Math.random() * 1000);
    const paddedNum = String(randomNum).padStart(3, '0');
    document.getElementById('numberDisplay').innerText = paddedNum;
});
