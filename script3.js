function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        let output = [];
	let answers;

	// for each question...
	for(let i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

const theQuestions = [
    {
        question: "True or False: You do not need HHSC approval before taking the certification exam.",
        answers: {
            a: 'True',
            b: 'False'
        },

        correctAnswer: 'b'
    },

    {
        question: "Which of the following could affect your eligibility to become an aide?",
        answers: {
            a: "Having a valid driver's license",
            b: "A criminal conviction related to abuse or neglect",
            c: "Completing a training program"
        },
        correctAnswer: 'b'
    },

       { 
        question: "What is the purpose of a Criminal History Evaluation Letter?",
        answers: {
            a: "To confirm you passed your aide exam",
            b: "To schedule a fingerprinting appointment",
            c: "To determine in advance if your background may disqualify you"
        },

        correctAnswer: 'c'
    },

    {
        question: "What is the difference between Health & Safety Code and Occupations Code?",
        answers: {
            a: "Health & Safety Code relates to employment eligibility, while Occupations Code outlines review/appeal procedures",
            b: "There is no difference",
            c: "Both Laws are about fingerprint scanning"
        },

        correctAnswer: 'a'
    }

        

];