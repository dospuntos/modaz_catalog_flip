export default function VariantsDropdown({variants}) {
    return (
        <select>
            <option>Color y talla</option>
            {variants.map(variant => {
                return <option disabled={variant.stock === 0} key={variant.id}>{variant.color} - {variant.size} {!variant.stock && "(Agotado)"}</option>;
        })}
        </select>
    )
}