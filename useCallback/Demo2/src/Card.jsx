function Card({handleClick}){
    return(
        <div style={{border:"2px solid black" , padding:"10px"}}>
            <button onClick={handleClick}>click</button>
        </div>
    )
}
export default Card;