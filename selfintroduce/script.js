// script.js
// 모달 창 엘리먼트를 가져옴
var modal = document.getElementById("myModal");

// 모달 창을 여는 버튼을 가져옴
var btn = document.getElementById("starbucks_modal");

// 모달 창을 닫는 <span> 요소를 가져옴
var span = document.getElementsByClassName("close")[0];

// 버튼을 클릭하면 모달 창을 열도록 설정
btn.onclick = function() {
    modal.style.display = "block";
}

// <span> 요소를 클릭하면 모달 창을 닫도록 설정
span.onclick = function() {
    modal.style.display = "none";
}

// 모달 창 외부를 클릭하면 모달 창을 닫도록 설정
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


