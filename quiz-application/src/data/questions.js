const questions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A programming language",
      "A JavaScript library",
      "A database",
      "An operating system"
    ],
    correctAnswer: "A JavaScript library"
  },
  {
    id: 2,
    question: "Which company maintains React?",
    options: [
      "Google",
      "Microsoft",
      "Meta",
      "Amazon"
    ],
    correctAnswer: "Meta"
  },
  {
    id: 3,
    question: "What is JSX?",
    options: [
      "A database query language",
      "A syntax extension for JavaScript",
      "A CSS framework",
      "A browser"
    ],
    correctAnswer: "A syntax extension for JavaScript"
  },
  {
    id: 4,
    question: "Which method is commonly used to render a list in React?",
    options: [
      "map()",
      "filter()",
      "reduce()",
      "findIndex()"
    ],
    correctAnswer: "map()"
  },
  {
    id: 5,
    question: "What is a React component?",
    options: [
      "A reusable piece of UI",
      "A CSS property",
      "A database table",
      "A browser extension"
    ],
    correctAnswer: "A reusable piece of UI"
  },
  {
    id: 6,
    question: "Which React Hook is used to manage local component state?",
    options: [
      "useEffect",
      "useRef",
      "useState",
      "useMemo"
    ],
    correctAnswer: "useState"
  },
  {
    id: 7,
    question: "How do you pass data from a parent component to a child component?",
    options: [
      "Using props",
      "Using CSS",
      "Using JSX comments",
      "Using className"
    ],
    correctAnswer: "Using props"
  },
  {
    id: 8,
    question: "What causes a React component to re-render when its state changes?",
    options: [
      "The browser closes",
      "React processes the state update",
      "The CSS file reloads",
      "The component is deleted"
    ],
    correctAnswer: "React processes the state update"
  },
  {
    id: 9,
    question: "Which event prop handles a button click in React?",
    options: [
      "onHover",
      "onChangeColor",
      "onClick",
      "onPressKey"
    ],
    correctAnswer: "onClick"
  },
  {
    id: 10,
    question: "Why should you provide a key when rendering lists in React?",
    options: [
      "To style each list item",
      "To help React identify list items between renders",
      "To make every item clickable",
      "To sort the items alphabetically"
    ],
    correctAnswer: "To help React identify list items between renders"
  }
];

export default questions;