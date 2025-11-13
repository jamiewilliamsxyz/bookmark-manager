import { Link } from "lucide-react";
import ExternalLink from "@/components/ui/ExternalLink";

const Card = () => {
  return (
    <div className="bg-neutral-800 p-6 w-100 rounded-lg shadow-lg flex flex-col gap-6">
      <div className="flex w-full gap-3 items-center justify-between">
        <p className="text-neutral-100 font-medium text-lg leading-0">
          GitHub profile
        </p>
        <Link color="#f5f5f5" strokeWidth={1.5} size={20} />
      </div>

      <ExternalLink
        text="https://github.com/jamiewilliamsxyz"
        url="https://github.com/jamiewilliamsxyz"
      />

      <ul className="flex gap-3 mt-1 mb-0.5">
        <li className="bg-neutral-200 rounded-lg shadow-lg text-neutral-700 px-2 py-px">
          Development
        </li>
        <li className="bg-neutral-200 rounded-lg shadow-lg text-neutral-700 px-2 py-px">
          GitHub
        </li>
      </ul>
    </div>
  );
};

export default Card;
