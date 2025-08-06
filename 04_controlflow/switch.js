// Syntax of switch case
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// Weekdays

// if we do not use break in the cases then when a case is matched all the code within the case and all the other cases after it will be executed except default.
let weekday=7// Taking Monday as the day 1
switch (weekday) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid Entry")
        break;
}