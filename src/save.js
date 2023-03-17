// use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
import { useBlockProps } from "@wordpress/block-editor";

const Save = () => {
	return (
		<p {...useBlockProps.save()}>Save JSX with this, Custom Block Stuff!</p>
	);
};

export default Save;
