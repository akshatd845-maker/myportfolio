import "../ui/styles/Background.css";

const Background = () => {
  return (
    <div aria-hidden className="bg-fixed">
      <div className="bg-grid" />
      <div className="bg-blob bg-blob-cyan" />
      <div className="bg-blob bg-blob-emerald" />
    </div>
  );
};

export default Background;
