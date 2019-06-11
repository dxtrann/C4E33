// // console.log("One")
// // setTimeout(() => {
// //     console.log("Two")
// // }, 2000)
// // console.log("Three")

// // Async 
// // Call stack nhận tca các câu lệnh chạy theo thứ tự từ trên xuống dưới. Nhận từng thứ chạy từng 
// // thứ
// // nhận log(1) in ra One, hủy log(1)
// // nhận setTimeout, ko giải quyết được để sang webAPI, hủy khỏi call stack
// // nhận log(3) in ra Three, hủy log(3)
// // Web API trả kết quả ra Callback queue
// // Khi nào call stack rỗng thì callback queue đưa câu lệnh còn vào
// // nhận log(2) in ra Two, hủy log(2)
// // Event loop đứng ngoài báo cho 3 phần còn lại


// // async/await
// const context = {
//     users: null
// }
// window.onload = async () => {
//     // const response = await fetch('https://reqres.in/api/users?page=2')
//     // const data = await response.json()
//     // const users = data.data
//     // console.log(users)

//     await thongTin()

// // Print out names from the data aquired above:

//     // for(i=0; i<users.length; i++){
//     //     let names = users[i]
//     //     let first_name = names.first_name
//     //     let last_name = names.last_name
//     //     let printOut = `<li> ${first_name} ${last_name} </li>`
//     //     let ten = document.getElementById("names")
//     //     ten.innerHTML += printOut
//     // }

//     printOutNames()
//     viewInfoUsers()
// }

// let thongTin = async () => {
//     const response = await fetch('https://reqres.in/api/users?page=2')
//     const data = await response.json()
//     const users = data.data
//     context.users = users
// }

// let printOutNames = () => {
//     for(i=0; i<context.users.length; i++){
//         let names = context.users[i]
//         let first_name = names.first_name
//         let last_name = names.last_name
//         let printOut = `<li> ${first_name} ${last_name} </li>`
//         let ten = document.getElementById("names")
//         ten.innerHTML += printOut
//     }
// }


// const viewInfoUsers = () => {
//     for (i=0; i<context.users.length; i++){
//         let eachuser = document.getElementById(`user-${i}`)
//         let divInfo = document.getElementById("user_info")
//         eachuser.addEventListener('click', () => {
//             let userInfo = `
//             <img src="${user.avatar}">
//             <span> First name: ${user.first_name} </span>
//             <span> Last name: ${user.last_name} </span>
//             <span> Email: ${user.email} </span>
//             `
//         })
//     }  
// }


    
    
