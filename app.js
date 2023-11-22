// Practical task 1
function calcRectangleArea(width, height){
    if(typeof width === 'number' && typeof height === 'number' && width != Nan && height != Nan){
        return width * height;
    } else{
        throw new TypeError('width/height must be a number');
    };
};

try{
    console.log(calcRectangleArea(2, 'abc'));
}catch(e){
    console.log(e.name, e.message);
};

// Practical task 2
function checkAge(age){
    try{
        if(age === 0) throw new Error('The field is empty ! Please enter your age')
        else if (isNaN(age)) throw new TypeError('Age must be a number')
        else if (age < 14) throw new RangeError('Age must be greater than or equal to 14')
        else console.log('Welcome');
    } catch(error){
        console.log(error.name, error.message);
    };
};
let age = +prompt('Please enter your age');

checkAge(age);

// Practical task 3
function showMonth(month){
    if(validMonth(month)){
        switch(month){
            case 1: return 'January';
            case 2: return 'February';
            case 3: return 'March';
            case 4: return 'April';
            case 5: return 'May';
            case 6: return 'June';
            case 7: return 'July';
            case 8: return 'August';
            case 9: return 'September';
            case 10: return 'October';
            case 11: return 'November';
            case 12: return 'December';
        }
    } else {
        throw new MonthException('Incorrect month number');
    };
};

function validMonth(month){
    if(month < 1 || month > 12 || isNaN(month) || typeof month !== 'number') return false
    else return month;
};

class MonthException extends Error{
    constructor(message){
        super();
        this.message = message;
        this.name = 'MonthException';
    };
};

try{
    console(showMonth('test'));
} catch(e){
    console.log(e.name, e.message)
}

// Practical task 4
function showUser(id){
        if(element > 0) return {id: id};
        throw new Error(`ID must not be negative: ${id}`);
}  

function showUsers(ids){
    let correctIds = [];
    for(element of ids) {
        try{
            correctIds.push(showUser(element));
        }catch(e){
            console.log(e.name, e.message);
        }
    };
    return correctIds;
};

console.log(showUsers([7, -12, 44, 22]))