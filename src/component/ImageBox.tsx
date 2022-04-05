import React from "react";
import styled from "styled-components";
import { StyledComponent } from "../model/Type";
import { ImageAndLinkUrl } from "../model/UrlList";

type ImageBoxProps = StyledComponent & {
	index: number,
} & ImageAndLinkUrl

const ImageBoxElement = ({ className, index, linkUrl, imageUrl }: ImageBoxProps): JSX.Element => {
	const Item = styled.div`
		width: 100%;
		height: 100%;
		border: solid 1px #00ff0d;
		user-select: none;
	`

	return (
		<div className={className}>
			<Item>
				<a href={linkUrl.href} key={index}>
					<img src={imageUrl.href} />
				</a>
			</Item>
		</div>
	)
}

export const ImageBox = styled(ImageBoxElement)`
	display: inline-block;
	width: 100%;
	height: 512px;
	font-size: 16px;
`;