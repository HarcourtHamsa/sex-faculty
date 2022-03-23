import React from "react";
import { BlurrySquareLoader } from "react-loaders-kit";

const Loader = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = React.useState(true);

  const loaderProps = {
    loading,
    size: 65,
    duration: 1,
    colors: ["black", "black"],
  };

  return (
    <div style={styles.loader}>
      <div>
        <BlurrySquareLoader {...loaderProps} />
      </div>
    </div>
  );
};

const styles = {
  loader: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFC",
  },
};

export default Loader;
