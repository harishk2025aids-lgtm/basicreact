function Productcard({ name ,age,img,stockstatus}) {
    return (
        <>
            <div className="div">hi</div>
            <div className="hi">this is a product card</div>

        
          <h1>{name}</h1>
          <p>Age: {age}</p>
          <img src={img} alt={name} />
          <p>Stock Status: {stockstatus}</p>
        </>
    )
}
export default  Productcard