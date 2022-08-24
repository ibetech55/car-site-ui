import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getBrands } from '../store/brandSlice';
import { getModelsByBrand } from '../store/modelSlice';

const useBrands = () => {

    const dispatch = useDispatch();

    const brandsData = useSelector(
        (state: RootState) => state.brands.brands)
    const modelsData = useSelector((state: RootState) => state.models.models)


    const [brands, setBrands] = useState(null)
    const [brandId, setBrandId] = useState(null)
    const [models, setModels] = useState(null)
    const [modelId, setModelId] = useState(null)

    const changeBrands = (value) => {
        setBrandId(value)
        dispatch(getModelsByBrand(value))
    }

    const changeModel = (value) => {
        setModelId(value)
    }

    useEffect(() => {
        dispatch(getBrands())
    }, [])

    useEffect(() => {
        setBrands(brandsData)
    }, [brandsData])

    useEffect(() => {
        setModels(modelsData)
    }, [modelsData])


    return {
        brands,
        setBrands,
        brandId,
        setBrandId,
        models,
        setModels,
        modelId,
        setModelId,
        brandsData,
        modelsData,
        changeBrands,
        changeModel
    }
}

export { useBrands }