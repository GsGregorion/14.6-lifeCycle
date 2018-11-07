var Counter = React.createClass({ 
    getInitialState: function() {
        return {
            counter: 0,
            counter2: 0
        };
    },
    getDefaultProps: function() {
        console.log('getDefaultProps done')
    },
    componentWillMount: function() {
        console.log('componentWillMount')
    },
    componentDidMount: function() {
        console.log('componentDidMount done')
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    increment2: function() {
        this.setState({
            counter2: this.state.counter2 + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1,
        });
    },
    decrement2: function() {
        this.setState({
            counter2: this.state.counter2 - 1,
            shouldComponentUpdate: false
        });
    },
    setProps: function() {
        this.componentWillReceiveProps ({
            counter2: this.state.counter2 - 1,
        });
    },
    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps done - ')
    },
    componentWillUpdate: function() {
        console.log('componentWillUpdate done')
    },
    componentDidUpdate: function() {
        console.log('componentDidUpdate done'),
        ReactDOM.render(counterB, document.getElementById('app3'));
    },
    componentWillUnmount: function() {
        console.log('componentWillUnmount done'),
        ReactDOM.render(counterB, document.getElementById('app3'));
    },
    render: function() {
        return (
            React.createElement('div', {}, 
                React.createElement('div', {}, 
                    React.createElement('button', {onClick: this.increment}, 'Add 1'),
                    React.createElement('button', {onClick: this.decrement}, 'Extract 1'),
                    React.createElement('button', {onClick: this.setProps}, 'Set state 1')
                ),
                React.createElement('div', {}, 
                    React.createElement('h3', {className: 'result'}, 'Wartość licznika wynosi: ' + this.state.counter)
                ),
                React.createElement('div', {}, 
                    React.createElement('button', {onClick: this.increment2}, 'Add 1'),
                    React.createElement('button', {onClick: this.decrement2, className: 'fourth-button'}, 'Extract 1')
                ),
                React.createElement('div', {}, 
                    React.createElement('h3', {className: 'result'}, 'Wartość licznika wynosi: ' + this.state.counter2)
                )
            )
        )
    }
});

var counterB = React.createElement(Counter);
ReactDOM.render(counterB, document.getElementById('app'));
ReactDOM.render(counterB, document.getElementById('app2'));

var RemoveButton = React.createClass({
    remove: function() {
        ReactDOM.unmountComponentAtNode(document.getElementById('app')),
        ReactDOM.unmountComponentAtNode(document.getElementById('app2'))
    },
    remove3: function() {
        ReactDOM.unmountComponentAtNode(document.getElementById('app3'))
    },
    add: function() {
        ReactDOM.render(counterB, document.getElementById('app')),
        ReactDOM.render(counterB, document.getElementById('app2'));
    },
    render: function() {
        return (
            React.createElement('div', {}, 
                React.createElement('button', {onClick: this.remove, id: 'remove'}, 'Usuń 1 i 2!'),
                React.createElement('button', {onClick: this.remove3, id: 'remove3'}, 'Usuń tylko 3!'),
                React.createElement('button', {onClick: this.add, id: 'add'}, 'Przywróć nas!')
            )
        )
    },
});

var removeButton = React.createElement(RemoveButton);
ReactDOM.render(removeButton, document.getElementById('remove'));