import  { memo } from "react";

const Heading = memo(({ title }:{ title:string}) => {
  return (
    <h1 className="bg-clip-text text-center my-4 pb-10 text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl md:text-5xl font-black">
      {title}
    </h1>
  );
})

export default Heading;
