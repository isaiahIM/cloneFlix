"use strict";

// 헤더 스크롤시 색상 변경
document.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  // 스크롤 위치에 따라 클래스 추가/제거
  if (scrollTop > 50) {
    header.classList.add('scrolled'); // 스크롤이 50px 이상이면 클래스 추가
  } else {
    header.classList.remove('scrolled'); // 스크롤이 50px 미만이면 클래스 제거
  }
});



/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
  
