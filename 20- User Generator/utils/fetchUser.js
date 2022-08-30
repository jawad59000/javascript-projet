const url = "https://randomuser.me/api/";

export default async function fetchUser() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const user = data.results[0];

    const picture = user.picture.medium;
    const email = user.email;
    const age = user.dob.age;
    const number = user.cell;
    const passWord = user.login.password;
    const fullName = `${user.name.first} ${user.name.last}`;
    const adress = `${user.location.street.name} ${user.location.street.number}`;

    return { picture, fullName, email, age, adress, number, passWord };
  } catch (error) {}
}
