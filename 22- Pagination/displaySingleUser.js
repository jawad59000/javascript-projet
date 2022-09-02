export default async function displayDrink(user) {
  //   console.log(user);
  const {
    avatar_url: image,
    html_url: link,
    login,
    name,
    id,
    events_url: events,
  } = user;
  const showUserNoName = `
             <img
                src="${image}"
              />
              <div class="info">
              <h2> <span>Sorry i don't have a name</span> </h2><br>
              <h3>My pseudo is :  <span>${login}</span> </h3>
              <h3>Link to my GitHub : <span>${link}</span> </h3>
              <h3>My id : <span>${id}</span> </h3>
              <h3>Link to my events : <span>${events}</span> </h3>

                <a hreF="./index.html"><button>ALL Users</button></a>
              </div>
            `;

  if (!name) {
    document.querySelector(".soloUser").innerHTML = showUserNoName;
  } else {
    const showUser = `
              <img
                src="${image}"
              />
              <div class="info">
              <h2> <span>${name}</span> </h2><br>
              <h3>My pseudo is :  <span>${login}</span> </h3>
              <h3>Link to my GitHub : <span>${link}</span> </h3>
              <h3>My id : <span>${id}</span> </h3>
              <h3>Link to my events : <span>${events}</span> </h3>

                <a hreF="./index.html"><button>ALL Users</button></a>
              </div>
            `;
    document.querySelector(".soloUser").innerHTML = showUser;
  }
}
