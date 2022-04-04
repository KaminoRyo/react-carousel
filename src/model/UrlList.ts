import firstImage from "../assets/1.jpg";
import secondImage from "../assets/2.jpg";
import thirdImage from "../assets/3.jpg";
import forthImage from "../assets/4.jpg";
import fifthImage from "../assets/5.jpg";

export type ImageAndLinkUrl = {
	"imageUrl": URL,
	"linkUrl": URL
}
export const imageAndLinkUrls: ReadonlyArray<ImageAndLinkUrl> = [
	{
		"imageUrl": new URL(firstImage),
		"linkUrl": new URL("https://yahoo.co.jp")
	},
	{
		"imageUrl": new URL(secondImage),
		"linkUrl": new URL("https://yahoo.co.jp")
	},
	{
		"imageUrl": new URL(thirdImage),
		"linkUrl": new URL("https://yahoo.co.jp")
	},
	{
		"imageUrl": new URL(forthImage),
		"linkUrl": new URL("https://yahoo.co.jp")
	},
	{
		"imageUrl": new URL(fifthImage),
		"linkUrl": new URL("https://yahoo.co.jp")
	}
] as const
