const container = document.querySelector(".container");
const endOfTheList = document.querySelector(".end_of_the_list");
const loaderElement = document.querySelector(".loader");
const errorElement = document.querySelector(".error");

//states
let start = 0;
let end = 0;
isError = false;
isLoading = true;
isEndOfTheContent = false;

//get post count based on the screen height
function calculateNumberOfElement() {}

//toggle error
function toggleError(state) {
  errorElement.style.display = state ? "none" : "block";
  isError = state;
}

//toggle loading
function toggleLoading(state) {
  errorElement.style.display = state ? "none" : "block";
  isLoading = state;
}

//add post to list
function addPost(posts = []) {}

//fetch post with start and end
async function getPost(start, end) {
  try {
    toggleError(false);
    toggleLoading(true);

    const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_end=${end}`;
    const response = await fetch(url);
    const posts = response.json();

    addPost(posts);
  } catch (error) {
    toggleError(true);
  } finally {
    toggleLoading(false);
  }
}

//scrolling listener handler

//event listener for scrolling
