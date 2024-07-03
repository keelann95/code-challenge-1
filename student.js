function grade(obtainedMarks) {
  if (obtainedMarks<0 || obtainedMarks>100 || isNaN(obtainedMarks)) {
    
  }
   else if (obtainedMarks<=100&&obtainedMarks>79) {
        return  'A'
    }else if (obtainedMarks<=79&&obtainedMarks>=60) {
       return  'B'
    }else if(obtainedMarks<=59&&obtainedMarks>49){
        return 'C'
    }else if(obtainedMarks<=49&&obtainedMarks>=40){
        return 'D'
    }else { return  'E'}
     
    
}
console.log(grade(101));
