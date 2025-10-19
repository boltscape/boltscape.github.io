// Set the total number of questions
var total = 7;
var question = new Array();

// Use a single choice array for simplicity
var choice = new Array();
for (var i = 1; i <= total; i++) {
    choice[i] = new Array();
}

var solution = new Array();

/* Phrases randomly displayed for a correct answer */
var compliments = new Array();
compliments[0] = "Purr-fect!";
compliments[1] = "You're the cat's meow!";
compliments[2] = "Great job, cool cat!";
compliments[3] = "You've got to be kitten me, that's right!";
compliments[4] = "Claw-some answer!";

/* Questions, choices, and solutions */

question[1] = "A group of cats is called a...";
choice[1][1] = "Pack";
choice[1][2] = "Herd";
choice[1][3] = "Clowder";
choice[1][4] = "School";
solution[1] = "c";

question[2] = "How many whiskers does the average cat have on each side of its face?";
choice[2][1] = "6";
choice[2][2] = "12";
choice[2][3] = "18";
choice[2][4] = "24";
solution[2] = "b";

question[3] = "What is a cat's most powerful sense?";
choice[3][1] = "Sight";
choice[3][2] = "Hearing";
choice[3][3] = "Taste";
choice[3][4] = "Smell";
solution[3] = "d";

question[4] = "Which of these common human foods is toxic to cats?";
choice[4][1] = "Chicken";
choice[4][2] = "Chocolate";
choice[4][3] = "Tuna";
choice[4][4] = "Cheese";
solution[4] = "b";

question[5] = "Cats can make over how many different sounds?";
choice[5][1] = "10";
choice[5][2] = "50";
choice[5][3] = "100";
choice[5][4] = "200";
solution[5] = "c";

question[6] = "What is the technical term for a 'hairball'?";
choice[6][1] = "Trichobezoar";
choice[6][2] = "Furballoma";
choice[6][3] = "Cattail";
choice[6][4] = "Gagglefluff";
solution[6] = "a";

question[7] = "A cat cannot taste which of the following flavors?";
choice[7][1] = "Salty";
choice[7][2] = "Sour";
choice[7][3] = "Sweetness";
choice[7][4] = "Bitter";
solution[7] = "c";