let test = new Map();

test.set('thomas', undefined);

console.log(test); // Map { 'thomas' => undefined }
console.log(test.get('thomas')); // undefined

test.set('thomas', 'bavon'); // Using set() method
test.set('moha', 'incr'); // Using set() method
test.set('adnan', 'lol'); // Using set() method
test.set('lydia', 'sisi'); // Using set() method

console.log(test); // Map { 'thomas' => 'bavon' }

const blabla = "incr";

for (const [key, value] of test.entries()) {
  if (value === blabla) {
	console.log(key);
  }
}