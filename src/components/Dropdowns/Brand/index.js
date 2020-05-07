import React, {useEffect} from 'react'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { getBrands } from 'redux/actions/brandsActions'

import InputDropdown from 'components/generics/Input/Dropdown'

const BrandInput = ({ onChange, ...rest }) => {

    //Redux
    const dispatch = useDispatch();
    const { brands } = useSelector( state => state )
    const list = brands.brands || []

    useEffect(() => {
        dispatch(getBrands())
    }, [dispatch])
    
    const options = list.map( option => ( { id: option.ID, name: option.Name } ))

    return (
        <InputDropdown
            label={'Marca: '}
            options={ options }
            defaultValue={ 'Todas' }
            onChange={ (e) => onChange(e) }
            { ...rest }
        />                            
    )
}

export default BrandInput