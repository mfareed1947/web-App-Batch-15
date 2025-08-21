import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Loading = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {loading ? <div>
                Loading Data.....
            </div> : <div>Data</div>}
        </>
    )
}

export default Loading
