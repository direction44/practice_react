function getNumber()
{
    let myNums=[23,5,4,87,34,56,23,6,23]
    let number=myNums[Math.floor(Math.random()*myNums.length)]
    return number
}

class RandomNums extends React.Component{
    render()
    {
        let num=getNumber()
        let msg=num
        if(num==6)
        {
            msg=<h3>Congratulation You Won</h3>
        }
        else{
            msg=<h3>Batter luck next time</h3>
        }

        return <div>you got number is {num}{msg}</div>

       
    }
}