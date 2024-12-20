function Hello (props)
{
    let {who,from}=props
    let element= <h1>Hello {who} from {from} </h1>
    return element
}