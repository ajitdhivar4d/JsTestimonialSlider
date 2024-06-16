const testimoinals = [
  {
    name: "syan chadwick",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " I love apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
  },
  {
    name: "roni tizma",
    photoUrl:
      "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money.",
  },
  {
    name: "bolsman chan",
    photoUrl:
      "https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I highly recommend apple. It has been so important for us as we continue to grow our company.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimoinals[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimoinals.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
