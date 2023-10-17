import "./styles.css";
import ColorButton from "./ColorButton";

export default function App() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <ColorButton color="white" bgcolorName="Green" />
          <ColorButton color="white" bgcolorName="Olive" />
          <ColorButton color="white" bgcolorName="Red" />
          <ColorButton color="white" bgcolorName="Gray" />
          <ColorButton color="black" bgcolorName="Yellow" />
          <ColorButton color="black" bgcolorName="Pink" />
          <ColorButton color="white" bgcolorName="Purple" />
          <ColorButton color="black" bgcolorName="lavender" />
          <ColorButton color="black" bgcolorName="white" />
          <ColorButton color="white" bgcolorName="Black" />
        </div>
      </div>
    </>
  );
}
