// on load
	//start button is listed 
	
var questionsanswers = {
	questions : ["What is your name?", "What is your quest?", "What is your favorite color?", "What is the airspeed velocity of an unladen swallow?"]
	answers : 	[["King Arthur", "Sir Galahad", "Sir Lancelot", "Sir Loin"] , 
			 	["I seek the Holy Grail", "A sneaky, lowly snail", "For cheeks both cold and pale", "For sneaks in county jail"],
				["Yellow", "Green...no BLUE!!!", "Kittens", "7"],
				["African or European?", "20 knots when coconut-laden", "Swallows can't fly", "Spit"]]
}

var correct
var incorrect
var isStarted
var timesUp
var setInterval
var counter

	$("#button").on("click", function() {
	
	})

var random = Math.floor(Math.random() * questionsanswers.questions.length)


setInterval(counter(), 1000)
console.log(counter)

function counter() {
	counter++
}



var reset = function () {}
	isStarted = false
	timesUp = false
	correct = 0
	incorrect = 0
scramble the questions array and answers array keep the correct question/answer pairs	
for (i=0; i<array.length; i++)	


append(<button>) for answer
start button clicked
	changes out screen
	timer immediately starts counting down
	questions are listed
	responses with radio buttons are listed
	user clicks are recorded
	done button is displayed
time expires OR done button is pushed
	changes out screen
	displays All done!
	displays correct answers
	displays incorrect answers
	displays unanswered

					<div class="question" id="question">question</div>
					<div class="answers" id="answers">answers</div>

	//how inner.html() can replace whole page elements

	//how would you take the elements of an array and present them in random order? how to randomize an array

