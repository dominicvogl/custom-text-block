// use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
import { useBlockProps } from "@wordpress/block-editor";

const Edit = () => {
	return <p {...useBlockProps()}>Edit this Stuff!</p>;
};

export default Edit;
