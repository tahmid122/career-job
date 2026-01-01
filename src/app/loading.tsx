import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

// Default values shown

const Loading = () => {
  return (
    <div className="h-screen w-full fixed bg-white z-999 flex items-center justify-center top-0 left-0">
      <LineSpinner size="40" stroke="3" speed="1" color="black" />;
    </div>
  );
};

export default Loading;
