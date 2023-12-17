if (sessionStorage.activeHoverLevel1 == undefined) {
    sessionStorage.setItem('activeHoverLevel1', -1)
}

switch(window.location.pathname) {
    case('/about.html'):
        sessionStorage.setItem('activeHoverLevel1', 1)
        break
}


const sidebarElements = document.getElementsByClassName('firstLevel');


for (const iterator of sidebarElements) {
    iterator.addEventListener('click', setActiveNavElement)
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

    sessionStorage.setItem('activeHoverLevel1', e.target.id.slice(-1))
    e.target.classList.add('activeSideNav')
    

    let secondLevelMenu = document.getElementById(`${sessionStorage.getItem("activeHoverLevel1")}secondLevel`)
    if (secondLevelMenu != undefined) {
        secondLevelMenu.hidden = false;
    }
}
