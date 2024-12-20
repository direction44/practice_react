class Greetings extends React.Component{
    static defaultProps={who:"Soumya",from:"EveryOne"}
    render()
    {
        return <h1>Good Morning {this.props.who} from {this.props.from}</h1>
    }
}

