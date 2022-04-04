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

	return (
		<React.StrictMode>
			<div className={className}>
				{imageBoxes}
			</div>
			{selectButtons}
		</React.StrictMode>
	)
};

export const Carousel = styled(CarouselElement)`
    white-space: nowrap;
		/* サンプル画像のサイズ */
		width: 1280px;
		height:512px;
		overflow:hidden;
  `;