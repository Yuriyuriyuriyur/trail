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

// ランダムに選択された問題のインデックスを記録する変数
let randomQuestionIndex;

// 正解した問題と答えを記録する配列
let correctAnswers = [];

// 選択された問題を保持する変数
let selectedQuestions = [];

// 現在の正解数
let correctCount = 0;



// HTML要素の取得
const startButton = document.getElementById('startButton');
const questionElement = document.getElementById('question');
const hintElement = document.getElementById('hint');
const inputField = document.getElementById('inputField');
const scoreElement = document.getElementById('scoreValue');
const timerElement = document.getElementById('timer');
const endScreen = document.getElementById('endScreen');
const finalScoreElement = document.getElementById('finalScore');
const questionsAndAnswersElement = document.getElementById('questionsAndAnswers');
const skipButton = document.getElementById('skipButton');
const endRoll = document.getElementById('endRoll');


document.addEventListener('DOMContentLoaded', function() {
  // endRoll要素を取得
  const endRoll = document.getElementById('endRoll');

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
    
    // 問題を選択して表示する
    selectedQuestions = selectRandomQuestions();
    displayQuestion();
    
    

    // タイマーを開始
    startTimer();
});

// 問題を表示する関数
function displayQuestion() {
  const questionNumber = currentQuestionIndex + 1; // 問題番号を計算する
  questionElement.textContent = `Question ${questionNumber}: ${selectedQuestions[currentQuestionIndex].definition}`;
  hintElement.textContent = ''; // ヒントをクリアする
}




// スキップボタンがクリックされたときの処理
skipButton.addEventListener('click', function() {
    skipQuestion();
});

// 問題を選択する関数
function selectRandomQuestions() {
    // 問題をシャッフル
    questions.sort(() => Math.random() - 0.5);
    // 最初の10問を選択
    return questions.slice(0, 10);
}

// 問題を表示する関数
function displayQuestion() {
    questionElement.textContent = selectedQuestions[currentQuestionIndex].definition;
    hintElement.textContent = ''; // ヒントをクリアする
}

// 正解の音声を再生する関数
function playCorrectSound() {
    const audio = new Audio('correct.mp3'); // 正解音声ファイルのパス
    audio.play();
}

// 不正解の音声を再生する関数
function playIncorrectSound() {
    const audio = new Audio('incorrect.mp3'); // 不正解音声ファイルのパス
    audio.play();
}

// 入力フィールドに入力があったときに実行する処理
inputField.addEventListener('input', function(event) {
    questionStartTime = Date.now(); // 問題の開始時間を更新
    checkAnswer(); // 答えをチェック
});

// 入力フィールドでエンターキーが押されたときの処理
inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); // デフォルトのエンターキーの動作を無効化する
      questionStartTime = Date.now(); // 問題の開始時間を更新
      const userAnswer = inputField.value.trim().toLowerCase();
      const correctAnswer = selectedQuestions[currentQuestionIndex].answer.toLowerCase();
      const questionDefinition = selectedQuestions[currentQuestionIndex].definition.toLowerCase();
      // ユーザーの回答が正しいかをチェック
      if (userAnswer === correctAnswer || userAnswer === questionDefinition) {
          // 正解した場合の処理
          // スコアの更新などを行う
          // 正解時の音声を再生
          playCorrectSound();
          correctCount++; // 正解数をインクリメント
          // 次の問題へ移動する
          currentQuestionIndex++;
          if (currentQuestionIndex < selectedQuestions.length) {
              displayQuestion(); // 次の問題を表示
              inputField.value = ''; // 入力フィールドをクリア
              questionStartTime = Date.now(); // 問題の開始時間を更新
          } else {
              endGame(); // 最後の問題の場合はゲームを終了する
          }
      } else {
          // 不正解の場合の処理
          // 不正解時の音声を再生
          playIncorrectSound();
          // ここで不正解の場合の追加の処理を行う（例えば、不正解カウントのインクリメントなど）
      }
  }
});






// 答えをチェックする関数
function checkAnswer() {
  const userAnswer = inputField.value.trim().toLowerCase();
  const correctAnswer = selectedQuestions[currentQuestionIndex].answer.toLowerCase();
  const questionText = selectedQuestions[currentQuestionIndex].definition.toLowerCase();
  // ユーザーの回答が正しいかをチェック
  if (userAnswer === correctAnswer || userAnswer === questionText) {
      // ヒント表示前に正解した場合のスコアの計算
      if (Date.now() - questionStartTime < hintTime * 1000) {
          score += 10 * bonusMultiplier; // ヒント表示前に正解した場合のスコア
      } else {
          score += 10; // 正解した場合のスコア
      }
      scoreElement.textContent = score; // スコアを更新
      // 問題に正解したら残り時間に5秒追加
      timeLeft += 5;
      timerElement.textContent = 'Time Left: ' + timeLeft + 's'; // タイマーを更新
      // 正解した問題を記録
      correctAnswers.push(selectedQuestions[currentQuestionIndex]);
      // 正解時の音声を再生
      playCorrectSound();
      // 次の問題へ移動する
      currentQuestionIndex++;
      if (currentQuestionIndex < selectedQuestions.length) {
          displayQuestion(); // 次の問題を表示
          inputField.value = ''; // 入力フィールドをクリア
          questionStartTime = Date.now(); // 問題の開始時間を更新
      } else {
          endGame(); // 最後の問題の場合はゲームを終了する
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
    hintElement.textContent = "Hint: " + selectedQuestions[currentQuestionIndex].hint;
}

// ゲーム中に正解されたすべての問題と答えを表示する関数
function displayCorrectAnswers() {
  const correctAnswersHeader = document.createElement('h3');
  correctAnswersHeader.textContent = 'Correct Answers:';
  questionsAndAnswersElement.appendChild(correctAnswersHeader);
  correctAnswers.forEach((question, index) => {
      const qa = document.createElement('div');
      qa.textContent = `Question ${index + 1}: ${question.definition} - Answer: `;
      const answerSpan = document.createElement('span');
      answerSpan.textContent = question.answer;
      answerSpan.classList.add('answer'); // 答えのスタイルを適用するクラスを追加
      qa.appendChild(answerSpan);
      questionsAndAnswersElement.appendChild(qa);
  });
}

// ゲーム終了時の処理を行う関数
function endGame() {
  clearInterval(timer); // タイマーを停止
  score += timeLeft * 1; // 残り時間をスコアに加算
  endScreen.style.display = 'block'; // ゲーム終了画面を表示
  finalScoreElement.textContent = score; // 最終スコアを表示
  displayCorrectAnswers(); // 正解された問題と答えを表示
  // 問題文、テキストボックス、残り時間、スコア、ヒントを非表示にする
  questionElement.style.display = 'none';
  inputField.style.display = 'none';
  timerElement.style.display = 'none';
  scoreElement.style.display = 'none'; // スコアを非表示にする
  hintElement.style.display = 'none'; // ヒントを非表示にする
  skipButton.style.display = 'none';
  
  // スコアが200以上の場合のみエンドロールを表示
        if (score >= 200) {
            // 音楽を再生
            const bgMusic = document.getElementById('bgMusic');
            bgMusic.play();
            // エンドロールを表示
            endRoll.style.display = 'block';
        } else {
            // スコアが200未満の場合はエンドロールを非表示にする
            endRoll.style.display = 'none';
        }
    }

    // 以降のコードも修正せずに続行してください
});
