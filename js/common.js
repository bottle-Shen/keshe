//配置axios基地址
axios.defaults.baseURL = "https://mock.apipark.cn/m1/4727481-4379975-default"

//封装轻提示函数

function showToast(msg) {
    const toastDom = document.querySelector(".my-toast");

    //实例化toast组件
    const toast = new bootstrap.Toast(toastDom);

    //修改提示
    document.querySelector(".toast-body").innerHTML = msg
    toast.show();
}

//显示用户名
function renderUsername() {
    const username = localStorage.getItem("username")
    document.querySelector(".username").innerHTML = username
}
//非法校验


function checkLogin() {
    //判断token是否存在
    const token = localStorage.getItem("token")
    if (token == null) {
        showToast("你怎么进来的!登陆去!")
        setTimeout(() => {
            location.href = "../login.html"
        },1500)
    }
}

//退出登录
function registerLogout() {
    document.querySelector("#logout", addEventListener("click",() => {
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        location.href = '../login.html'
    }))
}