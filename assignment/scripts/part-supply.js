console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');

let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');

let supplyChanges = [3, 5, -6, 0, 7, 11];

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');

console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');

let removedValue = supplyChanges.pop();
console.log(removedValue);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');

supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

for (let i=0; i < supplyChanges.length; i++) {
    let x = supplyChanges[i];
    if (x > 0) {
        console.log(`Added`, x, `parts.`);
    } else if (x === 0) {
        console.log('No Change.');
    } else {
        console.log(`Removed`, x, `parts.`);
    }
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

for (let x of supplyChanges) {
    if (x > 0) {
        console.log(`Added`, x, `parts.`);
    } else if (x === 0) {
        console.log('No Change.');
    } else if (x < 0) {
        console.log(`Removed`, x ,`parts.`);
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

/* The arithmetic got me with that -6. I was trying to subtract a negative number, which kept adding it instead, 
and I didn't catch it until later. So, I made sure to just add the -6, which would simply subtract it. 
That was sneaky haha */
let sum = 0;
for (let i=0; i < supplyChanges.length; i++) {
    sum = sum + supplyChanges[i];
}
console.log(sum);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

/* 
Just going to explain my logic for myself. while parts is greater than the remainder (0), it will
subtract 7 from the total number of parts and add 1 box. This code will push it down to 12 parts 
at some point in the loop. 
Now, since it is still more than 0, it will subtract 7 from the 12, then add another box, BUT since parts is 
less than 7 at this moment in the loop (5), it meets the following if statement, making remainder equal to 
the number of parts left over. Now, the number of parts is no longer greater than the remainder, 
so it breaks the loop.
*/

let boxes = 0;
let parts = 572;
let remainder = 0;

while (parts > remainder) {
        parts -= 7;
        boxes++;
   if (parts < 7) {
        remainder = parts;
    }
}
console.log(`Boxes filled:`, boxes);
console.log(`Remaining parts:`, remainder);



