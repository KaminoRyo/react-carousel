import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { StyledComponent } from "../model/Type";
import { ImageAndLinkUrl } from "../model/UrlList";
import { SelectButton, SelectButtonProps } from "./SelectButton";
import { ImageBox } from "./ImageBox";

export type CarouselProps = StyledComponent & {
	imageAndLinkUrls: ReadonlyArray<ImageAndLinkUrl>,
}

const CarouselElement = ({ className, imageAndLinkUrls }: CarouselProps): JSX.Element => {
	const [showingImageNumber, setShowingImageIndex] = useState(0);

	const imageBoxes = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		const indexObj = { ...imageAndLinkUrl, ...{ index: index } }
		return (
			<ImageBox {...indexObj}></ImageBox >
		)
	})

	const selectButtons = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		const props: SelectButtonProps = {
			index: index,
			onClick: (event) => setShowingImageIndex(index)
		}
		return <SelectButton {...props} key={index} />
	})

	const List = styled.div`
		width: 1280px;
		margin: 0 auto;
		white-space: nowrap;
		font-size: 0;
		transition: transform 0.5s;
	`

	return (
		<React.StrictMode>
			<div className={className}>
				<List>
					{imageBoxes}
				</List>
			</div>
			{selectButtons}
		</React.StrictMode>
	)
};

export const Carousel = styled(CarouselElement)`
  border: solid 1px #ff0000;
  overflow: hidden;
`;