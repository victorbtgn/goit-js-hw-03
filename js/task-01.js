console.log(`Task 1`);

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';

// console.log(Object.entries(user));

user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(key, user[key]);
}
