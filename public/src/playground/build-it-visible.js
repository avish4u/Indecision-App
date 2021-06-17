// let visibility =  false;
// const toggleVisibility = () =>{
//     visibility = !visibility;
//     renderToggle();

// }



// const appRoot = document.getElementById('app');

// const renderToggle = () => {

//     const toggle = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {toggleVisibility}>
//                 {visibility ? 'Hide details': 'Show details'}

//             </button>
//             {
//                 visibility && (<div>
//                     <p>Hey! These are some details you can now see!</p>
//                 </div>)
//             }
            
            
//         </div>
    
//     );
//     ReactDOM.render(toggle, appRoot);

// };
// renderToggle();

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
           return{
            visibility: !prevState.visibility
           };

        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (<div>
                    <p>Hey You can see the details now!</p>
                </div>)}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));    