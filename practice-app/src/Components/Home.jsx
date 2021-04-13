import React,{useState, useEffect} from 'react'


const Home = () => {
    const [counter, setCounter] = useState(0)

    const increaseOne = () => {
        if(counter >= 0){
            setCounter(counter + 1)
        }else{
            console.log('Error')
        }
    }
    const decreaseOne = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }else{
            console.log('Cant decrement counter below zero')
        }
    }


    return(
        <div>
            <p>{counter}</p>
            <button onClick={increaseOne}>+</button>
            <button onClick={decreaseOne}>-</button>
        </div>
    )
}

export default Home 