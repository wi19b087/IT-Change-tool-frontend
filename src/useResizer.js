import * as React from "react";

export default function useResizer() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 640);

  function handleSizeChange() {
    return setIsMobile(window.innerWidth < 640);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleSizeChange);

    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, [isMobile]);

  return isMobile;
}
