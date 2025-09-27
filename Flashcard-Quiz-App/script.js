let flashcards = [
  { question: "What is a CPU?", answer: "Central Processing Unit, the brain of the computer that performs instructions." },
  { question: "What is RAM?", answer: "Random Access Memory, used for temporarily storing data and programs in use." },
  { question: "What is ROM?", answer: "Read-Only Memory, permanent storage used to store firmware." },
  { question: "What is the difference between compiler and interpreter?", answer: "Compiler translates the whole code into machine code before execution, interpreter translates line by line during execution." },
  { question: "Define Operating System.", answer: "Software that manages computer hardware and provides services for computer programs." },
  { question: "What is a LAN?", answer: "Local Area Network, a network covering a small geographic area like a home or office." },
  { question: "What is a WAN?", answer: "Wide Area Network, a network that spans large geographical areas." },
  { question: "What is the function of ALU?", answer: "Arithmetic Logic Unit performs arithmetic and logical operations in the CPU." },
  { question: "Define cache memory.", answer: "Small, fast memory located close to the CPU to speed up data access." },
  { question: "What is virtual memory?", answer: "A memory management technique where disk storage is used as additional RAM." },
  { question: "What is a pointer in programming?", answer: "A variable that stores the memory address of another variable." },
  { question: "Difference between stack and queue?", answer: "Stack is LIFO (Last In First Out); Queue is FIFO (First In First Out)." },
  { question: "What is pipelining in CPU?", answer: "Technique where multiple instructions are overlapped in execution to improve performance." },
  { question: "Define deadlock.", answer: "A situation in operating systems where two or more processes are unable to proceed because each is waiting for the other to release resources." },
  { question: "What is cloud computing?", answer: "Delivery of computing services over the internet including storage, processing, and networking." },
  { question: "What is a database?", answer: "Organized collection of data, usually stored and accessed electronically." },
  { question: "Difference between HTTP and HTTPS?", answer: "HTTPS is secure (encrypted via SSL/TLS), HTTP is not secure." },
  { question: "What is a firewall?", answer: "A network security device or software that monitors and controls incoming and outgoing traffic." },
  { question: "What is an API?", answer: "Application Programming Interface, a set of rules that allows applications to communicate with each other." },
  { question: "What is recursion?", answer: "A programming technique where a function calls itself." }
];


let currentIndex = 0;
let showingAnswer = false;

const cardText = document.getElementById("card-text");
const showAnswerBtn = document.getElementById("show-answer");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const addBtn = document.getElementById("add-card");
const updateBtn = document.getElementById("update-card");
const deleteBtn = document.getElementById("delete-card");
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

function displayCard(index) {
  showingAnswer = false;
  if(flashcards.length === 0){
    cardText.textContent = "No flashcards available!";
    return;
  }
  cardText.textContent = flashcards[index].question;
}

showAnswerBtn.addEventListener("click", () => {
  if(flashcards.length === 0) return;
  showingAnswer = !showingAnswer;
  cardText.textContent = showingAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question;
  showAnswerBtn.textContent = showingAnswer ? "Show Question" : "Show Answer";
});

prevBtn.addEventListener("click", () => {
  if(flashcards.length === 0) return;
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  displayCard(currentIndex);
});

nextBtn.addEventListener("click", () => {
  if(flashcards.length === 0) return;
  currentIndex = (currentIndex + 1) % flashcards.length;
  displayCard(currentIndex);
});

addBtn.addEventListener("click", () => {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  if(question && answer){
    flashcards.push({ question, answer });
    questionInput.value = "";
    answerInput.value = "";
    currentIndex = flashcards.length - 1;
    displayCard(currentIndex);
  } else {
    alert("Please enter both question and answer.");
  }
});

updateBtn.addEventListener("click", () => {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  if(flashcards.length === 0) return;
  if(question && answer){
    flashcards[currentIndex] = { question, answer };
    displayCard(currentIndex);
  } else {
    alert("Please enter both question and answer to update.");
  }
});

deleteBtn.addEventListener("click", () => {
  if(flashcards.length === 0) return;
  flashcards.splice(currentIndex, 1);
  currentIndex = 0;
  displayCard(currentIndex);
});

displayCard(currentIndex);
