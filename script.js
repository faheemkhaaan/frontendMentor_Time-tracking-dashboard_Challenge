const daily = document.querySelectorAll('.daily');
const weekly = document.querySelectorAll(".weekly");
const monthly = document.querySelectorAll('.monthly')
const btn = document.querySelectorAll(".btn");
const hamburgur = document.querySelectorAll(".hamburgur");
const revealContent = document.querySelectorAll(".reveal");
const hamburgerIcons = document.querySelectorAll(".hamburger-icons");
const contentBox = document.querySelector(".content");

const titleHeading = document.querySelector(".TimeTrackingDashboard")

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(() => {
        titleHeading.classList.add("show")
        console.log("titleheading")
        
    }, 100);
})


fetch('data.json')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => {
        console.error("Error fetching data:", error);
    })

function displayData(data) {
    // console.log(data);
}

function hideElements() {
    weekly.forEach((week) => {

        week.style.display = "none";
    })
    monthly.forEach((month) => {

        month.style.display = "none"
    })
}
hideElements()

btn.forEach(button => {

    button.addEventListener('click', () => {

        console.log(button)
        if (button.classList.contains("daily-btn")) {
            daily.forEach((daily) => {
                daily.style.display = 'block'
            })
            monthly.forEach((month) => {
                month.style.display = "none"
            })
            weekly.forEach((week) => {
                
                week.style.display = "none";
            })
        }
        if (button.classList.contains("weekly-btn")) {
            weekly.forEach((week) => {
                
                week.style.display = "block";
            })
            monthly.forEach((month) => {
                
                month.style.display = "none"
            })
            daily.forEach((daily) => {
                daily.style.display = 'none'
            })
            
        }
        if (button.classList.contains("monthly-btn")) {
            
            monthly.forEach((month) => {
                
                month.style.display = "block"
            })
            weekly.forEach((week) => {

                week.style.display = "none";
            })
            daily.forEach((daily) => {
                daily.style.display = 'none'
            })
        }
    })
})


hamburgur.forEach((element,index) => {
    element.addEventListener("click", () => {
        revealContent[index].classList.toggle("hidden")
    })

});

hamburgerIcons.forEach((currentValue, index) => {
    let num = Math.floor(index/3);
    currentValue.addEventListener("click",()=>{
        if(currentValue.textContent === "Daily"){
            daily[num].style.display ='block'
            weekly[num].style.display = "none"
            monthly[num].style.display = "none";
            console.log(daily[num])
        }
        if(currentValue.textContent === "Weekly"){
            weekly[num].style.display = "block";
            daily[num].style.display ='none'
            monthly[num].style.display = "none";
        }
        if(currentValue.textContent === 'Monthly'){
            monthly[num].style.display = "block";
            daily[num].style.display ='none'
            weekly[num].style.display = "none";
        }
    })
    console.log(num)   
});




