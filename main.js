/*constants*/

const minusSign = '/assets/images/icon-minus.svg';
const plusSign = '/assets/images/icon-plus.svg';


/*cached elements*/

const Question = document.querySelectorAll('.question');
const Answer = document.querySelectorAll('.answer');
const Icon = document.querySelectorAll('.icon');

/*event listener*/

Question.forEach((question,index) => {
    question.addEventListener('click', () => {
        toggleAnswer(index);
    })
})


/*functions*/

function toggleAnswer(index) {
   Answer[index].classList.toggle('show');
   Icon[index].src = Answer[index].classList.contains('show')? minusSign : plusSign;

    }




