/* Imperative way of coding */

// // Create a new h1 element
// const h1 = document.createElement("h1");

// // Give it some textContent
// h1.textContent = "This is an imperative way to program";

// // Give it a class name of "header"
// h1.className("header");
// console.log(h1);

// // Append it as a child of the div#root
// const root = document.getElementById("root");
// root.appendChild(h1);


/* Declarative way of coding */
// ReactDOM.render(<h1 className="header">This is a declarative way to program!!</h1>, document.querySelector("#root"))

/* 
    JSX 
*/
// // Render 2 or more elements with a parent element
// ReactDOM.render(
//     <div>
//         <h1 className="header">
//             This is the header "JSX"
//         </h1>
//         <p>
//             This is a paragraph
//         </p>
//     </div>,
//     document.getElementById("root")
// )

// // You can also save a whole collection of JSX in a variable then call the variable when rendering it to the DOM
// const page = (
//     <div>
//     <h1 className="header">
//         This is the header "JSX"
//     </h1>
//     <p>
//         This is a paragraph
//     </p>
// </div> 
// )

// console.log(page)
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

/* Challenge:
    
    Create a navbar in JSX:
        - Use the semantic 'nav' element as the parent wrapper
        - Have a h1 element with the brand name of your "website"
        - Insert an unordered list for the other nav elements
            - Inside the <ul>, have three <li> for "Pricing", "About", and "Contact"
        - Don't worry about the styling yet - it'll just be plain-looking HTML for now
*/

const navBar = (
    <nav>
        <h1>Pet Adoption</h1>
        <ul>
            <li>Home</li>
            <li>Adoption & Rehoming</li>
            <li>Shelters & Rescues</li>
            <li>Get Involved</li>
            <li>About Us</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navBar,
    document.getElementById("root")
)