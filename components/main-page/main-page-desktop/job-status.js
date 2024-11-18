const Status = ({ status }) => {
  // Define styles for different statuses
  const getStatusStyle = () => {
    switch (status) {
      case "REJECTED":
        return {
          background: "#FFF0F0",
          color: "#AF0C0C",
        };
      case "SELECTED":
        return {
          background: "#E7F7EF",
          color: "#2E9F68",
        };
      case "IN PROGRESS":
        return {
          background: "#FFF0E6",
          color: "#FF7C1C",
        };
      default:
        return {
          background: "transparent",
          color: "#000", // Default text color for unknown statuses
        };
    }
  };

  return (
    <div
      style={{
        ...getStatusStyle(),
        textAlign: "center",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "11px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "160%", // 17.6px
        letterSpacing: "0.242px",
        padding: "4px 8px", // Optional for better appearance
        borderRadius: "4px", // Optional rounded corners
      }}
    >
      {status}
    </div>
  );
};

export default Status;
