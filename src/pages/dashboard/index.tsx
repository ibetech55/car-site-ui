import axios from '../../configs/axiosRequest'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getBrands } from '../../store/brandSlice'
import { loadingComponent, loadingComponentF } from '../../store/authSlice'

const Dashboard = () => {
    const auth = useSelector((state: RootState) => state.auth.auth)
    const [cars, setCars] = useState(null)
    const getCars = async () => {
        const { data } = await axios.get('/cars')
        setCars(data)
    }

    const dispatch = useDispatch();

    useEffect(() => { getCars() }, [])

    const handleLoad = () => {
        dispatch(loadingComponent({}))
        setTimeout(() => {
            dispatch(loadingComponentF({}))
        }, 5000)
    }

    return (
        <>
            {/* <div>{JSON.stringify(cars)}</div> */}
            <div>{JSON.stringify(auth)}</div>
            <button onClick={handleLoad}>Enter</button>
        </>
    )
}

export default Dashboard