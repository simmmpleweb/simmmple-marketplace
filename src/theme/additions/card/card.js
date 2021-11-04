
const Card = {
    baseStyle: {
      p: "16px 16px 32px 16px",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      position: "relative",
      boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
      borderRadius: "30px",
      minWidth: "0px",
      wordWrap: "break-word",
      backgroundClip: "border-box",
    },
    variants: {
      panel: (props) => ({
        bg: props.colorMode === "dark" ? "gray.700" : "white",
        width: "100%",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        borderRadius: "30px",
      }),
    },
    defaultProps: {
      variant: "panel",
    },
  };
  
  export const CardComponent = {
    components: {
      Card,
    },
  };