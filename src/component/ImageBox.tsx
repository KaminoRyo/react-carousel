import React from "react";
import styled from "styled-components";
import { StyledComponent } from "../model/Type";
import { ImageAndLinkUrl } from "../model/UrlList";

type ImageBoxProps = StyledComponent & {
	index: number,
} & ImageAndLinkUrl

const ImageBoxElement = ({ className, index, linkUrl, imageUrl }: ImageBoxProps): JSX.Element => {
	return (
		<div className={className}>
			<a href={linkUrl.href} key={index}>
				<img src={imageUrl.href} />
			</a>
		</div>
	)
}

export const ImageBox = styled(ImageBoxElement)`
	`;