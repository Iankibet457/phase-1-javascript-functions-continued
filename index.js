// code your solution here
// const mondayWork = function(activity){
//     if (activity == true){
//         return `This Monday, I will ${activity}.`
//     }else  {
//         return "This Monday, I will go to the office."
//     }

// }
// console.log(mondayWork("swim"))
function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`

}
function saturdayFun(activity='roller-skate'){
    return`This Saturday, I want to ${activity}!`


}

function wrapAdjective(activity="special"){
    
    return function result(activity2=""){
        return`You are ${activity}${activity2}${activity}!`
    }
}