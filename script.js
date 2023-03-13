const reviews = [
  {
    id: 1,
    name: "Sardor",
    job: "Web Developer",
    img: "./Images/Kitobxon Coder new logo.png",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Damir",
    job: "Software Engineer",
    img: "./Images/SF Profile.jpg",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora necessitatibus sed laboriosam id laudantium ipsa molestiae explicabo harum, rerum reprehenderit!",
  },
  {
    id: 3,
    name: "Dilshod",
    job: "Economist",
    img: "./Images/photo_2022-06-14_14-38-11.jpg",
    text: "repudiandae beatae asperiores fuga? Corporis eligendi voluptate ratione dolorum. Perspiciatis quam sed obcaecati distinctio suscipit placeat inventore harum blanditiis!",
  },
];

const reviewerPhoto = document.querySelector(".img-container img");
const reviewerName = document.querySelector(".reviewer-name");
const reviewerJob = document.querySelector(".reviewer-job");
const review = document.querySelector(".review");
const toLeftBtn = document.querySelector(".to-left");
const toRightBtn = document.querySelector(".to-right");
const randomReview = document.querySelector(".choose-random");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  let item = reviews[person];
  reviewerPhoto.src = item.img;
  reviewerName.textContent = item.name;
  reviewerJob.textContent = item.job;
  review.textContent = item.text;
}

toRightBtn.addEventListener("click", () => {
  if (currentItem == reviews.length - 1) {
    currentItem = 0;
  } else {
    currentItem++;
  }
  showPerson(currentItem);
});

toLeftBtn.addEventListener("click", () => {
  if (currentItem == 0) {
    currentItem = reviews.length - 1;
  } else {
    currentItem--;
  }
  showPerson(currentItem);
});

randomReview.addEventListener("click", () => {
  let currentItem = Math.trunc(Math.random() * 3);
  showPerson(currentItem);
});
