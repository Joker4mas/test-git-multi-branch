const options = document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker")
const questionNumberSpan= document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const question = document.querySelector(".question");

const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];

//questions and options and answers
const questions = [
    {
        q:'The Technologies TMO, VAR, Hawk-eye and Cyclope feature in ?',
        options:['Traffic','WarFare','Sports','Surgery'],
        answer:2
    },
    {
        q:'Widely used in Africa, Opera mini is what sort of innovation?',
        options:['Crop Irrigation','Electric kit-car','School Singing','Mobile web Browser'],
        answer:4
    },
    {
        q:'Roughly how many years ago was fire-making technology devised?',
        options:['10,000yrs ago','50,000yrs ago','100,000yrs ago','500,000yrs ago'],
        answer:4
    },
    {
        q:'What now attracts bigger viewing audiences than soccer?',
        options:['Cricket','Basketball','American footbal','Computer Gaming'],
        answer:4
    },
    {
        q:'Which operator is used to assign a value to a variable?',
        options:['-','=','+','*'],
        answer:2
    },
]
//set questions and options and question number
totalQuestionSpan.innerHTML=questions.length;
function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
}

    function check(element){
        //Console.log(element.id)
        if (element.id==questions[questionIndex].answer){
            element.classList.add("success");
            updateAnswerTracker("success");
        }else{
            console.log("fail");
            element.classList.add("fail");
            updateAnswerTracker("fail");
        }
        disableOptions()
    }
    function disableOptions(){
        for (let i=0; i<options.length; i++){
            options[i].classList.add("disabled","success","fail");
           
        }
    }
    function enableOptions(){
        for (let i=0; i<options.length; i++){
            options[i].classList.remove("disabled");
            if (optins[i].id==questions[questionIndex].answer){
                options[i].classList.add("success");
            }
        }
    }
    function validate(){
        if(!optins[0].classList.contains("disabled"))
        {
            alert("Please Select one option")
        }else{
            enableOptions();
            randomQuestion();
        }
    }
    function next(){
        validate();
    }
function randomQuestion(){
   let randomNumber=Math.floor(Math.random()*questions.length);
   if (index==question.length){
       console("quiz over")
       console("index:"+ index);
   } 
   questionIndex=randomNumber;
    myArray.push(questionIndex);
    
    load();
}
 function answerTracker(){
     for (let i=0; i<questions.length; i++){
         const div=document.createElement("div")
         answerTracker.appendChild(div);
     }
 }
 function updateAnswerTracker(classNam){
    answerTrackerContainer.children[index-1].classList(classNam);
 }
window.onload=function(){
    randomQuestion();
    this.answerTracker();
}