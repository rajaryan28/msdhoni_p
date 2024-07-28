
let images= ["https://images.news9live.com/wp-content/uploads/2023/11/MS-Dhoni.jpg","https://www.livemint.com/lm-img/img/2024/04/13/600x338/CRICKET-IND-IPL-T20-CHENNAI-KOLKATA-67_1712974157938_1712974173388.jpg","https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/03/ms-dhoni-csk-1583303659.jpg","https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/05/06/972778-ms-dhoni.jpg","https://images.mykhel.com/img/2020/08/msdhoni1-1597583872.jpg","https://i.pinimg.com/originals/a8/cc/c6/a8ccc686949938bc3e3f5d4e51e64a28.jpg","https://www.wallpaperuse.com/wallp/25-254908_m.jpg","https://images.cnbctv18.com/wp-content/uploads/2022/07/MS-Dhoni.jpg","https://st1.latestly.com/wp-content/uploads/2019/09/MS-Dhoni.jpg","https://img.theweek.in/content/dam/week/news/sports/images/2019/6/2/dhoni-wc-india-afp.jpg","https://st3.cricketcountry.com/wp-content/uploads/cricket/b69895f6f92d5a46b7b6d5ff121d42f2.jpeg","https://p.imgci.com/db/PICTURES/CMS/307700/307702.jpg","https://www.sportzcraazy.com/wp-content/uploads/2019/02/ms-dhoni-test-batting.jpg"]



  function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const newImageSrc = images[randomIndex];

    const imageElement = document.getElementById("aboutImg");
    imageElement.style.opacity = 0; // Set opacity to 0 for transition

    // Wait for transition to finish before updating src (optional)
    setTimeout(() => {
      imageElement.src = newImageSrc;
      imageElement.style.opacity = 1; // Reset opacity after transition
    }, 1000); // Adjust timeout as needed (consider transition duration)
  }


  // Start the loop for continuous image change
  setInterval(changeImage, 7000);



  //image slider

  
// const slider = document.querySelector('.slider');
// const slides = document.querySelector('.slides');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// let currentSlide = 0;
// const slideCount = slides.querySelectorAll('img').length;

// function moveSlide(slideIndex) {
//   slides.style.transform = `translateX(-${slideIndex * 100}%)`;
//   currentSlide = slideIndex;
// }

// prevBtn.addEventListener('click', () => {
//   currentSlide = currentSlide === 0 ? slideCount - 1 : currentSlide - 1;
//   moveSlide(currentSlide);
// });

// nextBtn.addEventListener('click', () => {
//   currentSlide = currentSlide === slideCount - 1 ? 0 : currentSlide + 1;
//   moveSlide(currentSlide);
// });

// let isAnimating = false; // Flag to track animation state

// nextBtn.addEventListener('click', () => {
//   if (!isAnimating) {
//     isAnimating = true; // Set flag to prevent multiple clicks
//     currentSlide = currentSlide === slideCount - 1 ? 0 : currentSlide + 1;
//     moveSlide(currentSlide);

//     // Additional code to reset animation after full cycle (optional)
//     setTimeout(() => {
//       isAnimating = false; // Reset flag after animation completes
//       currentSlide = 0; // Reset slide index to the first image
//       moveSlide(currentSlide); // Force animation to start from first image
//     }, animationDuration); // Adjust animation duration in milliseconds
//   }
// });



//counter 


const birthDate = new Date(1981, 6, 7); // Month is 0-indexed (June = 6)

function getAge() {
  const now = new Date();
  const milliseconds = now - birthDate;

  // Calculate years, months, and days as before
  const seconds = Math.floor(milliseconds / 1000);
  const days = Math.floor(seconds / (3600 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainingDays = (days % 365) % 30;

  // Calculate hours, minutes, and seconds from remaining seconds
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let ageText = "";
  if (years > 0) {
    ageText += years + " year" + (years > 1 ? "s" : "");
  }
  if (months > 0) {
    if (ageText.length > 0) {
      ageText += ", ";
    }
    ageText += months + " month" + (months > 1 ? "s" : "");
  }
  if (remainingDays > 0) {
    if (ageText.length > 0) {
      ageText += ", ";
    }
    ageText += remainingDays + " day" + (remainingDays > 1 ? "s" : "");
  }

  // Add hours, minutes, and seconds with leading zeros for formatting
  ageText += `, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')} `;

  return ageText;
}

function updateCounter() {
  const ageElement = document.getElementById("age-counter");
  ageElement.textContent = getAge();
  setTimeout(updateCounter, 1000); // Update every second
}

updateCounter();





//image slidder


    

