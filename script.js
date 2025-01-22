// Function to show algorithm selection screen
function showAlgorithmSelection(type) {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('algorithm-selection').classList.remove('hidden');

    const algorithmTypeText = type === 'sorting' ? 'Sorting Algorithms' : 'Searching Algorithms';
    document.getElementById('algorithm-type').innerText = algorithmTypeText;

    // Define algorithms
    const algorithms = {
        sorting: ['Bubble Sort', 'Selection Sort', 'Insertion Sort'],
        searching: ['Linear Search', 'Binary Search', 'Jump Search']
    };

    const algoButtons = ['algo1-btn', 'algo2-btn', 'algo3-btn'];
    algoButtons.forEach((id, index) => {
        const button = document.getElementById(id);
        button.innerText = algorithms[type][index];
        button.onclick = () => startVisualization(button.innerText);
    });
}

function startVisualization(algorithm) {
    document.getElementById('algorithm-selection').classList.add('hidden');
    document.getElementById('visualization').classList.remove('hidden');
    document.getElementById('selected-algorithm').innerText = `Visualizing ${algorithm}`;

    const animationArea = document.getElementById('animation-area');
    animationArea.innerHTML = ''; // Clear previous animations

    const explanationArea = document.getElementById('algorithm-explanation');
    explanationArea.innerHTML = getAlgorithmExplanation(algorithm);

    if (algorithm === 'Bubble Sort') {
        animateBubbleSort(animationArea);
    } else if (algorithm === 'Selection Sort') {
        animateSelectionSort(animationArea);
    } else if (algorithm === 'Insertion Sort') {
        animateInsertionSort(animationArea);
    } else if (algorithm === 'Linear Search') {
        animateLinearSearch(animationArea);
    } else if (algorithm === 'Binary Search') {
        animateBinarySearch(animationArea);
    } else if (algorithm === 'Jump Search') {
        animateJumpSearch(animationArea);
    } else {
        animationArea.innerHTML = `<p>Animation for ${algorithm} is not implemented yet.</p>`;
    }
}

// Function to get the explanation of an algorithm
function getAlgorithmExplanation(algorithm) {
    const explanations = {
        'Bubble Sort': `
            Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent pairs,
            and swaps them if they are in the wrong order. This process is repeated until the list is sorted.
        `,
        'Selection Sort': `
            Selection Sort is a simple sorting algorithm that divides the list into two parts: a sorted part and an unsorted part.
            It repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the sorted part.
        `,
        'Insertion Sort': `
            Insertion Sort builds the sorted list one item at a time. It takes each element from the unsorted part
            and inserts it into its correct position in the sorted part.
        `,
        'Linear Search': `
            Linear Search is a simple searching algorithm that checks every element in the list sequentially
            until the desired element is found or the list ends.
        `,
        'Binary Search': `
            Binary Search is a fast searching algorithm for sorted lists. It repeatedly divides the list in half,
            compares the middle element with the target, and eliminates the half where the target cannot exist.
        `,
        'Jump Search': `
            Jump Search is a searching algorithm for sorted lists. It divides the list into blocks of a fixed size (square root of the list size),
            jumps to the next block, and performs a linear search within the block where the target might be.
        `
    };
    return explanations[algorithm] || 'No explanation available for this algorithm.';
}

// Bubble Sort Animation
function animateBubbleSort(container) {
    const array = [50, 40, 70, 20, 90, 30];
    const bars = array.map(value => createBar(value));
    bars.forEach(bar => container.appendChild(bar));

    let i = 0, j = 0, swapped = false;

    function step() {
        if (i < array.length) {
            if (j < array.length - i - 1) {
                bars[j].style.backgroundColor = 'red';
                bars[j + 1].style.backgroundColor = 'red';

                if (array[j] > array[j + 1]) {
                    swapped = true;

                    const tempHeight = bars[j].style.height;
                    bars[j].style.height = bars[j + 1].style.height;
                    bars[j + 1].style.height = tempHeight;

                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }

                setTimeout(() => {
                    bars[j].style.backgroundColor = 'blue';
                    bars[j + 1].style.backgroundColor = 'blue';
                    j++;
                    step();
                }, 500);
            } else {
                if (!swapped) return;
                j = 0;
                i++;
                swapped = false;
                step();
            }
        }
    }
    step();
}

