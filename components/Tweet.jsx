import Link from "next/link";
import { Button } from "../components/Button";

export const TweetComponent = ({ content, creator, date, id }) => {
  return (
    <div className="flex flex-col w-full p-4 bg-gray-200 rounded-lg">
      <h5 className="font-bold text-gray-800">{creator}</h5>
      <h6 className="text-xs font-medium text-gray-600">
        {date
          ? new Date(
              JSON.parse(JSON.stringify(date)).seconds * 1000
            ).toISOString()
          : null}
      </h6>
      <p className="pt-2 mt-2 text-sm font-normal border-t border-gray-300">
        {content}
      </p>
      <div className="inline-flex justify-end space-x-3">
        <Button className="px-5">like</Button>

        <Link href={"/tweet/" + id}>
          <Button className="px-5">voir</Button>
        </Link>
      </div>
    </div>
  );
};
