const reponse = fetch('https://api.github.com/users/engrab')
reponse.then((res) => {
    console.log(res)
    return res.json()
}).then((data) => {
    console.log(data.login)
}).catch((err) => {
    console.log(err)
})