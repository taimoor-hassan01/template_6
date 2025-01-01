export default function Footer(){
    return (
        <>
        <footer className="mt-48">

            <div className="flex footer p-8 border-t-2 leading-10 gap-40 px-28 border-gray-300">
                <div className="w-[14rem]  ">
                    <h2 className="font-bold text-[2rem] mb-12">Furniro.</h2>
                    <p className="leading-none text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,<br />
                    FL 33134 USA</p>
                </div>


                <div>
                    <h4 className="text-[#9F9F9F] mb-10">Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div>
                    <h4 className="text-[#9F9F9F] mb-10">Help</h4>
                    <ul>
                        <li>Payment Option</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[#9F9F9F] mb-10">Newsletter</h4>
                    <input type="text" placeholder="Enter Your Email Address" className="border-b-2 border-gray-300"/>
                    <button type="submit" className="font-bold ml-2">SUBSCRIBE</button>
                </div>
                
            </div>
            <div  className="para mx-28">

                <hr />
                <p className="py-5">2023 furniro. All rights reverved</p>
            </div>
        </footer>
        </>
    )

}