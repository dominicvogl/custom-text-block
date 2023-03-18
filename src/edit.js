import { __ } from "@wordpress/i18n";
import {
	useBlockProps, // use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
	RichText, // use the rich text editor like in paragraph block
	BlockControls, // use the block controls over the blocks for alignment, html tag, etc
	AlignmentToolbar, // Toolbar component for alignment settings, ready to use
	InspectorControls, // sidebare controls for settings shown in the sidebar
} from "@wordpress/block-editor";
import {
	ToolbarGroup, // Group of one or multiple Toolbar settings
	ToolbarButton, // single button
	ToolbarDropdownMenu, // Drondown menu for more options
	PanelBody, // Panel for sidebar controls, like an Tab to close and open
	TextControl, // input field for sidebar controls
	TextareaControl, // textarea field for sidebar controls
	ToggleControl, // toggle field for sidebar controls
} from "@wordpress/components";

const Edit = ({ attributes, setAttributes }) => {
	// get data from attributes (defined in block.json)
	// needed for the editor to store and load the data
	const { title, description, alignment } = attributes;

	// CALLBACKS
	/**
	 * set the new title in the attributes
	 * @param newText
	 */
	const onChangeTitle = (newText) => {
		setAttributes({ title: newText });
	};

	/**
	 * set the new description in the attributes
	 * @param newText
	 */
	const onChangeDescription = (newText) => {
		setAttributes({ description: newText });
	};

	/**
	 * set the new alignment in the attributes
	 * @param newAlignment
	 */
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Custom Stuff", "textbox")}
					icon={"smiley"}
					initialOpen
				>
					<TextControl
						label="input label"
						value={title}
						help="help text"
						onChange={onChangeTitle}
					/>
					<TextareaControl
						label="input label"
						value={description}
						help="help text"
						onChange={onChangeDescription}
					/>
					<ToggleControl
						label={"Start Fire squence"}
						checked={false}
						onChange={(v) => console.log(v)}
					/>
				</PanelBody>
			</InspectorControls>

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
