export function ageCalculator(year, month, day) {
    const now = new Date();
const currentMonth = now.getMonth()+1;
const currentDay =now.getDate();

    let age = now.getFullYear() - year;
    if (month>currentMonth||(month=== currentMonth && day>currentDay)){
        age =age-1;
    }
        return age;

    }

const newDate = ageCalculator(2000, 12, 25);
console.log(newDate);



