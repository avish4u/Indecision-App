const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
   const option = e.target.elements.option.value;

    if(option){
       app.options.push(option);
       e.target.elements.option.value = '';
     renderForm();
}

}
const onRemoveAll = ()=> {
    app.options = [];
    renderForm();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
}
const appRoot = document.getElementById('app'); 
// const numbers = [55, 101, 1000];
const renderForm = () => {
    const template =(
        <div>
            <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           {app.options.length > 0 ? <p>Here are your Options</p> :<p>No Options</p> }
           {/* <p>{app.options.length}</p> */}
           <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>What Should I Do?</button>
           
           <button onClick = {onRemoveAll} >Remove All</button>
           {/* {
            //    [99, 98, 97, 'Mike Smith']
            numbers.map((number) => {
                return <p key={number}>Number: {number}</p>;

            })
           } */}
         
          
          
            <ol>
                {
                    app.options.map((work) =>{
                        return <li key= {work}>{work}</li>;
                    })
                }
               
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input  type = "text" name = "option" placeholder = 'type here..'/>
                <button>Add Option</button>
            </form>
        </div>);
        ReactDOM.render(template, appRoot);

};
renderForm();
