//install -> import-> use
// import validator from 'validator';
// console.log(validator.isEmail('decdec'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



//There is another method of passing props using props.children method..
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));




// const Layout = (props) => {
//     return(
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
       
//     );
// }

// class OldSyntax {
//     constructor(){
//         this.name = 'Avish'
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting(){
//         return `hi my name is ${this.name} !`
//     }
// }
// const oldSyntax =new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// //------------
// class NewSyntax {
//     name = 'brew'
//     getGreeting = () => {
//         return `hi my name is ${this.name} !`
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting
// console.log(newGetGreeting());

//stateless functional Components



// class Header extends React.Component {
//     render(){
       
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
                
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }

// }

// class Action extends React.Component{
 
//     render(){
//         return(
//             <button onClick = {this.props.handlePick}
//             disabled = {!this.props.hasOptions}
            
//             >What Should I do?</button>
//         );
//      }
// }

// class Options extends React.Component{
  
//     render(){
//         return(
//             <div>
//                 <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
//                {
//                this.props.options.map((option) => {
//                    return(
//                       <Option  key={option} optionText = {option}/>
//                    );
//                })
//             }
               
//             </div>

//         );
//     }
// }

// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                {this.props.optionText}
//             </div>
//         );
//     }
// }



// const User = (props) => {
//    return (
//        <div>
//            <p>Name:{props.name} </p>
//            <p>Age: {props.age} </p>
//        </div>
//    );
// };
  











