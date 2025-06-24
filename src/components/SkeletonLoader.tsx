interface props {
  height: string;
}

function SkeletonLoader({ height }: props) {
  return (
    <div
      className="skeletonloader"
      style={{
        backgroundColor: "#eeeeee",
        height: height,
        width: "90%",
        borderRadius: "4px",
        animation: "pulse 1.5s infinite",
        display: "flex",
        margin: "auto",
      }}
    ></div>
  );
}

export default SkeletonLoader;
