import { FaAngleRight } from "react-icons/fa6";
type Props = {
  title: string;
};
const Banner = ({ title }: Props) => {
  return (
    <div className="h-100 xl:h-125 bg-[linear-gradient(to_right,#000000b8,#000000b8),url('/jobdetailsbanner.jpg')] bg-center bg-cover flex items-center justify-center text-white">
      <div>
        <h1 className="text-4xl mb-4 font-bold text-white">{title}</h1>
        <p className="flex items-center gap-1 justify-center font-medium text-white text-lg">
          Home <FaAngleRight /> {title}
        </p>
      </div>
    </div>
  );
};

export default Banner;
