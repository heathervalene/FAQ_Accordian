/*cached elements*/

const Question = document.querySelectorAll('.question');
const Answer = document.querySelectorAll('.answer');

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




