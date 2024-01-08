if (sessionStorage.activeHoverLevel1 == undefined) {
    sessionStorage.setItem('activeHoverLevel1', -1)
}

if (sessionStorage.activeHoverLevel2 == undefined) {
    sessionStorage.setItem('activeHoverLevel2', -1)
}


const sidebarElements = document.getElementsByClassName('firstLevel');
const sidebarElements2 = document.getElementsByClassName('secondLevel');


for (const iterator of sidebarElements) {
    iterator.addEventListener('click', setActiveNavElement)
}

for (const iterator of sidebarElements2) {
    iterator.addEventListener('click', setActiveSecondLevel)
}

function setActiveNavElement (e) {
    let activeHoverLevel1 = sessionStorage.getItem("activeHoverLevel1");

    if(activeHoverLevel1 != -1) {
        document.getElementById(`navbarFirstLevel${activeHoverLevel1}`).classList.remove('activeSideNav')
    }
    
    if(e.target.id == `navbarFirstLevel${activeHoverLevel1}`) {
        let secondLevelMenu = document.getElementById(`${activeHoverLevel1}secondLevel`)
        if (secondLevelMenu != undefined) {
            secondLevelMenu.hidden = true;
        }
        sessionStorage.setItem('activeHoverLevel1', -1)

        return
    } 

    let targetNum = e.target.id.slice(-1)
    sessionStorage.setItem('activeHoverLevel1', targetNum)
    e.target.classList.add('activeSideNav')

    let secondLevelMenu = document.getElementById(`secondLevel${sessionStorage.getItem("activeHoverLevel1")}`)
    if (secondLevelMenu != undefined) {
        secondLevelMenu.hidden = false;
    }

    if(targetNum == 5) {
        for (let i = 1; i < 4; i++) {
            document.getElementById(`navbarSecondtLevel5_${i}`).classList.remove('activeSecondLevelSideNav')
        }
    }

}

function setActiveSecondLevel (e) {
    if(sessionStorage.getItem("activeHoverLevel2") != -1) {
        let old = document.getElementById(`navbarSecondtLevel${sessionStorage.getItem("activeHoverLevel1")}_${sessionStorage.getItem("activeHoverLevel2")}`)
        old.classList.remove('activeSecondLevelSideNav')
    }

    document.getElementById(e.target.id).classList.add('activeSecondLevelSideNav')
    sessionStorage.setItem("activeHoverLevel2", e.target.id.split('_')[1])
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}