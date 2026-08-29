export default function NineBox({ id, children }) {
  return (
    <div id={id} className="nine-box">
      {children}
    </div>
  );
}
