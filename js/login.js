document.querySelector("#btn-login").addEventListener("click", async() => {
    axios({
    url: '/login',
    method: 'post',
    data: {
        username: 'bottle',
        password: '123456'
    }
    })


    //搜索数据
const form = document.querySelector(".login-form")

const data = serialize(form ,{hash:true,empty:true})//{"":""}

console.log('data:',data);

const {username, password} = data
//非空检验
if (username === '' || password === '') {
    showToast("空着呢!!!!!!")
    return
}

//长度校验

if (username.length < 3 || username.length > 30 || password.length < 3 || password.length > 30) {
    showToast("长不长短不短的!3-30!")
    return
}

    //数据提交
    try {
        const res = await axios.post("/login", { username, password })
        // console.log(res);
        showToast(res.data.message)
        // console.log(res.data.token);

        //缓存数据,用本地存储
        localStorage.setItem("username", res.data.data.username)
        localStorage.setItem("token",res.data.data.token)
        //去主页
        setTimeout(() => {
            window.location.href = "../index.html"
        },1500)
    } catch (error) {
        showToast(error.response.data.message)
    }
    
})