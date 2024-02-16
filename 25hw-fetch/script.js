sendUserID.onclick = e => {
    answer.innerHTML = "";
    fetch(`https://jsonplaceholder.typicode.com/users/${userID.value}`)
        .then(response => {
            console.log(response);
            if(response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then(data => {
            const userID = data.id;
            const name = data.username;
            const userName = document.createElement('h2');
            userName.appendChild(document.createTextNode(`Username: ${data.username}`));
            answer.appendChild(userName);
            const eMail = document.createElement('h2');
            eMail.appendChild(document.createTextNode(`E-mail: ${data.email}`));
            answer.appendChild(eMail);

            fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => {
                    console.log(response);
                    if(response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response.status);
                    }
                })
                .then(data => {
                    console.log(data)
                    const h3 = document.createElement('h3');
                    h3.appendChild(document.createTextNode(`Found following posts:`));
                    answer.appendChild(h3);
                    for (const post of data) {
                        if(post.userId == userID) {
                            const postNum = document.createElement('h4');
                            postNum.appendChild(document.createTextNode(`post № ${post.id}`));
                            answer.appendChild(postNum);
                            const pTitle = document.createElement('p');
                            pTitle.appendChild(document.createTextNode(`Title: ${post.title}`));
                            answer.appendChild(pTitle);
                            const pBody = document.createElement('p');
                            pBody.appendChild(document.createTextNode(`Body: ${post.body}`));
                            answer.appendChild(pBody);
                        }
                    }
                })
                .catch(e => {
                    const h2 = document.createElement('h2');
                    h2.appendChild(document.createTextNode(`Page with posts not found! ${e}`));
                    answer.appendChild(h2);
                });
        })
        .catch(e => {
            const h2 = document.createElement('h2');
            h2.appendChild(document.createTextNode(`Ooops! ${e}`));
            answer.appendChild(h2);
        });
}