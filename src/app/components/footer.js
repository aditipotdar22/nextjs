import Image from "next/image";

export default function Footer() {
	return(
		<footer className="container">
			<div className="bg-slate-900 px-10 py-8">
				<div className="flex justify-between">
					<Image
					  className="mx-2"
						src={"/kredx-logo.svg"}
						alt="logo"
						width={70}
						height={70}
					/>
					<div className="flex">
					<Image
						className="mx-2"
						src={"/instagram.svg"}
						alt="social-media"
						width={20}
						height={20}
					/>
					<Image
						className="mx-2"		
						src={"/linkedin.svg"}
						alt="social-media"
						width={20}
						height={20}
					/>
					<Image
					  className="mx-2"
						src={"/facebook.svg"}
						alt="social-media"
						width={20}
						height={20}
					/>
					<Image
				    className="mx-2"
						src={"/twitter.svg"}
						alt="social-media"
						width={20}
						height={20}
					/>
					<Image
					  className="mx-2"
						src={"/youtube.svg"}
						alt="social-media"
						width={20}
						height={20}
					/>
					</div>
				</div>
			</div>
		</footer>
	)
}