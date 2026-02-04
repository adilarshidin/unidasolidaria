const CopyField = ({ label, value }: { label: string; value: string }) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);
    alert(`${label} copiado`);
  };

  return (
    <p style={{ cursor: "pointer" }} onClick={copyToClipboard}>
      <span style={{ fontWeight: 700 }}>{label}:</span>{" "}
      <span style={{ textDecoration: "underline" }}>{value}</span>
    </p>
  );
};

export default CopyField;
