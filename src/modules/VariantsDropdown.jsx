export default function VariantsDropdown({ variants, value, setVariant }) {
  return (
    <select value={value} onChange={(e) => setVariant(e.target.value)}>
      <option key={0} value={0}>Color y talla</option>
      {variants.map((variant) => {
        return (
          <option value={variant.vid} key={variant.vid} disabled={variant.stock === 0}>
            {variant.color} - {variant.size} {!variant.stock && "(Agotado)"}
          </option>
        );
      })}
    </select>
  );
}
