new Swiper(".slider1 .swiper-container", {
    loop: true,
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백


    navigation: {
        // 슬라이드 이전/다음 버튼 사용 여부
        nextEl: ".slider1 .swiper-next", // 다음 버튼 선택자
    },
});

new Swiper(".slider2 .swiper-container", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,

    navigation: {
        nextEl: ".slider2 .swiper-next",
    },
});

new Swiper(".slider3 .swiper-container", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,

    navigation: {
        nextEl: ".slider3 .swiper-next",
    },
});

new Swiper(".slider4 .swiper-container", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,

    navigation: {
        nextEl: ".slider4 .swiper-next",
    },
});

new Swiper(".slider5 .swiper-container", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,

    navigation: {
        nextEl: ".slider5 .swiper-next",
    },
});

document.getElementById("showModalButton").addEventListener("click", function () {
    // visual-modal.html의 내용을 불러오기
    fetch("visual-modal.html")
        .then(response => response.text())
        .then(html => {
            // 모달을 나타내는 div를 만들어서 visual-modal.html의 내용을 채움
            const modalContainer = document.createElement("div");
            modalContainer.id = "modalContainer";
            modalContainer.innerHTML = html;

            // body에 모달을 추가
            document.body.appendChild(modalContainer);

            // 모달이 닫힐 때 modalContainer를 제거
            document.getElementById("closeModal").addEventListener("click", function () {
                document.body.removeChild(modalContainer);
            });

            // Youtube IFrame API를 비동기로 로드합니다.
            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";

            // onYouTubePlayerAPIReady 함수 이름은 YouTube IFrame Player API에서 사용하는 이름이기 때문에,
            // 다르게 지정하면 동작하지 않습니다! 그리고 함수는 전역(Global) 등록해야 합니다!
            tag.onload = function () {
                // <div id="player"></div>
                new YT.Player("player", {
                    videoId: "tJGCjo5kRsY", // 최초 재생할 유튜브 영상 ID
                    playerVars: {
                        autoplay: true, // 자동 재생 유무
                        loop: true, // 반복 재생 유무
                        playlist: "tJGCjo5kRsY", // 반복 재생할 유튜브 영상 ID 목록
                    },
                    events: {
                        // 영상이 준비되었을 때,
                        onReady: function (event) {
                            event.target.mute(); // 음소거!
                        },
                    },
                });
            };

            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        });
});

