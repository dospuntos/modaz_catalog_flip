export default function VariantsDropdown({variants}) {
    return (
        <select>
            <option>Color y talla</option>
            {variants.map(variant => {
                return <option disabled={variant.stock ? "false" : "true"} key={variant.id}>{variant.color} - {variant.size}</option>;
        })}
        </select>
    )
}