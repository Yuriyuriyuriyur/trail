const questions = [
    { definition: "A small insect that flies and bites", answer: "Mosquito", hint: "It makes a buzzing sound" },
{ definition: "A sweet, edible fruit produced by a tree", answer: "Apple", hint: "Red, green, or yellow skin" },
{ definition: "A common domesticated animal kept for companionship or as a pet", answer: "Dog", hint: "Known as man's best friend" },
{ definition: "A large, strong bird with a hooked beak for tearing flesh", answer: "Eagle", hint: "Symbol of freedom and power" },
{ definition: "A round object that bounces and is used in many sports", answer: "Ball", hint: "Used in basketball, soccer, and tennis" },
{ definition: "A long, thin, cylindrical object used for writing or drawing", answer: "Pencil", hint: "Usually made of wood and graphite" },
{ definition: "A device used for listening to music or audio", answer: "Headphones", hint: "Worn over the ears" },
{ definition: "A type of vehicle with two wheels that is powered by pedals", answer: "Bicycle", hint: "Used for transportation and exercise" },
{ definition: "A piece of furniture with a flat top and one or more legs, used for eating or working on", answer: "Table", hint: "Found in kitchens, dining rooms, and offices" },
{ definition: "A small, flat, thin piece of metal with numbers or letters on it, used to open locks", answer: "Key", hint: "Used to unlock doors and start cars" },
{ definition: "A round container with a lid used for cooking food", answer: "Pot", hint: "Used to boil water and cook soup" },
{ definition: "A small, thin piece of metal with a sharp point, used for sewing", answer: "Needle", hint: "Used with thread to sew clothes" },
{ definition: "A small, portable electronic device used for communication", answer: "Phone", hint: "Can make calls, send messages, and access the internet" },
{ definition: "A large, strong animal with a trunk and tusks", answer: "Elephant", hint: "Largest land animal" },
{ definition: "A flying insect known for producing honey", answer: "Bee", hint: "Collects pollen from flowers" },
{ definition: "A round, flat object used for throwing and catching", answer: "Frisbee", hint: "Thrown in parks and beaches for fun" },
{ definition: "A small, cylindrical object used for writing or drawing with ink", answer: "Pen", hint: "Comes in different colors" },
{ definition: "A piece of furniture with a flat top and four legs, used for eating meals", answer: "Chair", hint: "Found around dining tables" },
{ definition: "A small, thin object used for fastening clothes", answer: "Button", hint: "Sewn onto shirts and jackets" },
{ definition: "A tool with a sharp blade used for cutting", answer: "Knife", hint: "Used in kitchens for chopping and slicing" },
  ];
  
// 現在の問題のインデックス
let currentQuestionIndex = 0;

// スコア
let score = 0;

// 制限時間（秒）
let timeLeft = 60;

// ヒントが表示されるまでの時間（秒）
const hintTime = 10;

// ヒント表示前に正解した場合のスコア倍率
const bonusMultiplier = 1.5;

// 問題の開始時間を記録する変数
let questionStartTime = Date.now();

let randomQuestionIndex; // ランダムに選択された問題のインデックスを記録する変数

// 正解した問題と答えを記録する配列
let correctAnswers = [];
// HTML要素の取得

const startButton = document.getElementById('startButton');// スタートボタンの要素を取得
const questionElement = document.getElementById('question');
const hintElement = document.getElementById('hint');
const inputField = document.getElementById('inputField');
const scoreElement = document.getElementById('scoreValue');
const timerElement = document.getElementById('timer');
const endScreen = document.getElementById('endScreen');
const finalScoreElement = document.getElementById('finalScore');
const questionsAndAnswersElement = document.getElementById('questionsAndAnswers');


// タイマーを開始する関数
function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

// スタートボタンがクリックされたときの処理
startButton.addEventListener('click', function() {
    // startScreen要素を非表示にする
    const startScreen = document.getElementById('startScreen');
    startScreen.style.display = 'none';
    
    // gameContent要素を表示する
    const gameContent = document.getElementById('gameContent');
    gameContent.style.display = 'block';
     // タイマーを開始
     startTimer();
});


