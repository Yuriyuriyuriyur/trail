// 問題を直接定義する
const quizQuestions = {
    "EASY": [ 
            { definition: "profit", answer: "profit", hint: "Pronunciation: /ˈprɒfɪt/ Synonyms: earnings, income, gain" },
            { definition: "liquid", answer: "liquid", hint: "Pronunciation: /ˈlɪkwɪd/ Synonyms: fluid, watery, runny" },
            { definition: "prove", answer: "prove", hint: "Pronunciation: /pruːv/ Synonyms: show, demonstrate, verify" },
            { definition: "provide", answer: "provide", hint: "Pronunciation: /prəˈvaɪd/ Synonyms: supply, furnish, offer" },
            { definition: "right", answer: "right", hint: "Pronunciation: /raɪt/ Synonyms: entitlement, privilege, prerogative" },
            { definition: "blow", answer: "blow", hint: "Pronunciation: /bləʊ/ Synonyms: gust, breeze, blast" },
            { definition: "break the habit", answer: "break the habit", hint: "Pronunciation: /breɪk ðə ˈhæbɪt/ Synonyms: quit, overcome, abandon the habit" },
            { definition: "chemical", answer: "chemical", hint: "Pronunciation: /ˈkɛmɪkəl/ Synonyms: substance, compound, element" },
            { definition: "chemistry", answer: "chemistry", hint: "Pronunciation: /ˈkɛmɪstri/ Synonyms: properties, composition, makeup" },
            { definition: "client", answer: "client", hint: "Pronunciation: /ˈklaɪənt/ Synonyms: customer, patron, buyer" },
            { definition: "come up with", answer: "come up with", hint: "Pronunciation: /kʌm ʌp wɪð/ Synonyms: devise, brainstorm, propose" },
            { definition: "staff", answer: "staff", hint: "Pronunciation: /stæf/ Synonyms: employees, workforce, personnel" },
            { definition: "stress", answer: "stress", hint: "Pronunciation: /strɛs/ Synonyms: pressure, tension, strain" },
            { definition: "such", answer: "such", hint: "Pronunciation: /sʌtʃ/ Synonyms: like, similar, suchlike" },
            { definition: "surface", answer: "surface", hint: "Pronunciation: /ˈsɜːfɪs/ Synonyms: exterior, outer layer, top" },
            { definition: "risk", answer: "risk", hint: "Pronunciation: /rɪsk/ Synonyms: danger, hazard, threat" },
            { definition: "quality", answer: "quality", hint: "Pronunciation: /ˈkwɒlɪti/ Synonyms: standard, grade, excellence" },
            { definition: "modern", answer: "modern", hint: "Pronunciation: /ˈmɒdən/ Synonyms: contemporary, up-to-date, current" },
            { definition: "role", answer: "role", hint: "Pronunciation: /rəʊl/ Synonyms: function, duty, purpose" },
            { definition: "normal", answer: "normal", hint: "Pronunciation: /ˈnɔːməl/ Synonyms: typical, usual, standard" },
            { definition: "notice", answer: "notice", hint: "Pronunciation: /ˈnəʊtɪs/ Synonyms: observe, perceive, detect" },
            { definition: "on the other hand", answer: "on the other hand", hint: "Pronunciation: /ɒn ðə ˈʌðə hænd/ Synonyms: conversely, however, nevertheless" },
            { definition: "announce", answer: "announce", hint: "Pronunciation: /əˈnaʊns/ Synonyms: declare, proclaim, disclose" },
            { definition: "as long as", answer: "as long as", hint: "Pronunciation: /əz lɒŋ əz/ Synonyms: if, provided that, so long as" },
            { definition: "attend", answer: "attend", hint: "Pronunciation: /əˈtɛnd/ Synonyms: go to, participate in, be present at" },
            { definition: "section", answer: "section", hint: "Pronunciation: /ˈsɛkʃən/ Synonyms: part, division, segment" },
            { definition: "attitude", answer: "attitude", hint: "Pronunciation: /ˈætɪˌtud/ Synonyms: opinion, perspective, viewpoint" },
            { definition: "behaviors", answer: "behaviors", hint: "Pronunciation: /bɪˈheɪvjərz/ Synonyms: actions, conduct, deeds" },
            { definition: "multitask", answer: "multitask", hint: "Pronunciation: /ˈmʌltiˌtæsk/ Synonyms: juggle, handle multiple tasks, do several things at once" },
            { definition: "accurate", answer: "accurate", hint: "Pronunciation: /ˈækjʊrət/ Synonyms: precise, correct, exact" },
            { definition: "gain", answer: "gain", hint: "Pronunciation: /ɡeɪn/ Synonyms: acquire, obtain, achieve" },
            { definition: "consistent", answer: "consistent", hint: "Pronunciation: /kənˈsɪstənt/ Synonyms: steady, reliable, uniform" },
            { definition: "entrepreneur", answer: "entrepreneur", hint: "Pronunciation: /ˌɑːntrəprəˈnɜːr/ Synonyms: businessperson, founder, innovator" },
            { definition: "chart", answer: "chart", hint: "Pronunciation: /tʃɑːt/ Synonyms: graph, diagram, table" },
            { definition: "context", answer: "context", hint: "Pronunciation: /ˈkɒntekst/ Synonyms: circumstances, situation, background" },
            { definition: "italic", answer: "italic", hint: "Pronunciation: /ɪˈtælɪk/ Synonyms: slanted, oblique, inclined" },
            { definition: "motivation", answer: "motivation", hint: "Pronunciation: /ˌməʊtɪˈveɪʃən/ Synonyms: incentive, drive, encouragement" },
            { definition: "eventually", answer: "eventually", hint: "Pronunciation: /ɪˈvɛntʃuəli/ Synonyms: ultimately, finally, in the end" },
            { definition: "besides", answer: "besides", hint: "Pronunciation: /bɪˈsaɪdz/ Synonyms: in addition, moreover, furthermore" },
            { definition: "vote", answer: "vote", hint: "Pronunciation: /vəʊt/ Synonyms: ballot, cast a ballot, express a choice" },
            //Great Expectations
            {"definition": "blacksmith", "answer": "blacksmith", "hint": "(n), /ˈblækˌsmɪθ/, Synonyms: metalworker, smith, forger"},
            {"definition": "candle", "answer": "candle", "hint": "(n), /ˈkændl/, Synonyms: taper, light, torch" },
            {"definition": "cheek", "answer": "cheek", "hint": "(n), /tʃiːk/,  Synonyms: cheekbone, jowl, side"},
            {"definition": "cloak", "answer": "cloak", "hint": "(n), /kloʊk/, Synonyms: cape, mantle, shroud" },
            {"definition": "convict", "answer": "convict", "hint": "(n), /ˈkɒnvɪkt/, Synonyms: prisoner, inmate, offender"},
            {"definition": "disgust", "answer": "disgust", "hint": "(n), /dɪsˈɡʌst/, Synonyms: revulsion, aversion, repulsion"},
            {"definition": "expectation", "answer": "expectation", "hint": "(n), /ˌɪkspɛkˈteɪʃən/, Synonyms: anticipation, hope, outlook"},
            {"definition": "file", "answer": "file", "hint": "(n), /faɪl/, Synonyms: document, dossier, folder"},
            {"definition": "firmly", "answer": "firmly", "hint": "(adv), /ˈfɜːrmlɪ/, Synonyms: securely, tightly, strongly"},
            {"definition": "forge", "answer": "forge", "hint": "(n), /fɔːrdʒ/, Synonyms: smithy, workshop, foundry"},
            {"definition": "gravy", "answer": "gravy", "hint": "(n), /ˈɡreɪvi/, Synonyms: sauce, jus, broth"},
            {"definition": "hang", "answer": "hang", "hint": "(v), /hæŋ/, Synonyms: suspend, dangle, swing"},
            {"definition": "housekeeper", "answer": "housekeeper", "hint": "(n), /ˈhaʊsˌkiːpər/, Synonyms: maid, domestic, caretaker"},
            {"definition": "invest", "answer": "invest", "hint": "(v), /ɪnˈvɛst/, Synonyms: put money into, fund, finance"},
            {"definition": "nod", "answer": "nod", "hint": "(v, )/nɒd/, Synonyms: shake"},
            {"definition": "partner", "answer": "partner", "hint": "(n), /ˈpɑːtnər/, Synonyms: associate, collaborator, colleague"},
            {"definition": "pie", "answer": "pie", "hint": "(n), /paɪ/, Synonyms: tart, pastry, quiche"},
            {"definition": "roast", "answer": "roast", "hint": "(v), /roʊst/, Synonyms: grill, bake, broil"},
            {"definition": "rum", "answer": "rum", "hint": "(n), /rʌm/, Synonyms: liquor, spirit, booze"},
            {"definition": "scold", "answer": "scold", "hint": "(v), /skoʊld/, Synonyms: admonish"}
    
        
    ],
    "NORMAL": [
        { "definition": "a substance, such as water, that is not solid or a gas and that can be poured easily", "answer": "liquid", "hint": "Pronunciation: /ˈlɪkwɪd/, Synonyms: fluid, watery, runny" },
        { "definition": "to show a particular result after a period of time", "answer": "prove", "hint": "Pronunciation: /pruːv/, Synonyms: show, demonstrate, verify" },
        { "definition": "to give someone something that they need", "answer": "provide", "hint": "Pronunciation: /prəˈvaɪd/, Synonyms: supply, furnish, offer" },
        { "definition": "a person can expect to be treated in a fair, or legal way, or to have the things that are necessary for life", "answer": "right", "hint": "Pronunciation: /raɪt/, Synonyms: entitlement, privilege, prerogative" },
        { "definition": "to move and make currents of air, or make something move on a current of air", "answer": "blow", "hint": "Pronunciation: /bləʊ/, Synonyms: gust, breeze, blast" },
        { "definition": "to stop doing something that you do regularly, especially something that you should not do", "answer": "break the habit", "hint": "Pronunciation: /breɪk ðə ˈhæbɪt/, Synonyms: quit, overcome, abandon the habit" },
        { "definition": "any basic substance that is used in or produced by a reaction", "answer": "chemical", "hint": "Pronunciation: /ˈkɛmɪkəl/, Synonyms: substance, compound, element" },
        { "definition": "the basic characteristics of a substance and the ways in which it reacts or combines with other substances", "answer": "chemistry", "hint": "Pronunciation: /ˈkɛmɪstri/, Synonyms: properties, composition, makeup" },
        { "definition": "a customer or someone who receives services", "answer": "client", "hint": "Pronunciation: /ˈklaɪənt/, Synonyms: customer, patron, buyer" },
        { "definition": "to suggest or think of an idea or plan", "answer": "come up with", "hint": "Pronunciation: /kʌm ʌp wɪð/, Synonyms: devise, brainstorm, propose" },
        { "definition": "the group of people who work for an organization", "answer": "staff", "hint": "Pronunciation: /stæf/, Synonyms: employees, workforce, personnel" },
        { "definition": "great worry caused by a difficult situation, or something that causes this condition", "answer": "stress", "hint": "Pronunciation: /strɛs/, Synonyms: pressure, tension, strain" },
        { "definition": "of a particular or similar type", "answer": "such", "hint": "Pronunciation: /sʌtʃ/, Synonyms: like, similar, suchlike" },
        { "definition": "the outer or top part or layer of something", "answer": "surface", "hint": "Pronunciation: /ˈsɜːfɪs/, Synonyms: exterior, outer layer, top" },
        { "definition": "the possibility of something bad happening", "answer": "risk", "hint": "Pronunciation: /rɪsk/, Synonyms: danger, hazard, threat" },
        { "definition": "how good or bad something is", "answer": "quality", "hint": "Pronunciation: /ˈkwɒlɪti/, Synonyms: standard, grade, excellence" },
        { "definition": "designed and made using the most recent ideas and methods", "answer": "modern", "hint": "Pronunciation: /ˈmɒdən/, Synonyms: contemporary, up-to-date, current" },
        { "definition": "the position or purpose that someone or something has in a situation, society, or relationship", "answer": "role", "hint": "Pronunciation: /rəʊl/, Synonyms: function, duty, purpose" },
        { "definition": "ordinary or usual; the same as would be expected", "answer": "normal", "hint": "Pronunciation: /ˈnɔːməl/, Synonyms: typical, usual, standard" },
        { "definition": "to see or become conscious of something or someone", "answer": "notice", "hint": "Pronunciation: /ˈnəʊtɪs/, Synonyms: observe, perceive, detect" },
        { "definition": "used when you are comparing two different facts or two opposite ways of thinking about a situation", "answer": "on the other hand", "hint": "Pronunciation: /ɒn ðə ˈʌðə hænd/, Synonyms: conversely, however, nevertheless" },
        { "definition": "to make something known or tell people about something officially", "answer": "announce", "hint": "Pronunciation: /əˈnaʊns/, Synonyms: declare, proclaim, disclose" },
        { "definition": "to put condition of time on an action", "answer": "as long as", "hint": "Pronunciation: /əz lɒŋ əz/, Synonyms: if, provided that, so long as" },
        { "definition": "to go to an event, place, etc", "answer": "attend", "hint": "Pronunciation: /əˈtɛnd/, Synonyms: go to, participate in, be present at" },
        { "definition": "one of the parts that something is divided into", "answer": "section", "hint": "Pronunciation: /ˈsɛkʃən/, Synonyms: part, division, segment" },
        { "definition": "a feeling or opinion about something or someone, or a way of behaving that is caused by this", "answer": "attitude", "hint": "Pronunciation: /ˈætɪˌtud/, Synonyms: opinion, perspective, viewpoint" },
        { "definition": "the way that a person, an animal, a substance, etc. behaves in a particular situation or under particular conditions", "answer": "behaviors", "hint": "Pronunciation: /bɪˈheɪvjərz/, Synonyms: actions, conduct, deeds" },
        { "definition": "to do more than one thing at a time", "answer": "multitask", "hint": "Pronunciation: /ˈmʌltiˌtæsk/, Synonyms: juggle, handle multiple tasks, do several things at once" },
        { "definition": "correct, exact, and without any mistakes", "answer": "accurate", "hint": "Pronunciation: /ˈækjʊrət/, Synonyms: precise, correct, exact" },
        { "definition": "to get something that is useful, that gives you an advantage, or that is in some way positive, especially over a period of time", "answer": "gain", "hint": "Pronunciation: /ɡeɪn/, Synonyms: acquire, obtain, achieve" },
        { "definition": "always behaving or happening in a similar, especially positive, way", "answer": "consistent", "hint": "Pronunciation: /kənˈsɪstənt/, Synonyms: steady, reliable, uniform" },
        { "definition": "someone who starts their own business, especially when this involves seeing a new idea", "answer": "entrepreneur", "hint": "Pronunciation: /ˌɑːntrəprəˈnɜːr/, Synonyms: businessperson, founder, innovator" },
        { "definition": "a drawing that shows information in a simple way, often using lines and curves to show amounts", "answer": "chart", "hint": "Pronunciation: /tʃɑːt/, Synonyms: graph, diagram, table" },
        { "definition": "the text or speech that comes immediately before and after a particular phrase or piece of text and helps to explain its meaning", "answer": "context", "hint": "Pronunciation: /ˈkɒntekst/, Synonyms: circumstances, situation, background" },
        { "definition": "printed or written in italics", "answer": "italic", "hint": "Pronunciation: /ɪˈtælɪk/, Synonyms: slanted, oblique, inclined" },
        { "definition": "the need or reason for doing something", "answer": "motivation", "hint": "Pronunciation: /ˌməʊtɪˈveɪʃən/, Synonyms: incentive, drive, encouragement" },
        { "definition": "in the end, especially after a long time or a lot of effort, problems", "answer": "eventually", "hint": "Pronunciation: /ɪˈvɛntʃuəli/, Synonyms: ultimately, finally, in the end" },
        { "definition": "in addition to; also", "answer": "besides", "hint": "Pronunciation: /bɪˈsaɪdz/, Synonyms: in addition, moreover, furthermore" },
        { "definition": "to express your choice or opinion, especially by officially writing a mark on a paper or by raising your hand or speaking in a meeting", "answer": "vote", "hint": "Pronunciation: /vəʊt/, Synonyms: ballot, cast a ballot, express a choice" },
        //Great Ecpectations
        {"definition": "someone whose job is to make and repair things made of iron", "answer": "blacksmith", "hint": "(n), /ˈblækˌsmɪθ/, Synonyms: metalworker, smith, forger"},
        {"definition": "a round stick of wax which burns to give light", "answer": "candle", "hint": "(n), /ˈkændl/, Synonyms: taper, light, torch" },
        {"definition": "the side of your face", "answer": "cheek", "hint": "(n), /tʃiːk/,  Synonyms: cheekbone, jowl, side"},
        {"definition": "a sleeveless coat that hangs loosely from the shoulders", "answer": "cloak", "hint": "(n), /kloʊk/, Synonyms: cape, mantle, shroud" },
        {"definition": "a criminal who has been found guilty of a crime and sent to prison", "answer": "convict", "hint": "(n), /ˈkɒnvɪkt/, Synonyms: prisoner, inmate, offender"},
        {"definition": "a strong feeling of dislike", "answer": "disgust", "hint": "(n), /dɪsˈɡʌst/, Synonyms: revulsion, aversion, repulsion"},
        {"definition": "something expected; a belief that something will happen", "answer": "expectation", "hint": "(n), /ˌɪkspɛkˈteɪʃən/, Synonyms: anticipation, hope, outlook"},
        {"definition": "a metal tool with a rough surface for cutting or smoothing things", "answer": "file", "hint": "(n), /faɪl/, Synonyms: document, dossier, folder"},
        {"definition": "in a strong and determined way", "answer": "firmly", "hint": "(adv), /ˈfɜːrmlɪ/, Synonyms: securely, tightly, strongly"},
        {"definition": "a place, used by a blacksmith, where metals are heated and shaped", "answer": "forge", "hint": "(n), /fɔːrdʒ/, Synonyms: smithy, workshop, foundry"},
        {"definition": "a thick sauce poured over meat", "answer": "gravy", "hint": "(n), /ˈɡreɪvi/, Synonyms: sauce, jus, broth"},
        {"definition": "to kill someone by hanging them from a rope around the neck", "answer": "hang", "hint": "(v), /hæŋ/, Synonyms: suspend, dangle, swing"},
        {"definition": "a person employed to manage a house", "answer": "housekeeper", "hint": "(n), /ˈhaʊsˌkiːpər/, Synonyms: maid, domestic, caretaker"},
        {"definition": "to put money into a bank or business", "answer": "invest", "hint": "(v), /ɪnˈvɛst/, Synonyms: put money into, fund, finance"},
        {"definition": "to move your head up and down in agreement", "answer": "nod", "hint": "(v, )/nɒd/, Synonyms: shake"},
        {"definition": "a person who works with another in a shared business", "answer": "partner", "hint": "(n), /ˈpɑːtnər/, Synonyms: associate, collaborator, colleague"},
        {"definition": "a fruit or meat dish, which can be eaten hot or cold", "answer": "pie", "hint": "(n), /paɪ/, Synonyms: tart, pastry, quiche"},
        {"definition": "to cook meat in the oven", "answer": "roast", "hint": "(v), /roʊst/, Synonyms: grill, bake, broil"},
        {"definition": "a strong alcoholic drink, often drunk hot", "answer": "rum", "hint": "(n), /rʌm/, Synonyms: liquor, spirit, booze"},
        {"definition": "to speak angrily to someone, because they have done something wrong", "answer": "scold", "hint": "(v), /skoʊld/, Synonyms: admonish"}

    ]
    
    
};
// 現在の問題のインデックス
let currentQuestionIndex = 0;

