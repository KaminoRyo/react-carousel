import firstImage from "../assets/1.jpg";
import secondImage from "../assets/2.jpg";
import thirdImage from "../assets/3.jpg";
import forthImage from "../assets/4.jpg";
import fifthImage from "../assets/5.jpg";

const urlStrings = [
	firstImage,
	secondImage,
	thirdImage,
	forthImage,
	fifthImage,
]

export const urlList: Array<URL> = urlStrings.map((string) => new URL(string))