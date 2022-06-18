import react, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';

function CompA()
{
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [moves,setMoves]=useState();

    useEffect(()=>{
        alert("Hi");
        async function getData()
        {
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    })
    function Update(event)
    {
        setNum(event.target.value);
        console.log(event.target.value);
    }
    return(
        <>
        <h1>You Choose {num}</h1>
        <h1>My name is <span style={{color:'red'}}>{name}</span></h1>
        <h1>I have <span style={{color:'red'}}>{moves} moves</span></h1>

       <select value={num} onChange={Update}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>

       </select>
        </>
    )
}
export default CompA;