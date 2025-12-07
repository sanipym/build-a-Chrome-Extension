let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulList = document.getElementById("ul-list")
// 2. Grab the unordered list and store it in a const variable called ulEl

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLead()
    inputEl.value=""
    // for (let i = 0; i < myLeads.length; i++) {
    //     console.log(myLeads[i])
    //     ulList.innerHTML += "<li>"+myLeads[i]+"</li>"
    // }
})

function renderLead(){
    let listItem =""
    for(let i=0; i < myLeads.length; i++){
        //listItem += "<li> <a href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"

        listItem += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulList.innerHTML = listItem
}



