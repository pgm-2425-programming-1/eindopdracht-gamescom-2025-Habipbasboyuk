


(() =>{
const $navContainer = document.getElementById("navigation");



for (let i = 0; i < navigation.length; i++) {
    const $navItem = navigation[i];

    let navLinks = ""

    if($navItem.image === "") {
        navLinks += ""
    } else {
        navLinks += `<img src=${$navItem[i]} alt="logo">`
    }

    const $navElement = document.createElement("div")

    

    $navElement.textContent = ``
    

    $navElement.innerHTML = `<a href="${$navItem.link}" target="_blank">${$navItem.name}`

    $navContainer.appendChild($navElement);
}




function dataOfDifferenceInTime(){
    const countDownSeconds = 1755673200000
    const now = Date.now()
    const distance = countDownSeconds - now;
    return distance
}


function differenceInTime(){
    const distance = dataOfDifferenceInTime();
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return `<h1>${days}days ${hours}h ${minutes}m ${seconds}s</h1>
    <p>Till next edition</p>`
}

    setInterval(function() {

        
        $countDown.innerHTML = differenceInTime()
        
    }, 1000)
    
    const $lineUpContainer = document.getElementById("lineup");


    const $countDown = document.querySelector("#countdown")

   


for (let i = 0; i < lineUp.length; i++) {

    

    const $item = lineUp[i];
    const $eventElement = document.createElement("div");

    let beginDate = new Date(($item.from))
    let endDate = new Date(($item.to))


    // ${endDate.getDate()}-${(endDate.getMonth() + 1)} 
    let convertedBeginDate = `${beginDate.getDate()}-${String(beginDate.getMonth() + 1).padStart(2, "0")} ${beginDate.getHours().toFixed(2)}`;
    let convertedEndDate =  `${endDate.getHours().toFixed(2)}`;



    $eventElement.innerHTML = `
    <img src=${$item.event.image} alt="${$item.event.name}">
    <h2>${$item.event.name}</h2>
    <p><strong>${$item.stage}</strong>  | ${convertedBeginDate} - ${convertedEndDate}</p>`;


    $eventElement.addEventListener("click", function(){
        showDetails($item.id)
    })

    

    $lineUpContainer.appendChild($eventElement);

    
}

function showDetails(eventId){
    const event = lineUp.find(item => item.id === eventId)



    
    if(event){
        
        const $eventDetail = document.getElementById("eventDetail");
        $eventDetail.innerHTML = "";

        let links = ""



        if(event.event.socials.instagram === "") {
            links += "";
        }else {
          links += `<a href="${event.event.socials.instagram}" target="_blank"><img src="./images/instagram.png"></a><br>`
        }

        if(event.event.socials.twitter === "") {
            links += ""
        } else {
            links += `<a href="${event.event.socials.twitter}" target="_blank"><img src="./images/twitterlogo.png"></a><br>`;
        }

        if(event.event.socials.youtube === "") {
            links += ""
        } else {
            links += `<a href="${event.event.socials.youtube}" target="_blank"><img src="./images/youtube.png"></a><br>`;
        }

        if(event.event.socials.website === "") {
            links += ""
        } else {
            links += `<a href="${event.event.socials.website}" target="_blank"><img src="./images/website.png"></a><br>`;
        }
        $eventDetail.innerHTML = `
                <img src=${event.event.image} alt="">
                <h2>${event.event.name}</h2>
                <p>${event.event.description}</p>
                <p><strong>Stage:</strong> ${event.stage}</p>
                <div><strong></strong><br>${links}</div>
                <button id="button">close</button>
            `;


            const $button = document.getElementById("button")
            $button.addEventListener("click", function(){
                    $eventDetail.innerHTML = "";
                })

        }
}


})();


 



