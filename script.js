function showAlgorithmSelection(type) {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('algorithm-selection').classList.remove('hidden');
    document.getElementById('algorithm-type').innerText = type.charAt(0).toUpperCase() + type.slice(1) + ' Algorithms';

    const algorithms = {
        sorting: ['Bubble Sort', 'Selection Sort', 'Insertion Sort'],
        searching: ['Linear Search', 'Binary Search', 'Jump Search']
    };

    document.getElementById('algo1').innerText = algorithms[type][0];
    document.getElementById('algo2').innerText = algorithms[type][1];
    document.getElementById('algo3').innerText = algorithms[type][2];
}

function startVisualization(algoId) {
    const algorithm = document.getElementById(algoId).innerText;
    document.getElementById('algorithm-selection').classList.add('hidden');
    document.getElementById('visualization').classList.remove('hidden');
    document.getElementById('selected-algorithm').innerText = algorithm;

    // Placeholder for animation function
    animateAlgorithm(algorithm);
}

function animateAlgorithm(algorithm) {
    const animationArea = document.getElementById('animation-area');
    animationArea.innerHTML = `<p>Animating ${algorithm}...</p>`;
    // Implement specific animations for each algorithm here
}

function goBack() {
    document.getElementById('algorithm-selection').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

function goBackToSelection() {
    document.getElementById('visualization').classList.add('hidden');
    document.getElementById('algorithm-selection').classList.remove('hidden');
}
