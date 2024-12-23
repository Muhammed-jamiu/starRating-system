const outPut = document.querySelector(".output");
const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
  star.starResult = index + 1;

  star.addEventListener("click", (e) => {
    console.log(index);
    console.log(star.starResult);
    outPut.innerHTML = `You Rated this ${e.target.starResult} star`;
    stars.forEach((star, index) => {
      if (index < e.target.starResult) {
        console.log(index);

        star.classList.add("orange");
      } else {
        star.classList.remove("orange");
      }
    });
  });
});
