function gradeCalculator()
{
    var iAssignments = document.getElementById("assignments").value * .5;
    var iGroupProject = document.getElementById("groupProjects").value * .1;
    var iQuizzes = document.getElementById("quizzes").value * .1;
    var iExams = document.getElementById("exams").value * .2;
    var iIntex = document.getElementById("intex").value * .1;

    var finalGrade = iAssignments + iGroupProject + iQuizzes + iExams + iIntex;

    var sOutput = "Your final grade in the class is " + finalGrade + "%. Hope you're okay with that.";

    document.getElementById("gradeOutput").innerHTML = sOutput;
}