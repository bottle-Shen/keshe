document.querySelector("#btn-register").addEventListener("click", async() => {
    axios({
    url: '/register',
    method: 'post',
    data: {
        username: 'bottle',
        password: '123456'
    }
    })


    //搜索数据
const form = document.querySelector(".register-form")

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
        const res = await axios.post("/register", { username, password })
        // console.log(res);
        showToast(res.data.message)

        //去登录
        setTimeout(() => {
            window.location.href="../login.html"
        },1500)
    } catch (error) {
        showToast(error.response.data.message)
    }
    
})