// Selection Sort Animation
function animateSelectionSort(container) {
    const array = [50, 40, 70, 20, 90, 30];
    const bars = array.map(value => createBar(value));
    bars.forEach(bar => container.appendChild(bar));

    let i = 0;

    function step() {
        if (i < array.length - 1) {
            let minIndex = i;
            bars[minIndex].style.backgroundColor = 'green';

            let j = i + 1;

            function findMin() {
                if (j < array.length) {
                    bars[j].style.backgroundColor = 'red';

                    setTimeout(() => {
                        if (array[j] < array[minIndex]) {
                            bars[minIndex].style.backgroundColor = 'blue';
                            minIndex = j;
                            bars[minIndex].style.backgroundColor = 'green';
                        } else {
                            bars[j].style.backgroundColor = 'blue';
                        }
                        j++;
                        findMin();
                    }, 500);
                } else {
                    swap(i, minIndex);
                    i++;
                    step();
                }
            }
            findMin();
        }
    }

    function swap(index1, index2) {
        if (index1 === index2) return;

        const tempHeight = bars[index1].style.height;
        bars[index1].style.height = bars[index2].style.height;
        bars[index2].style.height = tempHeight;

        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;

        bars[index1].style.backgroundColor = 'blue';
        bars[index2].style.backgroundColor = 'blue';
    }

    step();
}

// Insertion Sort Animation
function animateInsertionSort(container) {
    const array = [50, 40, 70, 20, 90, 30];
    const bars = array.map(value => createBar(value));
    bars.forEach(bar => container.appendChild(bar));

    let i = 1;

    function step() {
        if (i < array.length) {
            let j = i;
            const key = array[i];
            const keyHeight = bars[i].style.height;

            function insert() {
                if (j > 0 && array[j - 1] > key) {
                    array[j] = array[j - 1];
                    bars[j].style.height = bars[j - 1].style.height;
                    j--;

                    setTimeout(insert, 500);
                } else {
                    array[j] = key;
                    bars[j].style.height = keyHeight;
                    i++;
                    step();
                }
            }
            insert();
        }
    }

    step();
}

// Linear Search Animation
function animateLinearSearch(container) {
    const array = [50, 40, 70, 20, 90, 30];
    const bars = array.map(value => createBar(value));
    bars.forEach(bar => container.appendChild(bar));

    const target = 70;
    let index = 0;

    function step() {
        if (index < array.length) {
            bars[index].style.backgroundColor = 'red';
            setTimeout(() => {
                if (array[index] === target) {
                    bars[index].style.backgroundColor = 'green';
                } else {
                    bars[index].style.backgroundColor = 'blue';
                    index++;
                    step();
                }
            }, 500);
        }
    }

    step();
}

// Binary Search Animation
function animateBinarySearch(container) {
    const array = [20, 30, 40, 50, 70, 90];
    const bars = array.map(value => createBar(value));
    bars.forEach(bar => container.appendChild(bar));

    const target = 70;
    let left = 0, right = array.length - 1;

    function step() {
        if (left <= right) {
            const mid = Math.floor((left + right) / 2);
            bars[mid].style.backgroundColor = 'red';

            setTimeout(() => {
                if (array[mid] === target) {
                    bars[mid].style.backgroundColor = 'green';
                } else {
                    bars[mid].style.backgroundColor = 'blue';
                    if (array[mid] < target) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                    step();
                }
            }, 500);
        }
    }

    step();
}

// Jump Search Animation
function animateJumpSearch(container) {
    const array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    const bars = array.map(value => createBar(value));
    bars.forEach(bar => container.appendChild(bar));

    const target = 70;
    const step = Math.sqrt(array.length);
    let prev = 0, curr = Math.min(step, array.length);

    function search() {
        if (prev < array.length && array[Math.floor(prev)] < target) {
            bars[Math.floor(prev)].style.backgroundColor = 'red';
            prev = curr;
            curr = Math.min(curr + step, array.length);
            setTimeout(search, 500);
        } else if (prev < array.length && array[Math.floor(prev)] === target) {
            bars[Math.floor(prev)].style.backgroundColor = 'green';
        }
    }

    search();
}

// Helper function to create a bar element
function createBar(value) {
    const bar = document.createElement('div');
    bar.style.height = `${value}px`;
    bar.style.width = '30px';
    bar.style.margin = '0 5px';
    bar.style.display = 'inline-block';
    bar.style.backgroundColor = 'blue';
    return bar;
}


// Function to go back to the previous screens
function goBack() {
    document.getElementById('algorithm-selection').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}

function goBackToSelection() {
    document.getElementById('visualization').classList.add('hidden');
    document.getElementById('algorithm-selection').classList.remove('hidden');
}

// Event listeners for home screen buttons
document.getElementById('sorting-btn').addEventListener('click', () => showAlgorithmSelection('sorting'));
document.getElementById('searching-btn').addEventListener('click', () => showAlgorithmSelection('searching'));
document.getElementById('back-btn').addEventListener('click', goBack);
document.getElementById('back-to-selection-btn').addEventListener('click', goBackToSelection);
