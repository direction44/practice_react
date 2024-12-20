class Hello extends React.Component{
    render()
    {
        return <div>
            <p>Name:{this.props.name}</p>
            <p>Age:{this.props.age}</p>
            <p>Subjects:{this.props.subjects.join()}</p>
            <p>Marks:{this.props.marks.join()}</p>
            <p>isPass:{String(this.props.isPass)}</p>
            <p>City:{this.props.address.city}</p>
            <p>PinCode:{this.props.address.pincode}</p>
        </div>
    }
}