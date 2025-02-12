document.getElementById('descriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('result').textContent = `Submitted`;
});