let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulList = document.getElementById("ul-list")
// 2. Grab the unordered list and store it in a const variable called ulEl

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)

    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i])
        ulList.innerHTML += "<li>"+myLeads[i]+"</li>"
    }
})



