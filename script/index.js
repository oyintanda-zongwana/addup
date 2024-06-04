function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('arrayForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.getElementById('numbersInput').value;
        const numbers = input.split(',').map(Number);
        const result = sumArray(numbers);
        document.getElementById('result').textContent = `The sum of the array is: ${result}`;
    });
});
