"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_burger_menu_1 = require("react-burger-menu");
require('./styles/index.css');
class RSidebar extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(react_burger_menu_1.slide, null,
                React.createElement("div", { className: "text-center" },
                    React.createElement("div", { className: "author-img", style: { backgroundImage: 'url(images/about.jpg)' } }),
                    React.createElement("h1", { id: "colorlib-logo" },
                        React.createElement("a", { href: "index.html" }, "Sandra Abago")),
                    React.createElement("h4", null, "Engineer Extraordinaire"),
                    React.createElement("span", { className: "email" },
                        React.createElement("i", { className: "icon-mail" }),
                        " sandra.abago@gmail.com")),
                React.createElement("div", { id: "navbar", className: "collapse" },
                    React.createElement("a", { className: "menu-item", href: "/" }, "Introduction"),
                    " ",
                    React.createElement("br", null),
                    React.createElement("a", { className: "menu-item", href: "#about" }, "About"),
                    " ",
                    React.createElement("br", null),
                    React.createElement("a", { className: "menu-item", href: "#", "data-nav-section": "projects" }, "Projects"),
                    " ",
                    React.createElement("br", null),
                    React.createElement("a", { className: "menu-item", href: "#", "data-nav-section": "blog" }, "Blog"),
                    React.createElement("br", null),
                    React.createElement("a", { className: "menu-item", href: "#timeline", "data-nav-section": "timeline" }, "Timeline"),
                    React.createElement("br", null)))));
    }
}
exports.RSidebar = RSidebar;
/* <nav id="colorlib-main-menu" role="navigation" className="navbar">

</nav> */
//# sourceMappingURL=index.js.map