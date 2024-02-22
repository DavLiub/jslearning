const base_url = "https://webaccounting.herokuapp.com";
const registration_resource = "/account/user";
const login_resource = "/account/login";
API_KEY = ""

function sendForm() {
    const userData = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "login": loginReg.value,
        "password": passwordReg.value
    };

    const registration_url = `${base_url}${registration_resource}`;

    console.log(`Creation new user:\nURL: ${registration_url}`);
    console.log(`Body: ${JSON.stringify(userData)}`);

    fetch(registration_url, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            "Content-type": 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.error(e);
        });
}

function sendLoginForm() {
    const login_url = `${base_url}${login_resource}`;
    const baseAuth = btoa(`${login.value}:${password.value}`);

    console.log(`Login user:\nURL: ${login_url}`);
    console.log(`Base auth: ${baseAuth}`);


    fetch(login_url, {
        method: 'Post',
        headers: {
            "Authorization": `Basic ${baseAuth}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.error(e);
        });
}
