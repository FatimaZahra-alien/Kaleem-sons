export default function TopBar() {
  return (
    <div style={{
      background: "#000000",
      color: "white",
      textAlign: "center",
      padding: "0.2rem 0.8rem",
      fontSize: "0.7rem",
      fontWeight: 400,
      letterSpacing: "0.4px",
      textTransform: "uppercase",
      borderBottom: "1px solid #222",
      lineHeight: 1.2,
    }}>
      <span className="material-symbols-outlined" style={{ fontSize: "0.8rem", verticalAlign: "middle", marginRight: "3px" }}>
        local_shipping
      </span>
      FREE DELIVERY $120+
    </div>
  );
}