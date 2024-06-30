function grade() {
const obtainedMarks = document.nodeValue
 
let grade;

    if (obtainedMarks<=100&&obtainedMarks>79) {
        grade=A
    }else if (obtainedMarks<=79&&obtainedMarks>=60) {
        grade=B
    }else if(obtainedMarks<=59&&obtainedMarks>49){
        grade=C
    }else if(obtainedMarks<=49&&obtainedMarks<=40){
        grade=D
    }else {grade=E}
     
    
}

