// Load questions from JSON
const questionsData = [
  {
    "question": "Do you often feel anxious without an obvious reason?",
    "answers": [
      "Yes, almost all the time, and it interferes with my life.",
      "Yes, but usually I can cope with it.",
      "Only in some cases when there is a specific reason.",
      "No, rarely or never."
    ]
  },
  {
    "question": "Do you often wake up at night because of anxious thoughts?",
    "answers": [
      "Yes, almost every night.",
      "Sometimes, if I had a tough day.",
      "Rarely, but it has happened.",
      "Never, I sleep well."
    ]
  },
  {
    "question": "Do you feel tension in your muscles or headaches due to worry?",
    "answers": [
      "Yes, almost all the time.",
      "Yes, but only in stressful situations.",
      "Sometimes, but it goes away quickly.",
      "No, it has never happened."
    ]
  },
  // Add more questions here...
];

// Get the container element where questions will be displayed
const questionsContainer = document.getElementById('questions-container');

// Render the questions dynamically
function renderQuestions() {
  // Loop through each question in the questionsData array
  questionsData.forEach((questionData, index) => {
    // Create a div element for each question
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    // Create an h3 element for the question text
    const questionText = document.createElement('h3');
    questionText.textContent = `${index + 1}. ${questionData.question}`;
    questionDiv.appendChild(questionText);

    // For each answer choice, create radio buttons and labels
    questionData.answers.forEach((answer, i) => {
      const answerLabel = document.createElement('label');
      const answerInput = document.createElement('input');
      answerInput.type = 'radio';
      answerInput.name = `question${index}`; // Each group of radio buttons needs a unique name
      answerInput.value = answer;
      
      // Append the radio input and label text to the label
      answerLabel.appendChild(answerInput);
      answerLabel.appendChild(document.createTextNode(answer));

      // Append the label to the question div, followed by a line break
      questionDiv.appendChild(answerLabel);
      questionDiv.appendChild(document.createElement('br'));
    });

    // Append the question div to the questions container
    questionsContainer.appendChild(questionDiv);
  });
}

// Handle the form submission to collect answers
document.getElementById('submit-btn').addEventListener('click', function() {
  const answers = [];
  
  // Loop through each question to gather the selected answers
  questionsData.forEach((_, index) => {
    // Find the checked radio button for each question
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    
    if (selectedAnswer) {
      // If an answer is selected, push the answer value to the answers array
      answers.push(selectedAnswer.value);
    } else {
      // If no answer is selected, record "No answer selected"
      answers.push("No answer selected");
    }
  });

  // Display the answers in the console (you can send it to Firebase or another server)
  console.log(answers);
  
  // Show an alert notifying the user that their responses have been submitted
  alert("Your responses have been submitted!");
});

// Initialize the page by rendering questions when the page loads
renderQuestions();

// Function to toggle the visibility of content for each disorder
function toggleContent(disorderId) {
  const content = document.getElementById(disorderId);  // Get the content div
  const arrow = content.previousElementSibling.querySelector('.arrow');  // Get the arrow icon
  
  // Check if the content is currently hidden or shown
  if (content.style.display === "none" || content.style.display === "") {
    // Show the content if it's currently hidden
    content.style.display = "block";
    arrow.textContent = "▲";  // Change the arrow to up when content is visible
  } else {
    // Hide the content if it's currently shown
    content.style.display = "none";
    arrow.textContent = "▼";  // Change the arrow to down when content is hidden
  }
}
