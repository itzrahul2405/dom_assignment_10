document.getElementById('btn').addEventListener('click', registerUser);

function registerUser(e){

    e.preventDefault();

    
    const name = document.getElementById('name').value
    const mail = document.getElementById('mail').value
    const phone = document.getElementById('phone').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value

    console.log(name);
    console.log(mail);
    console.log(phone);
    console.log(date);
    console.log(time);

    localStorage.setItem('name', name);
    localStorage.setItem('mail', mail);
    localStorage.setItem('phone', phone);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);
}

