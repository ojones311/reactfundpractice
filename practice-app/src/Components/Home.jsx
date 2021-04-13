import React,{useState, useEffect} from 'react'


const Home = () => {
    const [counter, setCounter] = useState(0)

    const increaseOne = () => {
        if(counter >= 0){
            setCounter(counter++)
        }else{
            console.log('Error')
        }
    }
    const decreaseOne = () => {
        if(counter >= 0){
            setCounter(counter--)
        }else{
            console.log('Cant decrement counter below zero')
        }
    }

   useEffect(() => {
       if(counter != 0){
           setCounter(0)
       }
   })
    return(
        <div>
            <p>{counter}</p>
            <button onClick={increaseOne}>+</button>
            <button onClick={decreaseOne}>-</button>
        </div>
    )
}

export default Home 