let relation = document.querySelector("h5")

let addFriend = document.querySelector("#add")
flag = 0

addFriend.addEventListener('click', () => {
    if (flag == 0) {

        relation.innerHTML = 'Friends'
        relation.style.color = 'green'
        console.log('We are Friends now!');
        addFriend.innerHTML = 'remove'
        addFriend.style.backgroundColor = '#666363'
        addFriend.style.color = 'white'
        flag = 1
    } else {
        relation.innerHTML = 'Stranger'
        addFriend.innerHTML = 'Add Friend'
        relation.style.color = 'red'
        addFriend.style.backgroundColor = 'cadetblue'
        flag = 0
    }
})


