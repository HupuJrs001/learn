// 防抖函数
function debounce(func, wait) {
 let timeoutId;

 return (...args) => {
   if (timeoutId) {
     clearTimeout(timeoutId);
   }

   timeoutId = setTimeout(() => {
     func(...args);
     timeoutId = null;
   }, wait);
 };
}

// 节流函数
function throttle(func, wait) {
 let lastCallTime;
 let timeoutId;

 return (...args) => {
   const now = Date.now();
   if (lastCallTime === null || now - lastCallTime >= wait) {
     lastCallTime = now;
     if (timeoutId) {
       clearTimeout(timeoutId);
     }
     timeoutId = setTimeout(() => {
       func(...args);
       timeoutId = null;
     }, wait);
   }
 };
}

// 使用防抖函数
const debouncedFunction = debounce(function () {
 console.log("Debounced function triggered");
}, 500);

window.addEventListener("scroll", debouncedFunction);

// 使用节流函数
const throttledFunction = throttle(function () {
 console.log("Throttled function triggered");
}, 100);

window.addEventListener("scroll", throttledFunction);

function debounce(func,wait){
    let timeout;
    return function(){
        if(timeout){
             clearTimeout(timeout) 
        }
        timeout = 
  }
}