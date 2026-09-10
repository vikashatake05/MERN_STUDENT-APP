function Stackcard({title, value}) {
  return (
    <div className="stack-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default Stackcard;