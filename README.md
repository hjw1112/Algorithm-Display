# Algorithm Visualizer

Algorithm Visualizer is a web-based application designed to help users visualize and understand various sorting and searching algorithms. This project provides an interactive and educational way to see how algorithms work step-by-step, along with detailed explanations.

## Features

- **Sorting Algorithms**:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort

- **Searching Algorithms**:
  - Linear Search
  - Binary Search
  - Jump Search

- Step-by-step visualizations with animations.
- Detailed textual explanations for each algorithm.
- Easy navigation between algorithm categories and visualization screens.

## Project Structure

```
AlgorithmVisualizer/
├── index.html       # Main HTML file
├── styles.css       # Styling for the project
├── script.js        # Core logic and animations
└── README.md        # Project documentation
```


## Technologies Used
- **HTML**: For structuring the application.
- **CSS**: For styling the user interface.
- **JavaScript**: For implementing animations and logic.

## Key Functions

### Main Functions
- **`showAlgorithmSelection(type)`**: Displays the list of algorithms based on the chosen category (sorting or searching).
- **`startVisualization(algorithm)`**: Starts the visualization for the selected algorithm.

### Animation Functions
- **`animateBubbleSort(container)`**: Visualizes Bubble Sort.
- **`animateSelectionSort(container)`**: Visualizes Selection Sort.
- **`animateInsertionSort(container)`**: Visualizes Insertion Sort.
- **`animateLinearSearch(container)`**: Visualizes Linear Search.
- **`animateBinarySearch(container)`**: Visualizes Binary Search.
- **`animateJumpSearch(container)`**: Visualizes Jump Search.

### Helper Functions
- **`getAlgorithmExplanation(algorithm)`**: Provides an explanation for the selected algorithm.
- **`createBar(value)`**: Creates visual elements (bars) for the animations.
- **`goBack()`**: Navigates back to the home screen.
- **`goBackToSelection()`**: Navigates back to the algorithm selection screen.

## How It Works
1. **Start Screen**: Users select between sorting and searching algorithms.
2. **Algorithm Selection**: Users choose a specific algorithm from the category.
3. **Visualization Screen**: The selected algorithm is animated with a detailed explanation displayed below.

## Example Visualizations
- **Bubble Sort**: Adjacent bars are compared and swapped if they are out of order. This process repeats until the list is sorted.
- **Binary Search**: The list is divided into halves, and the target element is located by eliminating half of the list in each step.

## Future Improvements
- Add more algorithms (e.g., Merge Sort, Quick Sort, Dijkstra's Algorithm).
- Allow users to input custom arrays for visualization.
- Provide controls to pause, resume, or adjust the speed of animations.


## Contribution
Contributions are welcome! If you'd like to contribute, please:
1. Fork the repository.
2. Create a new branch.
3. Make your changes and submit a pull request.