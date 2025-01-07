import Logo from "@/assets/Logo.svg"

export function Header() {

    return (
        <div className="px-3 py-1 border-b">

            <div className=" flex rounded-sm px-2 py-2">
                <img src={Logo} alt="Logo" width="40" />

                <div className="flex flex-col ">
                    <span className="font-bold text-black poppins-bold text-[17px] ml-2">Delta</span>
                    <span className=" text-black poppins-light text-sm -my-1 ml-2">Admin Login</span>
                </div>

            </div>

        </div>
    )
}
