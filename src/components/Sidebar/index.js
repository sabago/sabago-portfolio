"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const List_1 = require("@material-ui/core/List");
const ListItem_1 = require("@material-ui/core/ListItem");
const ListItemText_1 = require("@material-ui/core/ListItemText");
require('./styles/index.css');
function Sidebar({ items }) {
    return (React.createElement("div", { className: "sidebar" },
        React.createElement(List_1.default, { disablePadding: true, dense: true }, items.map((_a) => {
            var { label, name } = _a, rest = __rest(_a, ["label", "name"]);
            return (React.createElement(ListItem_1.default, Object.assign({ key: name, button: true }, rest),
                React.createElement(ListItemText_1.default, null, label)));
        }))));
}
exports.default = Sidebar;
//# sourceMappingURL=index.js.map