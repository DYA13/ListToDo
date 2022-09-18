import { Component } from 'react';
import image from './checkTick.png';



export class ListGroup extends Component {
    state = {
        userInput: ' ',
        list: [ ]
    }

onChangeEvent(e) {
    this.setState({userInput: e})
}

addItem(input) {
if (input === ' ') {
alert ("Please enter an item")
} 
else {
    let listArray= this.state.list;
    listArray.push(input);
    this.setState({list: listArray})
}
}

deleteItem() {
    let listArray = this.state.list;
    listArray = [ ];
    this.setState({list: listArray})
}


crossedWord (event) {
    const li =event.target;
    li.classList.toggle('crossed');
}


onFormSubmit(e) {
    e.preventDefault();
}

render() {
    return (
        <div>
            <form onSubmit= {this.onFormSubmit}>
<div className='container'>
    <input placeholder="Your list to do"
    onChange={(e)=>{this.onChangeEvent(e.target.value)}}
    value={this.state.userInput} />
</div>

<div className='block'>
<div >

    <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add your task</button>

</div>

<div >
    <button onClick={() => this.deleteItem()} className="btn delete">Delete your task </button>
</div>

</div>
<ul>
    {this.state.list.map((item,index)=>(
        <li onClick={this.crossedWord} key={index}>
            <img src={image} width="30px" alt="list"/>
            {item}</li>
    ))}
</ul>



            </form>
        </div>
    )
}

}
