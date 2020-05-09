"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const Carousel_1 = require("react-bootstrap/Carousel");
class Introduction extends react_1.Component {
    render() {
        return (React.createElement("div", { className: "height: 400px" },
            React.createElement(Carousel_1.default, { controls: false, indicators: false },
                React.createElement(Carousel_1.default.Item, null,
                    React.createElement("h3", null, "Hi! I'm Sandra"),
                    React.createElement("p", null,
                        React.createElement("a", { className: "btn btn-primary btn-learn", href: "", target: "_blank", rel: "noopener noreferrer" },
                            "View CV",
                            React.createElement("i", { className: "icon-download4" })))),
                React.createElement(Carousel_1.default.Item, null,
                    React.createElement("h3", null, "I enjoy building THINGS!"),
                    React.createElement("p", null,
                        React.createElement("a", { className: "btn btn-primary btn-learn", href: "https://github.com/sabago", target: "_blank", rel: "noopener noreferrer" },
                            "View Projects ",
                            React.createElement("i", { className: "icon-briefcase3" })))),
                React.createElement(Carousel_1.default.Item, null,
                    React.createElement("h3", null,
                        "I am a frontend engineer ",
                        React.createElement("br", null),
                        " & aspiring fullstack engineer"),
                    React.createElement("p", null,
                        React.createElement("a", { className: "btn btn-primary btn-learn", href: "", target: "_blank", rel: "noopener noreferrer" },
                            "View Blog ",
                            React.createElement("i", { className: "icon-book" })))))));
    }
}
exports.default = Introduction;
//   render() {
//     return (
//       <div>
//         <section id="colorlib-hero" className="js-fullheight" data-section="home">
//           <div className="flexslider js-fullheight">
//             <ul className="slides">
//               <li style={{backgroundImage: 'url()'}}>
//                 <div className="overlay" />
//                 <div className="container-fluid">
//                   <div className="row">
//                     {/* <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text"> */}
//                     <div className="col slider-text">
//                       <div className="slider-text-inner js-fullheight">
//                         <div className="desc">
//                           <h1>Hi! I'm Sandra</h1>
//                           <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//               <li style={{backgroundImage: 'url()'}}>
//                 <div className="overlay" />
//                 <div className="container-fluid">
//                   <div className="row">
//                     <div className="col js-fullheight slider-text">
//                       <div className="slider-text-inner">
//                         <div className="desc">
//                           <h1>I love building<br /> THINGS !!</h1>
//                           <p><a className="btn btn-primary btn-learn" href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//               <li style={{backgroundImage: 'url()'}}>
//                 <div className="overlay" />
//                 <div className="container-fluid">
//                   <div className="row">
//                     <div className="col js-fullheight slider-text">
//                       <div className="slider-text-inner">
//                         <div className="desc">
//                           <h1>I am an aspiring <br/>Fullstack Frontend Engineer ... </h1>
//                           <p><a className="btn btn-primary btn-learn" href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     )
//   }
// }
//# sourceMappingURL=index.js.map