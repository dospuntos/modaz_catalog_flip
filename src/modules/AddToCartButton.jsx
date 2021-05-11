import { Button } from '@material-ui/core'
import React from 'react'

export default function AddToCartButton({disabled}) {
    return (
        <Button variant="contained" size="small" color="secondary" disabled={disabled}>Agregar</Button>
    )
}
