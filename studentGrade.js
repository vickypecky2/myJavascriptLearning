// let = studentGrade
// let number = 10;
// console.log("we/'re learning about escaping characters!")
 
// let studentGrade = studentNAme;
// console.log('studentGrade');


    // let  avgmark= 0;

    // for (let i = 0; i < studentGrade.length; i++) {
    //     let avgmark += studentgrade;
        
    
    function gradeSystem(studGrade) {
        // console.log( "get studentGrade");     
        // let studGrade = avgrScore;

    if (studGrade <= 100 && studGrade >=70) {
        console.log( "gradeScore: 'A', Excellent!");
    } else if (studGrade <= 69 && studGrade >= 60) {
        console.log("gradeScore: 'B', Good!");
    } else if (studGrade <= 59 && studGrade >= 50) {
        console.log("gradeScore: 'C', Average!");
    } else if (studGrade <= 49 && studGrade >= 45) {
        console.log("gradeScore: 'D', pass!");
    }else if (studGrade < 45 && studGrade >=40) {
        console.log("gradeScore: 'E', Fair!");
    }else if (studGrade < 40 && studGrade >=0)
       console.log("gradeScore: 'F', Fail");
    else {
      console.log("invalid score!")
    }
}
    // gradeSystem(studentGrade);




