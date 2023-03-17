// use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { title } = attributes;
	const { description } = attributes;

	return (
		<>
			<RichText.Content {...useBlockProps.save()} tagName="h4" value={title} />
			<RichText.Content
				{...useBlockProps.save()}
				tagName="p"
				value={description}
			/>
		</>
	);
};

export default Save;
