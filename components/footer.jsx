import Image from "next/image"

export const Footer = () => {
    return (
        <div className="flex justify-center items-center py-12">
            <Image src='/logo.jpeg' width={40} height={40} />
        </div>
    )
}