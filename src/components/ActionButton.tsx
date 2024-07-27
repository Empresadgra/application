import { DocumentTextIcon } from "@heroicons/react/16/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

const ActionButton = ({ action }: { action: string }):JSX.Element => {
  return (
    <button
      className="flex flex-col bg-gray-100 rounded-2xl p-4 w-full"
      type="button"
    >
      <div className="w-full flex justify-between">
        <div className=" p-2 rounded-2xl bg-gray-900">
          <DocumentTextIcon className="size-6 text-white" />
        </div>
        <PlusIcon className="size-6 text-gray-900" />
      </div>
      <p className="mt-2 ">{action}</p>
    </button>
  );
}

export { ActionButton };