import { DocumentIcon } from "@heroicons/react/24/outline";

const NavButton = (): JSX.Element => {
  return (
    <button className="size-8 flex justify-center items-center rounded-lg bg-gray-300">
      <DocumentIcon className="size-5 text-gray-600"/>
    </button> 
  );
}

export { NavButton };