import React from "react";
import "./SpinKit.css";

const Loading = (props) => {
	return (
		<div className="sk-grid-position">
			<div class="sk-grid">
				<div class="sk-grid-cube"></div>
				<div class="sk-grid-cube"></div>
				<div class="sk-grid-cube"></div>
				<div class="sk-grid-cube"></div>
				<div class="sk-grid-cube"></div>
				<div class="sk-grid-cube"></div>
				<div class="sk-grid-cube"></div>
				<div class="sk-grid-cube"></div>
				<div class="sk-grid-cube"></div>
			</div>
		</div>
	);
};

Loading.defaultProps = {
	message: "Loading...",
};

export default Loading;
