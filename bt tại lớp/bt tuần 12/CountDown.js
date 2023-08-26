// var Fulltime = Date('July 20, 69 20:17:40 GMT+00:00').getTime();
// var now = new Date();


// var days = Duration/1000*60*60*24;
// var hours = Duration/1000*60*60;
// var minutes = Duration/1000*60;
// var secs =  Duration/1000;




function countDown(){
    var Fulltime = new Date("April 28, 2023 16:00:00").getTime() ;
    var now = new Date();
    var Duration = Fulltime - now ;

    var TB = document.getElementById('TB');
    if(Duration<=0){
        days=0;
        hours=0;
        minutes=0;
        secs=0;
        TB.innerText='Chương trình sale đã kết thúc';
        return;
    }


    
    var days = Math.floor(Duration/(1000*60*60*24)) ;
    var hours = Math.floor(Duration/(1000*60*60)) ;
    var minutes = Math.floor((Duration/(1000*60))-hours*60) ;
    var secs =  Math.floor(Duration/1000%60) ;

    document.querySelector(".day").innerHTML = ` ${days} <span>Ngày</span>`;
    document.querySelector(".hour").innerHTML = `${hours} <span>Giờ </span>`;
    document.querySelector(".minute").innerHTML = ` ${minutes} <span>Phút </span>`;
    document.querySelector(".sec").innerHTML = ` ${secs} <span>Giây </span>`;

}

// countDown();
setInterval(countDown,1000);