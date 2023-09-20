import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import VerifiedUserIcon from "../icons/verificate-user.icon";

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
          <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
        `,
      author: "Ken T.",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const CommentFragment: React.FC = () => {
  return (
    <div className="flex mt-6 h-[186px] p-6 max-w-xl rounded-lg bg-white-100">
      {reviews.featured.map((review) => (
        <div key={review.id} className="flex flex-col">
          <div className="flex items-center">
            <img
              src={review.avatarSrc}
              alt={`${review.author}.`}
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      review.rating > rating
                        ? "text-yellow-400"
                        : "text-gray-300",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="flex justify-center items-center mt-1">
                <h4 className="text-sm font-bold text-gray-900">
                  {review.author}
                </h4>
                <div className="flex ml-1 justify-center items-center ">
                  <VerifiedUserIcon />
                  <p className="ml-1 text-green-400">Verified Customer</p>
                </div>
              </div>
              <p className="sr-only">{review.rating} out of 5 stars</p>
            </div>
          </div>

          <div
            className="mt-4 space-y-6 text-base italic text-gray-600"
            dangerouslySetInnerHTML={{ __html: review.content }}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentFragment;
