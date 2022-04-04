import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import { ImageAndLinkUrl } from "../model/UrlList";
import { SelectButton, SelectButtonProps } from "./SelectButton";

export type CarouselProps = {
	className?: string
	imageAndLinkUrls: ReadonlyArray<ImageAndLinkUrl>,
}

const CarouselElement = ({ className, imageAndLinkUrls }: CarouselProps): JSX.Element => {
	const [showingImageNumber, setShowingImageNumber] = useState(0);

	const linkedImageTags = imageAndLinkUrls.map((imageAndLinkUrl, index) => {
		return (
			<a href={imageAndLinkUrl.linkUrl.href}>
				<img src={imageAndLinkUrl.imageUrl.href} key={index} />
			</a>
		)
	})

	const changeShowingImageNumber = (isPrevious: boolean) => {
		const number = isPrevious ? -1 : 1
		const target = showingImageNumber + number
		// 最小1～画像数まで
		const isInRange = (target >= 1) && (target <= (imageAndLinkUrls.length))
		if (isInRange) { setShowingImageNumber(target) }
	}

	const previousButtonProps: SelectButtonProps = {
		isPrevious: true,
		onClick: (event) => { changeShowingImageNumber(true) }
	}
	const nextButtonProps: SelectButtonProps = {
		isPrevious: false,
		onClick: (event) => { changeShowingImageNumber(false) }
	}

	return (
		<React.StrictMode>
			<div className={className}>
				{linkedImageTags}
			</div>
			<SelectButton {...previousButtonProps} />
			<SelectButton {...nextButtonProps} />
		</React.StrictMode>
	)
};

export const Carousel = styled(CarouselElement)`
    white-space: nowrap;
		/* transform: translate3d(0%,0,0); */
  `;