// use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from "@wordpress/components";

const Edit = ({ attributes, setAttributes }) => {
	const { title } = attributes;
	const { description } = attributes;

	return (
		<>
			<section>
				<BlockControls group="block">
					<p>Block Controls</p>
				</BlockControls>
				<BlockControls group="inline">
					<p>Inline Controls</p>
				</BlockControls>
				<BlockControls
					controls={[
						{
							title: "Button 1",
							icon: "admin-generic",
							isActive: true,
							onClick: () => console.log("Button 1 clicked"),
						},
						{
							title: "Button 2",
							icon: "smiley",
							onClick: () => console.log("Button 2 clicked"),
						},
					]}
				>
					{description && (
						<ToolbarGroup>
							<ToolbarButton
								title="Align Left"
								icon="editor-alignleft"
								onClick={() => console.log("Align Left")}
							/>
							<ToolbarButton
								title="Align center"
								icon="editor-aligncenter"
								onClick={() => console.log("Align center")}
							/>
							<ToolbarButton
								title="Align right"
								icon="editor-alignright"
								onClick={() => console.log("Align right")}
							/>
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
					)}
				</BlockControls>
				<RichText
					{...useBlockProps()}
					tagName="h3"
					onChange={(value) => setAttributes({ title: value })}
					value={title}
					placeholder={__("mey Text", "textbox")}
					allowedFormats={[]}
				/>
				<RichText
					{...useBlockProps()}
					tagName="p"
					onChange={(value) => setAttributes({ description: value })}
					value={description}
					placeholder={__("mey Text", "textbox")}
					allowedFormats={["core/bold", "core/italic"]}
				/>
			</section>
		</>
	);
};

export default Edit;
