import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import displayButtons from "./displayButtons.js";

const followers_per_page = 10;

export default function paginate(followers) {
  const totNumPages = Math.ceil(followers.length / followers_per_page);

  const newArray = Array.from({ length: totNumPages }, (_, index) => {
    const start = index * followers_per_page;
    const tempFollowers = followers.slice(start, start + followers_per_page);
    return tempFollowers;
  });
  return newArray;
}
