import React from "react";

const Header = () => {
	return (
		<div>
			<span
				onClick={() => window.scroll(0, 0)}
				className='w-full cursor-pointer fixed flex justify-center uppercase bg-[#11141c]  text-[1.2rem] md:text-[1.7rem] lg:text-[2.5rem] text-white z-[100] shadow shadow-black py-[7px] lg:py-[12px] font-extralight tracking-wider	'>
				🎬 Entertainment Hub 🎥
			</span>
		</div>
	);
};

export default Header;