// スコア
let score = 0;

// 制限時間（秒）
let timeLeft = 60;

// ヒントが表示されるまでの時間（秒）
const hintTime = 5;

// ヒント表示前に正解した場合のスコア倍率
const bonusMultiplier = 1.5;

// 問題の開始時間を記録する変数
let questionStartTime = Date.now();

// ランダムに選択された問題のインデックスを記録する変数
let randomQuestionIndex;

// 正解した問題と答えを記録する配列
let correctAnswers = [];



// 現在の正解数
let correctCount = 0;

// 問題を格納する変数を定義します
let questions = [];

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

  // EASYボタンのクリックイベントリスナーを追加
  document.getElementById("easyButton").addEventListener("click", function() {
    startGame("EASY");
});

// NORMALボタンのクリックイベントリスナーを追加
document.getElementById("normalButton").addEventListener("click", function() {
    startGame("NORMAL");
});
// タイマーを開始する関数
function startTimer() {
    timer = setInterval(updateTimer, 1000);
}


function selectQuestionsByDifficulty(difficulty) {
    let selectedQuestions = [];
    if (difficulty === "EASY") {
        selectedQuestions = quizQuestions["EASY"] || [];
    } else if (difficulty === "NORMAL") {
        selectedQuestions = quizQuestions["NORMAL"] || [];
    }
     // 問題をシャッフルする
    return selectedQuestions = shuffleQuestions(selectedQuestions);
}



