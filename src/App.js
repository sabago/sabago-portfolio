"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./App.css");
const index_1 = require("./components/rbmSidebar/index");
const index_2 = require("./components/introduction/index");
const items = [
    { name: 'home', label: 'Home' },
    { name: 'sales', label: 'Sales' },
    { name: 'orders', label: 'Orders' },
    { name: 'billing', label: 'Billing' },
    { name: 'settings', label: 'Settings' }
];
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(index_1.RSidebar, null),
        React.createElement("main", { id: "page-wrap" },
            React.createElement(index_2.default, null),
            React.createElement("div", { id: "about", className: "about-desc" },
                React.createElement("span", { className: "heading-meta" }, "About"),
                React.createElement("h2", { className: "colorlib-heading" }, "Who Am I?"),
                React.createElement("p", null, "Born and bred in Uganda, East Africa, I am a bonafide hardworker! Growing up, I enjoyed playing soccer with my brothers, while making time for farming, studying math and science, housework, and competing in sports and chess."),
                React.createElement("p", null, "I love engineering! When I was 9, I attended a science fair where I learned the basic heat transfer concepts. Upon returning home, I built a mud brick and iron firewood oven, and started baking bread using a recipe from the newspaper. As soon as my father returned from work, I walked up to him with the bread in hand and said, \"see, dad, you do not need to buy bread anymore!\". After explaining to him where the bread came from, he smiled and said \"You should be an engineer!\" I agreed and have never looked back."),
                React.createElement("p", null, "By training, I'm a chemical and computational materials engineer who is dedicated to applying my academic and research knowledge to meet the challenges of developing new and better materials, as well as devising novel applications to meet demands at the cutting edge of technology. These days, I am a frontend engineer and I spend my free time expanding on programming knowledge, and automating the boring stuff."),
                React.createElement("p", null)))));
}
exports.default = App;
//# sourceMappingURL=App.js.map