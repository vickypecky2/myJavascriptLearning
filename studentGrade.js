// let = studentGrade
// let number = 10;
// console.log("we/'re learning about escaping characters!")
 
// let studentGrade = studentNAme;
// console.log('studentGrade');


    // let  avgmark= 0;

    // for (let i = 0; i < studentGrade.length; i++) {
    //     let avgmark += studentgrade;
        
    
    function gradeSystem(studentGrade) {
        // console.log( "get studentGrade");     
        let studGrade = avgrScore;

    if (studGrade <= 100 && studGrade >=70) {
        console.log( "gradeScore: 'A', Excellent!");
    } else if (studGrade <= 60 && studGrade >= 69) {
        console.log("gradeScore: 'B', Good!");
    } else if (studGrade <= 50 && studGrade >= 59) {
        console.log("gradeScore: 'C', Average!");
    } else if (studGrade <= 45 && studGrade >= 49) {
        console.log("gradeScore: 'D', fair!");
    }else if (studGrade >45) {
        console.log("gradeScore: 'F', Fair!");
    }
}
    gradeSystem(studentGrade);

// ********************************factorial calculation*************//
function factorial(n) {
    if (n > 0 && n <= 1) {
        return 1;
    }
    else {
        return n*factorial(n-1);
    }
}

//***********************************repeat number from 1-100 */
// using while loop
while (num < 100) {
    let num =+ 1;
    console.log(num);
}

// using for loop
for (let num = 0; num <= 100; num++) {
    // const element = array[num];
    console.log(num);
}



