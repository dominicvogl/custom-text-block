// use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from "@wordpress/components";

const Edit = ({ attributes, setAttributes }) => {
	const { title, description, alignment } = attributes;

	const onChangeTitle = (newText) => {
		setAttributes({ title: newText });
	};
	const onChangeDescription = (newText) => {
		setAttributes({ description: newText });
	};

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	return (
		<>
			<section>
				<BlockControls group="block">
					<p>Block Controls</p>
				</BlockControls>
				<BlockControls group="inline">
					<p>Inline Controls</p>
				</BlockControls>

				<BlockControls>
					<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
					<ToolbarGroup>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={__("Dropdown for more alignments", "textbox")}
							controls={[
								{
									title: __("Wide", "textbox"),
									icon: "align-wide",
								},
								{
									title: __("Full", "textbox"),
									icon: "align-full-width",
								},
							]}
						/>
					</ToolbarGroup>
				</BlockControls>
				<RichText
					{...useBlockProps({
						className: `text-box-align-${alignment}`,
					})}
					tagName="h3"
					onChange={onChangeTitle}
					value={title}
					placeholder={__("mey Text", "textbox")}
					allowedFormats={[]}
				/>
				<RichText
					{...useBlockProps({
						className: `text-box-align-${alignment}`,
					})}
					tagName="p"
					onChange={onChangeDescription}
					value={description}
					placeholder={__("mey Text", "textbox")}
					allowedFormats={["core/bold", "core/italic"]}
				/>
			</section>
		</>
	);
};

export default Edit;
