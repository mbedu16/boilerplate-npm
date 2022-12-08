const applicationDiv = document.getElementById("App");
const headerSection = document.createElement("HEADER");

const siteHeader  = "Testing the magic";

headerSection.innerHTML = "<h1>" + siteHeader + "</h1>";

const formContainer = document.createElement("div");

applicationDiv.appendChild(headerSection);
applicationDiv.appendChild(formContainer);

