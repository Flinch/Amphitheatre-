import { memo } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import ra from "./images/ra.png";
import "./App.css";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};
export const Box = memo(function Box({ name, type, isDropped, img }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type]
  );
  return (
    <div ref={drag} data-testid="box" className="small_box_loadout">
      <img src={img} className="loadout_img" />
    </div>
  );
});
