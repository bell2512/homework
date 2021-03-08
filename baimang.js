//bai4
clothes = ['Jeans', 'T-Shirt', 'Socks'];
choices = ['C', 'R', 'U', 'D'];
let input;

while (true) {
    input = String(prompt(`what do you want to C, R, U, D`));

    if (input === 'R') {
        console.log('The current items are:');
        for (let i = 0; i < sanPham.length; i++) { 
            console.log(`${i + 1}`. input[i]);
            alert(input[i]);
        }
    }
    else if (input === 'C') {
        let newItem = String(prompt('Enter the new name of the new item: '));
        choices.push(newItem);
        alert('Done');

    }
    else if (input === 'U') {
        let update = Number(prompt('Enter position you want to update: '));
        let newName = String(prompt('Enter new name: '));
        clothes[update] = newName;
        alert('Done');
    }
    else if (input === 'D') {
        let Delete = Number(prompt('Enter the position you want to delete: '));
        clothes.splice(Delete, 1);
        alert('Done');
    }

    else  {
        alert('This command is not supported');
        break;

    }

}

//bai5
let input= String(prompt('Enter a sequence of Number, separated by commas (,) '));
input = input.split(','); 
console.log(input);
let sum = 0;
for (let i = 0; i < input.length; i++) {
    sum = sum + Number(input[i]);

}
alert(`The sum of them is ${sum}`);

//bai6
let input= String(prompt('Enter a sequence of number, separated by ","'));
input = input.split(',');
console.log(input);
let min = input[0];
for (let i = 0; i <= input-1; i++) {
    if (input[i] < min) {
        min = input[i];
    }
}
alert(`The smallest number is ${min}`);

//bai7
const num = [3, 4, 6, -9, 10, -88, 2];
console.log(num);
let input = Number(prompt(' Enter a number: '));
if (num.indexOf(input) < 0) {
    alert(`${input} not found`);
}
else if (num.indexOf(input) >= 0) {
    alert(`${input} is found in index`);
}