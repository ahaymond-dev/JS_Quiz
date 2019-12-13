$(document).ready(function() {
    console.log("this page works")

    const questions = [
{ 
    title: "Question 1",
    choices: ["a", "b", "c", "d"],
    answer: "b",
},
{ 
    title: "Question 2",
    choices: ["a", "b", "c", "d"],
    answer: "a",
},
{ 
    title: "Question 3",
    choices: ["a", "b", "c", "d"],
    answer: "c",
},
{ 
    title: "Question 4",
    choices: ["a", "b", "c", "d"],
    answer: "a",
},
{ 
    title: "Question 5",
    choices: ["a", "b", "c", "d"],
    answer: "d",
}
];

$("#submit").click(function(){
        for(let i = 0; i < questions.length; i++) {
            const question = $("<div>");
            $(question).addClass("my-4 text-center");
            $(question).attr("data-letter", questions[i.title]);
            $(question).text(questions[i.title]);
            $(question).appendTo("#spot");
            const option = $("<div>");
            $(option).addClass("my-4 text-center")
            $(option).attr("data-letter", questions[i.options]);
            $(option).text(questions[i.options]);
            $(option).appendTo("#spot");
            console.log(option);
            console.log(quesion);


        
        
        
        
        
        
        
        };

        




    
    
    
    


    
});














});

