
let progress_Main = 0.1;
let progress_M1 = 1.5;
let progress_M2 = 0.75;
let progress_M3 = 0.35;    
let progress_M4 = 0.175;
let progress_M5 = 0.085;     
let progress_M6 = 0.0425;     

const progressElement_Main = document.querySelector('.progress-main');
const progressElement_M1 = document.querySelector('.progress-m1');
const progressElement_M2 = document.querySelector('.progress-m2');
const progressElement_M3 = document.querySelector('.progress-m3');
const progressElement_M4 = document.querySelector('.progress-m4');
const progressElement_M5 = document.querySelector('.progress-m5');
const progressElement_M6 = document.querySelector('.progress-m6');


progressElement_Main.style.width = `${progress_Main}%`;
progressElement_M1.style.width = `${progress_M1}%`;
progressElement_M2.style.width = `${progress_M2}%`;
progressElement_M3.style.width = `${progress_M3}%`;
progressElement_M4.style.width = `${progress_M4}%`;
progressElement_M5.style.width = `${progress_M5}%`;
progressElement_M6.style.width = `${progress_M6}%`;