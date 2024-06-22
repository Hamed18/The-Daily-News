import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const RightSideNav = () => {
	return (
		<div>
			<div className="p-4 mb-6 border rounded-lg border-black">
			   <h2 className="text-3xl mb-3">Login With</h2>
			   <button className="btn btn-outline w-full mb-2">
                   <FaGoogle></FaGoogle>
				   Google
			    </button>
			   <button className="btn btn-outline w-full">
                   <FaGithub></FaGithub>
				   Github
			    </button>
			</div>
			<div className="p-4 mb-6 border border-black rounded-lg">
			   <h2 className="text-3xl mb-3">Find Us on</h2>
			   <a href="" className="p-4 flex items-center text-lg border border-black rounded-t-lg">
				   <FaFacebook className="mr-3"></FaFacebook>
				   <span>Facebook</span> 
			   </a>
			   <a href="" className="p-4 flex items-center text-lg border-x border-black">
				   <FaTwitter className="mr-2"></FaTwitter>
				   <span>Twitter</span> 
			   </a>
			   <a href="" className="p-4 flex items-center text-lg border border-black rounded-b-lg">
				   <FaInstagram className="mr-2"></FaInstagram>
				   <span>Instagram</span> 
			   </a>
			</div>
		</div>
	);
};

export default RightSideNav;