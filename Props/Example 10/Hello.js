class Hello extends React.Component{
   hello=this.props
    render()
    {
        console.log(this.hello);
        return <h1>Hellooooooo {this.props.who} from {this.props.from}</h1>
    }
}