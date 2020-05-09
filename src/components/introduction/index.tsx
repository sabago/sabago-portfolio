import * as React from 'react';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Introduction extends Component {
    render() {
    return (
        <div className="height: 400px">
        <Carousel controls={false} indicators={false}>
            <Carousel.Item>
                {/* <Carousel.Caption> */}
                <h3>Hi! I'm Sandra</h3>
                <p><a className="btn btn-primary btn-learn" href="" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                {/* </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <h3>I enjoy building THINGS!</h3>
                <p><a className="btn btn-primary btn-learn" href="https://github.com/sabago" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
             
            </Carousel.Item>
            <Carousel.Item>
                <h3>I am a frontend engineer <br /> & aspiring fullstack engineer</h3>
                <p><a className="btn btn-primary btn-learn" href="" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
            </Carousel.Item>
        </Carousel>
        </div>
    );}
}
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