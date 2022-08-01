// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// // Challenge: Create your own custom React component!
// // Call it "MainContent", and have it return a simple
// // h1 element that says "I'm learning React!"

// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)
// function MainContent() {
//     return (
//         <h1>I'm learning react! Fok yeah!</h1>
//     )
// }




// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// const h1Element = document.createElement('h1');
// h1Element.textContent = 'Well, I am smart';
// h1Element.classList.add('header');
// document.querySelector('#root').appendChild(h1Element);
// console.log(h1Element);


// const element = (
// <div>
//     <h1 className="header">This is JSX</h1>
//     <p>Second line</p>
// </div>)



// console.log(element);
// ReactDOM.render(element, document.getElementById('root'));
// import React from "react";
// import ReactDOM from "react-dom";


// const nav = (
//     <nav>
//         <h1>My beatiful website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// // ReactDOM.render(nav, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nav);

// function Header() {
//     return (
//         <headerWrapper>
//             <h1>So this is my personal blog</h1>
//         </headerWrapper>
//     )
// }

// function Navigation() {
//     return (
//         <navigationWrapper>
//             <h1>My beatiful website</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </navigationWrapper>
//     )
// }
// function MainContent() {
//     return (
//         <mainContentWrapper>
//             <div>Here is many different information abbout me.
//                 Let's check this out
//             </div>
//             <div><img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7" width="150" /></div>
//         </mainContentWrapper>
//     )
// }

// function Footer() {
//     return (
//         <footerWrapper>
//             <ul>Phone number</ul>
//             <ul>email</ul>
//             <ul>Fax</ul>
//             <ul>ICQ</ul>
//         </footerWrapper>
//     )
// }

// const page = (
//     <div>
//         <Header />
//         <Navigation />
//         <MainContent />
//         <Footer />

//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(page);
// // document.getElementById("root").append(page);

// const page = (
//     <div>
//         <img src="./react-logo.svg" width="100" />
//         <h1>Fun facts about REACT</h1>
//         <ul>
//             <li>Was first release in 2013</li>
//             <li>was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(page);


// function ListOfEximents() {
//     return (
//         <div>
//             <Header />
//             <ul>
//                 <li>It is new for me</li>
//                 <li>It is modern technology</li>
//                 <li>It is will increase my salary</li>
//                 <li>it is nice to make something work</li>
//             </ul>
//             <footer>
//                 <small>© 2022 Boobka development. All rights reserved.</small>
//             </footer>

//         </div>

//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ListOfEximents />);

// function Header() {
//     return (
//         <header className="header">
//             <nav className="nav">
//                 <img src="./react-logo.svg" className="logo-img" />
//                 <ul className="nav-items">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }
// import Header from "./Header.js";


function Page() {
    return (
        <div className="page-wrapper">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);