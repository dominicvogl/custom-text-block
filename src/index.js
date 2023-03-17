// Register the block, Function from Wordpress Version of react
import { registerBlockType } from "@wordpress/blocks";

import Edit from "./edit.js";
import Save from "./save.js";

import "./style.scss";
import "./editor-style.scss";

// register the block
registerBlockType("dominic-vogl/text-box", {
	icon: {
		src: "smiley",
		foreground: "#fff",
		background: "#f00",
	},
	edit: Edit,
	save: Save,
});
