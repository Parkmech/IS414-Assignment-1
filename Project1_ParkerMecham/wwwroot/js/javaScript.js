function gradeCalculator()
{
    var iAssignments = document.getElementById("assignments").value * .5;
    var iGroupProject = document.getElementById("groupProjects").value * .1;
    var iQuizzes = document.getElementById("quizzes").value * .1;
    var iExams = document.getElementById("exams").value * .2;
    var iIntex = document.getElementById("intex").value * .1;

    var finalGrade = iAssignments + iGroupProject + iQuizzes + iExams + iIntex;
    var letterGrade = "";

    if (finalGrade < 60) {
        letterGrade = "E";
    }
    if (finalGrade < 64 ) {
        letterGrade = "D-";
    }
    if (finalGrade < 67) {
        letterGrade = "D";
    }
    if (finalGrade < 70) {
        letterGrade = "D+";
    }
    if (finalGrade < 74) {
        letterGrade = "C-";
    }
    if (finalGrade < 77) {
        letterGrade = "C";
    }
    if (finalGrade < 80) {
        letterGrade = "C+";
    }
    if (finalGrade < 84) {
        letterGrade = "B-";
    }
    if (finalGrade < 87) {
        letterGrade = "B";
    }
    if (finalGrade < 90) {
        letterGrade = "B+";
    }
    if (finalGrade < 94) {
        letterGrade = "A-";
    }
    if (finalGrade >= 94) {
            letterGrade = "A";
    }
    
    var sOutput = "Your final grade in the class is " + finalGrade + "%. That's a(n) " + letterGrade + ". Hope you're okay with that.";

    document.getElementById("gradeOutput").innerHTML = sOutput;
}