import React, { useState } from "react";
import TechmaaLogo from './assets/Techmaalogo.jpeg';

function App() {
    // ------------------ QUESTION BANK ------------------
  const questionBank = {
    "Python Basics": [
      { question: "1. Which keyword is used to define a function in Python?", options: ["A. func", "B. def", "C. lambda", "D. define"], answer: "B" },
      { question: "2. What is the output of print(2 ** 3)?", options: ["A. 6", "B. 8", "C. 9", "D. Error"], answer: "B" },
      { question: "3. Which of the following is a valid variable name in Python?", options: ["A. 2var", "B. _name", "C. var-name", "D. @name"], answer: "B" },
      { question: "4. What is the correct file extension for Python files?", options: ["A. .pt", "B. .pyt", "C. .py", "D. .python"], answer: "C" },
      { question: "5. Which function is used to display output in Python?", options: ["A. display()", "B. echo()", "C. print()", "D. show()"], answer: "C" },
      { question: "6. What will be the output of print(type([]))?", options: ["A. <class 'tuple'>", "B. <class 'list'>", "C. <class 'dict'>", "D. <class 'set'>"], answer: "B" },
      { question: "7. Which data type is used to store True/False values?", options: ["A. int", "B. str", "C. bool", "D. float"], answer: "C" },
      { question: "8. How do you start a comment in Python?", options: ["A. //", "B. #", "C. <!--", "D. /*"], answer: "B" },
      { question: "9. Which of the following creates a list in Python?", options: ["A. {}", "B. []", "C. ()", "D. <>"], answer: "B" },
      { question: "10. What is the correct way to import a module in Python?", options: ["A. include math", "B. import math", "C. using math", "D. require(math)"], answer: "B" },
    ],
   
"SQL": [
        {"question": "1. What does SQL stand for?", "options": ["A. Strong Question Language", "B. Structured Query Language", "C. Simple Query List", "D. Structured Question List"], "answer": "B"},
        {"question": "2. Which SQL clause is used to combine rows from two or more tables?", "options": ["A. UNION", "B. JOIN", "C. COMBINE", "D. CONNECT"], "answer": "B"},
        {"question": "3. What is the default sorting order in SQL ORDER BY?", "options": ["A. DESC", "B. ASC", "C. RANDOM", "D. NONE"], "answer": "B"},
        {"question": "4. Which SQL keyword is used to remove duplicates?", "options": ["A. UNIQUE", "B. DISTINCT", "C. FILTER", "D. REMOVE"], "answer": "B"},
        {"question": "5. Which command deletes all rows in a table but keeps the structure?", "options": ["A. DROP", "B. ERASE", "C. TRUNCATE", "D. DELETE"], "answer": "C"},
        {"question": "6. Which function finds the total number of rows?", "options": ["A. TOTAL()", "B. SUM()", "C. COUNT()", "D. ROWS()"], "answer": "C"},
        {"question": "7. Which SQL statement updates data?", "options": ["A. CHANGE", "B. MODIFY", "C. UPDATE", "D. ALTER"], "answer": "C"},
        {"question": "8. What is a primary key?", "options": ["A. A unique identifier for each row", "B. A foreign table key", "C. A key used for joining", "D. None of these"], "answer": "A"},
        {"question": "9. Which SQL keyword is used to group rows?", "options": ["A. CLUSTER BY", "B. SORT BY", "C. GROUP BY", "D. ORDER BY"], "answer": "C"},
        {"question": "10. What is the result of NULL + 10 in SQL?", "options": ["A. 10", "B. NULL", "C. 0", "D. Error"], "answer": "B"},
    ],
"Advanced Excel": [
        {"question": "1. Which function removes extra spaces in Excel?", "options": ["A. REMOVE()", "B. TRIM()", "C. CLEAN()", "D. TEXT()"], "answer": "B"},
        {"question": "2. What does VLOOKUP stand for?", "options": ["A. Vertical Lookup", "B. Variable Lookup", "C. Value Lookup", "D. Vector Lookup"], "answer": "A"},
        {"question": "3. What does CONCATENATE do?", "options": ["A. Combines text", "B. Sorts text", "C. Splits text", "D. Filters text"], "answer": "A"},
        {"question": "4. Which formula returns the current date?", "options": ["A. DATE()", "B. TODAY()", "C. NOW()", "D. TIME()"], "answer": "B"},
        {"question": "5. What is the shortcut for creating a table?", "options": ["A. Ctrl + L", "B. Ctrl + T", "C. Ctrl + Shift + T", "D. Ctrl + Alt + T"], "answer": "B"},
        {"question": "6. Which chart is best for trend analysis?", "options": ["A. Line Chart", "B. Pie Chart", "C. Bar Chart", "D. Histogram"], "answer": "A"},
        {"question": "7. What does IFERROR do?", "options": ["A. Shows #ERROR", "B. Hides errors with a message", "C. Deletes errors", "D. Counts errors"], "answer": "B"},
        {"question": "8. Which function returns the rank of a number?", "options": ["A. RANK()", "B. POSITION()", "C. INDEX()", "D. MATCH()"], "answer": "A"},
        {"question": "9. Which feature restricts input values?", "options": ["A. Data Validation", "B. Conditional Formatting", "C. Filter", "D. Pivot Table"], "answer": "A"},
        {"question": "10. What is Power Query used for?", "options": ["A. Data Cleaning", "B. Chart Creation", "C. Printing", "D. Formatting"], "answer": "A"},
    ],
    
    "Power BI": [
        {"question": "1. Power BI is developed by which company?", "options": ["A. Google", "B. Microsoft", "C. IBM", "D. Oracle"], "answer": "B"},
        {"question": "2. What language does Power BI use for data modeling?", "options": ["A. DAX", "B. R", "C. SQL", "D. Python"], "answer": "A"},
        {"question": "3. Which visualization shows trends over time?", "options": ["A. Line Chart", "B. Pie Chart", "C. Funnel Chart", "D. Gauge"], "answer": "A"},
        {"question": "4. What is Power Query used for?", "options": ["A. Data transformation", "B. Visualization", "C. AI modeling", "D. Dashboard design"], "answer": "A"},
        {"question": "5. What file type is used to import data models?", "options": ["A. .pbix", "B. .xlsx", "C. .csv", "D. .pbi"], "answer": "A"},
        {"question": "6. Which view is used to build reports?", "options": ["A. Report view", "B. Model view", "C. Data view", "D. Table view"], "answer": "A"},
        {"question": "7. What does KPI stand for?", "options": ["A. Key Performance Indicator", "B. Key Project Indicator", "C. Known Performance Info", "D. None"], "answer": "A"},
        {"question": "8. What is DAX used for?", "options": ["A. Calculations", "B. Cleaning", "C. Importing data", "D. Formatting"], "answer": "A"},
        {"question": "9. What is a slicer?", "options": ["A. Filter tool", "B. Chart type", "C. Button", "D. Field"], "answer": "A"},
        {"question": "10. Which chart shows part-to-whole relationship?", "options": ["A. Pie", "B. Line", "C. Scatter", "D. Bar"], "answer": "A"},
    ],

    "Data Science": [
      {"question": "1. What is the first step in data science?", "options": ["A. Model building", "B. Data collection", "C. Deployment", "D. Testing"], "answer": "B"},
        {"question": "2. Which library is used for numerical computing?", "options": ["A. Pandas", "B. NumPy", "C. Matplotlib", "D. Seaborn"], "answer": "B"},
        {"question": "3. Which function shows first rows in pandas?", "options": ["A. head()", "B. first()", "C. top()", "D. start()"], "answer": "A"},
        {"question": "4. What does supervised learning need?", "options": ["A. Labels", "B. No labels", "C. Both", "D. None"], "answer": "A"},
        {"question": "5. Which plot shows correlation?", "options": ["A. Heatmap", "B. Histogram", "C. Bar", "D. Pie"], "answer": "A"},
        {"question": "6. What is overfitting?", "options": ["A. High training, low test accuracy", "B. High test accuracy", "C. Low training accuracy", "D. Perfect generalization"], "answer": "A"},
        {"question": "7. What is confusion matrix used for?", "options": ["A. Classification evaluation", "B. Regression", "C. Clustering", "D. Visualization"], "answer": "A"},
        {"question": "8. Which model is used for regression?", "options": ["A. Linear Regression", "B. KMeans", "C. Random Forest Classifier", "D. Naive Bayes"], "answer": "A"},
        {"question": "9. Which library is used for plotting?", "options": ["A. Matplotlib", "B. Numpy", "C. TensorFlow", "D. Pandas"], "answer": "A"},
        {"question": "10. What is feature scaling?", "options": ["A. Normalizing data", "B. Removing missing data", "C. Encoding text", "D. Selecting columns"], "answer": "A"},
    ],

    "Artificial Intelligence": [
      {"question": "1. AI stands for?", "options": ["A. Artificial Input", "B. Artificial Intelligence", "C. Advanced Intelligence", "D. Automatic Interaction"], "answer": "B"},
        {"question": "2. Which is an AI framework?", "options": ["A. TensorFlow", "B. Excel", "C. Power BI", "D. SQL"], "answer": "A"},
        {"question": "3. What is NLP?", "options": ["A. Neural Learning Processing", "B. Natural Language Processing", "C. Non Linear Programming", "D. Neural Language Prediction"], "answer": "B"},
        {"question": "4. What is the goal of AI?", "options": ["A. Simulate human intelligence", "B. Replace databases", "C. Increase storage", "D. None"], "answer": "A"},
        {"question": "5. Which is a type of AI?", "options": ["A. Narrow AI", "B. Broad AI", "C. General AI", "D. Both A and C"], "answer": "D"},
        {"question": "6. Which model mimics the human brain?", "options": ["A. Neural Network", "B. Regression", "C. Decision Tree", "D. SVM"], "answer": "A"},
        {"question": "7. What is a chatbot?", "options": ["A. AI program for conversation", "B. Email system", "C. Browser", "D. Code editor"], "answer": "A"},
        {"question": "8. Which algorithm is used for classification?", "options": ["A. KNN", "B. K-Means", "C. PCA", "D. Regression"], "answer": "A"},
        {"question": "9. What is reinforcement learning?", "options": ["A. Learning by reward and penalty", "B. Learning from labels", "C. Unsupervised learning", "D. Deep learning"], "answer": "A"},
        {"question": "10. Which AI technique uses layers?", "options": ["A. Deep Learning", "B. Reinforcement", "C. NLP", "D. SVM"], "answer": "A"},
    ],
  };

  const categories = Object.keys(questionBank);
  // ------------------ STATES ------------------

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  // ----------- Handle Category Select -----------
  const handleStart = () => {
    if (!name.trim() || !category) {
      alert("Please enter your name and select a category before starting.");
      return;
    }
    setStartQuiz(true);
  };

  const handleAnswer = (questionText, selectedOptionLetter) => {
    setAnswers((prev) => ({
      ...prev,
      [questionText]: selectedOptionLetter,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questionBank[category].forEach((q) => {
      if (answers[q.question] === q.answer) newScore++;
    });
    setScore(newScore);
    setShowCertificate(true);
  };

  const handleRestart = () => {
    setName("");
    setCategory("");
    setAnswers({});
    setScore(null);
    setStartQuiz(false);
    setCurrentQuestion(0);
    setShowCertificate(false);
  };

  // ------------------ START PAGE ------------------
  if (!startQuiz) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>🎓 Techmaa Quiz Application</h1>
        <img
  src={TechmaaLogo}   // ✅ matches import
  alt="Techmaa Logo"
  style={{
    width: "180px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)"
  }}
        />
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "10px", width: "250px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ padding: "10px", borderRadius: "8px", width: "270px" }}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleStart}
          style={{
            marginTop: "25px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Start Quiz 🚀
        </button>
      </div>
    );
  }

  // ------------------ CERTIFICATE PAGE ------------------
  if (showCertificate) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", border: "2px solid #ccc", padding: "40px", borderRadius: "15px", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <img src="/TechmaaLogo.jpeg" alt="Techmaa Logo" style={{ width: "120px", margin: "15px auto", display: "block" }} />

        <h1>🏆 Certificate of Achievement</h1>
        <p>This is to certify that</p>
        <h2 style={{ color: "#007bff" }}>{name}</h2>
        <p>has successfully completed the quiz on</p>
        <h3>{category}</h3>
        <p>
          with a score of <strong>{score} / {questionBank[category].length}</strong>
        </p>
        <p>Congratulations! 🎉</p>
        <button
          onClick={handleRestart}
          style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#28a745", color: "white", borderRadius: "8px", border: "none" }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  // ------------------ QUIZ PAGE ------------------
  const question = questionBank[category][currentQuestion];

  return (
    <div style={{ textAlign: "center", marginTop: "30px", maxWidth: "600px", margin: "auto" }}>
      <h2>{category} Quiz</h2>
      <p>
        Welcome, <strong>{name}</strong>! Question {currentQuestion + 1} of {questionBank[category].length}
      </p>

      <div style={{ margin: "20px 0" }}>
        <h3>{question.question}</h3>
        {question.options.map((option, i) => {
          const optionLetter = String.fromCharCode(65 + i); // A, B, C, D
          const selected = answers[question.question] === optionLetter;

          return (
            <button
              key={i}
              onClick={() => handleAnswer(question.question, optionLetter)}
              style={{
                background: selected ? "#90ee90" : "#f0f0f0",
                margin: "5px",
                padding: "10px 15px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                cursor: "pointer",
                display: "block",
                width: "100%",
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: "20px" }}>
        {currentQuestion > 0 && (
          <button
            onClick={() => setCurrentQuestion((prev) => prev - 1)}
            style={{ margin: "5px", padding: "10px 15px" }}
          >
            ⬅ Previous
          </button>
        )}
        {currentQuestion < questionBank[category].length - 1 && (
          <button
            onClick={() => setCurrentQuestion((prev) => prev + 1)}
            style={{ margin: "5px", padding: "10px 15px" }}
          >
            Next ➡
          </button>
        )}
        {currentQuestion === questionBank[category].length - 1 && (
          <button
            onClick={handleSubmit}
            style={{
              margin: "5px",
              padding: "10px 15px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "8px",
              border: "none",
            }}
          >
            Submit ✅
          </button>
        )}
      </div>
    </div>
  );
}

export default App;