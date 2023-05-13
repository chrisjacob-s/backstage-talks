window.addEventListener("scroll", function () {
  let colorChangeSection = document.getElementById("issue-5");
  let threshold = colorChangeSection.offsetTop; // Adjust the threshold as needed

  if (window.pageYOffset >= threshold) {
    document.body.classList.add("teal-bg");
  } else {
    document.body.classList.remove("teal-bg");
  }
});

window.addEventListener("scroll", function () {
  let colorChangeSection = document.getElementById("issue-4");
  let threshold = colorChangeSection.offsetTop; // Adjust the threshold as needed

  if (window.pageYOffset >= threshold) {
    document.body.classList.add("orange-bg");
  } else {
    document.body.classList.remove("orange-bg");
  }
});

window.addEventListener("scroll", function () {
  let colorChangeSection = document.getElementById("issue-3");
  let threshold = colorChangeSection.offsetTop; // Adjust the threshold as needed

  if (window.pageYOffset >= threshold) {
    document.body.classList.add("yellow-bg");
  } else {
    document.body.classList.remove("yellow-bg");
  }
});

window.addEventListener("scroll", function () {
  let colorChangeSection = document.getElementById("issue-2");
  let threshold = colorChangeSection.offsetTop; // Adjust the threshold as needed

  if (window.pageYOffset >= threshold) {
    document.body.classList.add("blue-bg");
  } else {
    document.body.classList.remove("blue-bg");
  }
});

window.addEventListener("scroll", function () {
  let colorChangeSection = document.getElementById("issue-1");
  let threshold = colorChangeSection.offsetTop; // Adjust the threshold as needed

  if (window.pageYOffset >= threshold) {
    document.body.classList.add("red-bg");
  } else {
    document.body.classList.remove("red-bg");
  }
});
