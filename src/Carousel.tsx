
// useStateをimport
import React from "react";



export const Carousel = ({ urlList }: { urlList: Array<URL> }) => {
	const imageTags = urlList.map((url, index) => {
		return <img src={url.href} key={index} />
	})

	return (
		<React.StrictMode>
			<div>
				{imageTags}
			</div>
		</React.StrictMode>
	)
};