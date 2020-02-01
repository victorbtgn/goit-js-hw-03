console.log(`Task 2`);

const countProps = function(obj) {
  return Object.values(obj).length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

console.log(
  countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
    total: '500',
    core: 'i9',
  }),
);
