"use strict";var radioButtons=document.querySelectorAll(".toggle__wrapper input"),capitilize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},localTheme=localStorage.getItem("theme");localTheme&&(document.body.classList=localTheme,document.getElementById(localTheme).checked=!0,document.getElementById("toggle-text").innerText="".concat(capitilize(localTheme)," Mode")),radioButtons.forEach((function(e){e.addEventListener("click",(function(e){document.body.classList=e.target.value,localStorage.setItem("theme",e.target.value),document.getElementById("toggle-text").innerText="".concat(capitilize(e.target.value)," Mode")}))}));
//# sourceMappingURL=script.js.map