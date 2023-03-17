// use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Edit = ({ attributes, setAttributes }) => {
	const { text } = attributes;

	return (
		<RichText
			{...useBlockProps()}
			tagName="h4"
			onChange={(value) => setAttributes({ text: value })}
			value={text}
			placeholder={__("mey Text", "textbox")}
			allowdFormats={["core/bold", "core/italic"]}
		/>
	);
};

export default Edit;
