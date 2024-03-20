
const routes = {
  "/": {
    linkLabel: "Home",
    content: `
      <h2>Content for the home page</h2>
      <p>Home: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quas laborum doloremque voluptatibus! Molestias, voluptatem. Deleniti et animi ad possimus quia corrupti ullam nesciunt culpa iure magnam. Voluptate, aut eaque!</p>
      <ul>
        <li><a href="/about">Home point 1</a></li>
        <li><a href="/about">Home point 2</a></li>
        <li><a href="/about">Home point 3</a></li>
    </ul>
    `
  },
  "/about": {
    linkLabel: "About",
    content: `
      <h2>Content for the about page</h2>
      <p>About: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quas laborum doloremque voluptatibus! Molestias, voluptatem. Deleniti et animi ad possimus quia corrupti ullam nesciunt culpa iure magnam. Voluptate, aut eaque!</p>
      <ul>
        <li><a href="/about">About point 1</a></li>
        <li><a href="/about">About point 2</a></li>
        <li><a href="/about">About point 3</a></li>
      </ul>
    `
  },
  "/contact": {
    linkLabel: "Contact",
    content: `
      <h2>Content for the contact page</h2>
      <p>Contact: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quas laborum doloremque voluptatibus! Molestias, voluptatem. Deleniti et animi ad possimus quia corrupti ullam nesciunt culpa iure magnam. Voluptate, aut eaque!</p>
      <ul>
        <li><a href="/about">Contact point 1</a></li>
        <li><a href="/about">Contact point 2</a></li>
        <li><a href="/about">Contact point 3</a></li>
      </ul>
    `
  }
};

const main = document.querySelector("main");
const nav = document.querySelector("nav");

const renderContent = (route) => (main.innerHTML = routes[route].content);

const navigate = (e) => {
  const route = e.target.pathname;
  window.history.pushState({}, "", route);
  renderContent(route);
};

const registerNavLinks = () => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const { href } = e.target;
    navigate(e);
  });
};

const renderNavlinks = () => {
  const navFragment = document.createDocumentFragment();
  Object.keys(routes).forEach((route) => {
    const { linkLabel } = routes[route];

    const linkElement = document.createElement("a");
    linkElement.href = route;
    linkElement.textContent = linkLabel;
    linkElement.className = "nav-link";
    navFragment.appendChild(linkElement);
  });

  nav.append(navFragment);
};

const registerBrowserBackAndForth = () => {
  window.onpopstate = function (e) {
    const route = window.location.pathname;
    renderContent(route);
  };
};

const renderInitialPage = () => {
  const route = window.location.pathname;
  renderContent(route);
};

(function bootup() {
  renderNavlinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
})();
