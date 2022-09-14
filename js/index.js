
function insertZero() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        return;
    }
    else {
        document.querySelector('#output').value += '0';
    }
};

function insertOne() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '1';
    }
    else {
        document.querySelector('#output').value += '1';
    }
};

function insertTwo() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '2';
    }
    else {
        document.querySelector('#output').value += '2';
    }
};

function insertThree() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '3';
    }
    else {
        document.querySelector('#output').value += '3';
    }
};

function insertFour() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '4';
    }
    else {
        document.querySelector('#output').value += '4';
    }
};

function insertFive() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '5';
    }
    else {
        document.querySelector('#output').value += '5';
    }
};

function insertSix() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '6';
    }
    else {
        document.querySelector('#output').value += '6';
    }
};

function insertSeven() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '7';
    }
    else {
        document.querySelector('#output').value += '7';
    }
};

function insertEight() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '8';
    }
    else {
        document.querySelector('#output').value += '8';
    }
};

function insertNine() {
    let input = document.querySelector('#output').value;
    if((input[0] == '0') && (input.length == 1)) {
        document.querySelector('#output').value = '9';
    }
    else {
        document.querySelector('#output').value += '9';
    }
};

function insertDecimal() {
    let input = document.querySelector('#output').value;
    if(input.length == 0) {
        document.querySelector('#output').value = '0.';
        return;
    }

    for(let i = 0; i < input.length; i++) {
        if(input[i] == '.') {
            return;
        }
    }

    document.querySelector('#output').value += '.';
};

function clearOutput() {
    document.querySelector('#output').value = '';
};

function deleteLast() {
    let input = document.querySelector('#output').value;
    input = input.substring(0, input.length - 1);
    document.querySelector('#output').value = input;
};

function insertNeg() {
    let input = document.querySelector('#output').value;
    if (input[0] == '-') {
        input = input.substring(1, input.length);
    }
    else {
        input = '-' + input;
    }
    document.querySelector('#output').value = input;
}

function insertAdd() {
    let input = document.querySelector('#output').value;
    
    switch(input[input.length - 1]) {
        case '+':
        case '-':
        case '/':
        case 'x':
            break;
        default:
            input += '+';
    }
    document.querySelector('#output').value = input;
}

function insertSub() {
    let input = document.querySelector('#output').value;
    
    switch(input[input.length - 1]) {
        case '+':
        case '-':
        case '/':
        case 'x':
            break;
        default:
            input += '-';
    }
    document.querySelector('#output').value = input;
}

function insertMult() {
    let input = document.querySelector('#output').value;
    
    switch(input[input.length - 1]) {
        case '+':
        case '-':
        case '/':
        case 'x':
            break;
        default:
            input += '*';
    }
    document.querySelector('#output').value = input;
}

function insertDiv() {
    let input = document.querySelector('#output').value;
    
    switch(input[input.length - 1]) {
        case '+':
        case '-':
        case '/':
        case 'x':
            break;
        default:
            input += '/';
    }
    document.querySelector('#output').value = input;
}

function evaluateExp() {
    document.querySelector('#output').value = eval(document.querySelector('#output').value);
}