// 問題をシャッフルする関数
function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }

// 問題をシャッフルして、最初の問題を表示
shuffleQuestions(); // 問題をシャッフル
randomQuestionIndex = Math.floor(Math.random() * questions.length); // ランダムに問題を選択
displayQuestion(); // 最初の問題を表示

// 問題を表示する関数
function displayQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].definition;
  hintElement.textContent = ''; // ヒントをクリアする
}

// 答えをチェックする関数
function checkAnswer() {
  const userAnswer = inputField.value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
  const questionText = questions[currentQuestionIndex].definition.toLowerCase();

  // ユーザーの回答が正しいかをチェック
  if (userAnswer === correctAnswer || userAnswer === questionText) {
    // ヒント表示前に正解した場合のスコアの計算
    if (Date.now() - questionStartTime < hintTime * 1000) {
      score += 10 * bonusMultiplier; // ヒント表示前に正解した場合のスコア
    } else {
      score += 10; // 正解した場合のスコア
    }
    scoreElement.textContent = score; // スコアを更新

     // 問題に正解したら残り時間に2秒追加
     timeLeft += 1;
     if (timeLeft > 60) {
       timeLeft = 60; // 残り時間が60秒を超えないように制限
     }
     timerElement.textContent = 'Time Left: ' + timeLeft + 's'; // タイマーを更新

    // 正解した問題を記録
      correctAnswers.push(questions[currentQuestionIndex]);

    // 次の問題へ移動するか、ゲームを終了するかを決定
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion(); // 次の問題を表示
      inputField.value = ''; // 入力フィールドをクリア
    } else {
      clearInterval(timer); // タイマーを停止
      score += timeLeft * 1; // 残り時間をスコアに加算
      endGame(); // ゲームを終了
    }
  }
}

// タイマーを更新する関数
function updateTimer() {
  timerElement.textContent = 'Time Left: ' + timeLeft + 's';

  const currentTime = Date.now();
  const elapsedTime = Math.floor((currentTime - questionStartTime) / 1000); // 経過時間（秒）

  // ヒントを表示する時間になったらヒントを表示
  if (elapsedTime === hintTime) {
    displayHint();
  }

  // 時間切れの場合はゲームを終了
  if (timeLeft === 0) {
    clearInterval(timer); // タイマーを停止
    score += timeLeft * 1; // 残り時間をスコアに加算
    endGame(); // ゲームを終了
  } else {
    timeLeft--; // 残り時間を減らす
  }
}

// ヒントを表示する関数
function displayHint() {
  hintElement.textContent = "Hint: " + questions[currentQuestionIndex].hint;
}

// ゲーム中に正解されたすべての問題と答えを表示する関数
function displayCorrectAnswers() {
    const correctAnswersHeader = document.createElement('h3');
    correctAnswersHeader.textContent = 'Correct Answers:';
    questionsAndAnswersElement.appendChild(correctAnswersHeader);

    correctAnswers.forEach((question, index) => {
        const qa = document.createElement('div');
        qa.textContent = `Question ${index + 1}: ${question.definition} - Answer: ${question.answer}`;
        questionsAndAnswersElement.appendChild(qa);
    });
}

// ゲーム終了時の処理を行う関数
function endGame() {
    clearInterval(timer); // タイマーを停止
    score += timeLeft * 1; // 残り時間をスコアに加算
    endScreen.style.display = 'block'; // ゲーム終了画面を表示
    finalScoreElement.textContent = score; // スコアを表示
    displayCorrectAnswers(); // 正解された問題と答えを表示
    // 問題文、テキストボックス、残り時間、スコア、ヒントを非表示にする
    questionElement.style.display = 'none';
    inputField.style.display = 'none';
    timerElement.style.display = 'none';
    scoreElement.style.display = 'none'; // スコアを非表示にする
    hintElement.style.display = 'none'; // ヒントを非表示にする
}



// 入力フィールドに入力があったときに実行する処理
inputField.addEventListener('input', function(event) {
  questionStartTime = Date.now(); // 問題の開始時間を更新
  checkAnswer(); // 答えをチェック
});

