import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'


interface ISelectComponent {
    value: string | number;
    onChange: (val: any) => void;
    data: { id: string | number; name: string }[]
    label?: string,
    title?: string
}
const SelectComponent = ({ value, onChange, data, label, title }: ISelectComponent) => {
    return (
        <FormControl fullWidth size="small" sx={{ marginRight: 2 }} >
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={(e) => onChange(e.target.value)}
            >
                {data && data.map(d => (
                    <MenuItem value={d.id}>{d.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectComponent