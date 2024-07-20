function calculateCalories() {
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;

    // Harris-Benedict equation
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // For men
    // For women, the equation is: BMR = 10 * weight + 6.25 * height - 5 * age - 161

    const dailyCalories = bmr * activity;

    document.getElementById('result').textContent = `Your daily calorie needs: ${dailyCalories.toFixed(2)} calories`;
}
