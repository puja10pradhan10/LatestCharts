import React from 'react';

class ChildComonent extends React.Component {
    constructor() {
        console.log('11 ChildCompo - in constructor')
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            inputField: '',
            childData: [],
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, info);
    }

    componentWillMount() {
        console.log('12 ChildCompo - component will mount')
    }

    componentDidMount() {
        console.log('13 ChildCompo - component did mount')
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    submitHandler(evt) {
        evt.preventDefault();
        // pass the input field value to the event handler passed
        // as a prop by the parent (App)
        this.props.handlerFromParant(this.state.inputField);

        this.setState({
            inputField: ''
        });
    }

    handleChange(event) {
        this.setState({
            inputField: event.target.value
        });
    }

    render() {
        console.log('14 ChildCompo - in render')
        //console.log(this.props.childData.msg);
        return (
            <div>

                {/* parent to child communication */}
                <div>
                    {this.props.childData.color ?
                        <h2 style={{ color: this.props.childData.color }}>Child Component Input Value Color is {this.props.childData.color}</h2>
                        : ''}
                    <h3>Received by Child Component =>  {this.props.childData.msg}</h3>
                </div>


                {/* child to parent communication */}
                <h4>Child To Parent Communication Example</h4>
                <form onSubmit={this.submitHandler}>
                    <input type="text"
                        id="theInput"
                        value={this.state.inputField}
                        onChange={this.handleChange} />
                    <input type="submit" value="Sent to Parent" />
                </form>

                {/* to bind data from textbox
                <h5>Message from child:<br />{this.state.inputField}</h5> */}
            </div>
        );
    }


    componentWillUnmount() {
        console.log('15 ChildCompo - component will unmount')
    }
}

export default ChildComonent;
