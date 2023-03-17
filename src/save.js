// use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { title, description, alignment } = attributes;

	return (
		<>
			<RichText.Content
				{...useBlockProps.save({
					className: `text-box-align-${alignment}`,
				})}
				tagName="h4"
				value={title}
			/>
			<RichText.Content
				{...useBlockProps.save({
					className: `text-box-align-${alignment}`,
				})}
				tagName="p"
				value={description}
			/>
		</>
	);
};

export default Save;
