/*cached elements*/

const Question = document.querySelector('.question');
const Answer = document.querySelector('.answer');

/*event listener*/

Question.forEach((question,index) => {
    question.addEventListener('click', () => {
        toggleAnswer(index);
    })
})


/*functions*/

function toggleAnswer(index) {
   Answer[index].classList.toggle('show');

    }




