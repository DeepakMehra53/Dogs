import Backgroundimg from "../assets/Background.png";

export const Background = () => {
  return (
    <div
      className="hero-background"
      style={{
        backgroundImage: `url(${Backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};
