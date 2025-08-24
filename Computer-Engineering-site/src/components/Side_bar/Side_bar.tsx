import React from "react";
import "./Side_bar.css";

interface Side_barProps {
    children?: React.ReactNode;
}
const Side_bar = () => {
  return (
    <aside className="side_bar_body" id="side_bar_scroll">

      <div>
        <ul>
          <li
            className="list_item"
            style={{ width: "250px", position: "fixed" }}
          >
            <div>
              <a href="#">My Website</a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Side_bar;