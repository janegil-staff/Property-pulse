import Link from "next/link";
import { Children } from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray",
  textColor = "text-gray-800",
  children,
  buttenInfo,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={buttenInfo.link}
        className={`${buttenInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttenInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
