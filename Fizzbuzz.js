function fizzBuzz (numbers) {
    console.log('Welcome to FizzBuzz!');

    // const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    for (let i=0; i<numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers % 5 === 0) {
            numbers[i] = 'FizzBuzz';

        }

        else if (numbers[i] % 3 === 0) {
            numbers[i] = 'Fizz';
        }

        else if (numbers[i] % 5 === 0) {
            numbers[i] = 'Buzz';
        }
        
    }

    return numbers;
}

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(fizzBuzz(numbers));
