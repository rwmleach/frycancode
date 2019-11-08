function renderTaskList() {
    ReactDOM.render(
        <Tasks />,
        document.getElementById('root')
    );
}        

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['Wash the dishes', 'Learn more JavaScript']
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem = () => {
        console.log("add button clicked");
        let text = document.getElementById("textBox").value;
        this.setState(state => {
            const updatedTasks = state.tasks.concat(text);

            return { tasks: updatedTasks }
        });
        document.getElementById("textBox").value = '';
    }

    removeItem = i => {
        console.log("remove button clicked");
        this.setState(state => {
            const updatedTasks = state.tasks.filter((item, j) => i !== j);

            return { tasks: updatedTasks }
        });
    }

    render() {      
        return (
            <div>
                <p><input type="text" placeholder="Add a new item" id="textBox" /> 
                <button href="#" id="addTask" onClick={this.addItem}> Add Task</button></p>
                <ol>
                    {this.state.tasks.map(function(task, index){
                        return <li key={ index }>{task} <a className="small" onClick={() => this.removeItem(index)} href="#" >Delete</a></li>;
                    }.bind(this))}                      
                </ol>
            </div>
        );
    }            
}
const tasklist = new Tasks();
renderTaskList();