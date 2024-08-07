import Services from "./Services.js";
import Products from "./Products.js";
import Home from "./Home.js";
const mainApp = document.querySelector("#main");
const navBar = document.querySelector("#nav");

console.log(mainApp);
console.log(navBar);

const routes = {
  "/": {
    linkTitle: "Home",
    component: () => Home(history.state),
  },
  "/products": {
    linkTitle: "Products",
    component: () => Products(history.state),
  },
  "/services": {
    linkTitle: "Services",
    component: () => Services(history.state),
  },
};

function render(route) {
  mainApp.innerHTML = routes[route].component();
}

function navLinksRenderer() {
  for (const route in routes) {
    const navLink = document.createElement("a");
    navLink.href = route;
    navLink.textContent = routes[route].linkTitle;
    navLink.onclick = navigationHander;
    navBar.appendChild(navLink);
  }
}
function navigationHander(e) {
  e.preventDefault();
  console.log(e.target.pathname);
  // const route = e.target.pathname;
  window.history.pushState({ value: e.target.pathname }, "", e.target.pathname);
  render(e.target.pathname);
}

const renderInitialPage = () => {
  const route = window.location.pathname;
  console.log(route);
  render(route);
};
navLinksRenderer();
renderInitialPage();
