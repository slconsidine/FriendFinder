// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

var friendsArr = [
    {
        "name":"Ahmed",
        "profile-img":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
            ]
    },
    {
        "name": "Linda",
        "profile-img": "https://imgix.bustle.com/2016/1/12/411-003-bobs-burgers-friends-with-burgerfits.jpg?w=960&h=540&fit=crop&crop=faces&auto=format&q=70",
        "scores": [
            3,
            5,
            2,
            3,
            4,
            1,
            5,
            5,
            5,
            3
        ]
    },
    {
        "name": "Bob",
        "profile-img": "https://imgix.bustle.com/rehost/2016/9/13/7a47738c-7bee-4e39-adf9-8c07423074c8.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
        "scores": [
            5,
            2,
            3,
            3,
            2,
            3,
            1,
            2,
            4,
            4
        ]
    },
    {
        "name": "Gene",
        "profile-img": "https://imgix.bustle.com/rehost/2016/9/13/9c1a49cc-d844-4cbd-9213-785dfe768b5b.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
        "scores": [
            1,
            1,
            3,
            4,
            5,
            2,
            4,
            1,
            1,
            5
        ]
    },
    {
        "name": "Louise",
        "profile-img": "https://imgix.bustle.com/rehost/2016/9/14/35cf228d-9dc9-4aa5-be06-d51fa0e33bd2.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
        "scores": [
            4,
            1,
            2,
            2,
            5,
            4,
            1,
            3,
            3,
            4
        ]
    }
]

module.exports = friendsArr;



// $(document).ready(function(){
//     $("#submit").on("click", function() {

//         $("select.q1").change(function(){
//             var selectedAnswer1 = $(this).children("option:selected").val();
//             console.log("You have selected the answer - " + selectedAnswer1);
//         });
//         $("select.q2").change(function(){
//             var selectedAnswer1 = $(this).children("option:selected").val();
//             console.log("You have selected the answer - " + selectedAnswer1);
//         });
//     })
    
// });