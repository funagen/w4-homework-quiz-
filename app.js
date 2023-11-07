const quiz = [
    {
    question:'ゲーム市場、最も売れたゲーム機は次のうちどれ',
        answers:[
            'スーバーファミコン',
            'プレイステーション',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct:    'ニンテンドーDS'
},    {
    question:'糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers:[
            'MOTHER2',
            'スーバーマリオブラザーズ３',
            'スーバードンキーコング',
            '星のカービー',
        ],
        correct:    'MOTHER2'
},    {
    question:'ファイナルファンタジーⅣの主人公の名前は？',
        answers:[
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct:    'セシル'
}
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
let handlerIndex = 0;
const setupQuiz = () => {
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex ++;
    }
}
setupQuiz();

document.getElementById('js-question').textContent = quiz[quizIndex].question;

const clickHandler = (e) => {
        if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('Good job');
        score++;
        } else {
        window.alert('惜しい！！');
        }
        quizIndex++;
        if(quizIndex < quizLength){
            setupQuiz();
        } else {
            window.alert('終了！あなたの正解数は'+ score + '/' + quizIndex + 'です。！');
        }
        };


while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
        });    
    handlerIndex++;
};
