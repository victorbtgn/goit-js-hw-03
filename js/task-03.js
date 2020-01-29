const findBestEmployee = function(employees) {
  const entries = Object.entries(employees);
  let numberOfTasks = 0;
  let name;
  for (const entry of entries) {
    let key = entry[0];
    let value = entry[1];
    if (value > numberOfTasks) {
      numberOfTasks = value;
      name = key;
    }
  }
  return `${name}: ${numberOfTasks}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
    vader: 100500
  })
);
