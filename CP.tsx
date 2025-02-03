export default function ClassicProduct() {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <div
          className="relative"
          style={{
            width: "1440px",
            height: "709px",
            gap: "30px",
            borderRadius: "5px 0px 0px 0px",
            border: "1px solid transparent",
            opacity: "1", // Set to 1 for visibility; adjust as needed
          }}
        >
          <img
            src="/CP.png" // Replace with your image path
            alt="Classic Product"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px 0px 0px 0px",
            }}
          />
        </div>
      </div>
    );
  }
  