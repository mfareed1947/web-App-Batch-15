import { useEffect, useState } from 'react'
import { colors } from "../constant/index"


const HeroSection = () => {
    const [data, setData] = useState("white")
    const [showModal, setShowModal] = useState(false)



    // useEffect(() => {
    //     console.log("object")
    // })
    // useEffect(() => {
    //     console.log("object")
    // }, [])
    useEffect(() => {
        console.log("object")
    }, [data])

    const handleClick = (color) => {
        setData(color)
    }

    return (
        <>
            {showModal ? <div style={{
                border: "1px solid black",
                padding: "20px",

            }}>this is modal</div> : (<div>Null</div>)}

            <div style={{
                backgroundColor: data
            }}>
                <h2>Hi</h2>
                {colors.map((color, ind) => {
                    return <div key={ind} onClick={() => handleClick(color)}>{color}</div>
                })}
            </div>
            <div>
                <button onClick={() => setShowModal(!showModal)}>modal</button>
            </div>
        </>

    )
}

export default HeroSection