function startGame(difficulty) {
    const startScreen = document.getElementById('startScreen');
    startScreen.style.display = 'none';

    const gameContent = document.getElementById('gameContent');
    gameContent.style.display = 'block';

    questions = selectQuestionsByDifficulty(difficulty); // シャッフル済みの10問題を取得

    displayQuestion();

    startTimer();
}

// 問題をシャッフルする関数
function shuffleQuestions(questions) {
    const shuffledQuestions = [...questions];
    shuffledQuestions.sort(() => Math.random() - 0.5);
    return shuffledQuestions;
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex]; // selectedQuestions から questions に変更
    questionElement.textContent = currentQuestion.definition;
    hintElement.textContent = '';
}



// スキップボタンがクリックされたときの処理
skipButton.addEventListener('click', function() {
    // スキップ処理を行う
    // 例えば、currentQuestionIndex をインクリメントして次の問題を表示する
    currentQuestionIndex++;
    if (correctCount < questions.length) {
        displayQuestion(); // 次の問題を表示
        inputField.value = ''; // 入力フィールドをクリア
        questionStartTime = Date.now(); // 問題の開始時間を更新
    } else {
        endGame(); // 最後の問題の場合はゲームを終了する
    }
});



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
        const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
        const questionDefinition = questions[currentQuestionIndex].definition.toLowerCase();
        // ユーザーの回答が正しいかをチェック
        if (userAnswer === correctAnswer || userAnswer === questionDefinition) {
            // 正解した場合の処理
            // 正解時の音声を再生
            playCorrectSound();
            correctCount++; // 正解数をインクリメント
            // 次の問題へ移動する
            currentQuestionIndex++;
            if (correctCount < 10) {
                displayQuestion(); // 次の問題を表示
                inputField.value = ''; // 入力フィールドをクリア
                questionStartTime = Date.now(); // 問題の開始時間を更新
                correctCount++;
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
        // 問題に正解したら残り時間に5秒追加
        timeLeft += 5;
        timerElement.textContent = 'Time Left: ' + timeLeft + 's'; // タイマーを更新
        // 正解した問題を記録
        correctAnswers.push(questions[currentQuestionIndex]);
        // 正解時の音声を再生
        playCorrectSound();
        // 次の問題へ移動する
        currentQuestionIndex++;
        if (correctCount < 10) {
            displayQuestion(); // 次の問題を表示
            inputField.value = ''; // 入力フィールドをクリア
            questionStartTime = Date.now(); // 問題の開始時間を更新
            correctCount++;
        } else {
            endGame(); // 最後の問題の場合はゲームを終了する
        }
    } else {
        
    }
}

// タイマーを更新する関数
function updateTimer() {
    timerElement.textContent = 'Time Left: ' + timeLeft + 's';
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - questionStartTime) / 1000); // 経過時間（秒）
    // ヒントを表示する時間になったらヒントを表示
    if (elapsedTime >= hintTime) {
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
  
  // スコアが250以上の場合のみエンドロールを表示
        if (score >= 250) {
            questionsAndAnswersElement.style.display = 'none'
            // 音楽を再生
            const bgMusic = document.getElementById('bgMusic');
            bgMusic.play();
            // エンドロールを表示
            endRoll.style.display = 'block';
        } else {
            // スコアが250未満の場合はエンドロールを非表示にする
            endRoll.style.display = 'none';
        }
    }
})

