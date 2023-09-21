import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const CtaList = [
  {
    id: 1,
    content: `
    <p>Negative Ion Technology may <strong>help with allergens</strong></p>
  `,
    href: "#",
  },
  { id: 2, content: `<p>Designed for <strong>air rejuvenation</strong></p>`, href: "#" },
  {
    id: 3,
    content: `<p><strong>Perfect for every room </strong> in all types of places.</p>`,
    href: "#",
  },
];

const ListCTA: React.FC = () => {
  return (
    <ul className="flex mt-6 lg:mt-3 w-full flex-col">
      {CtaList.map((cta) => (
        <li key={cta.id} className="flex min-w-[302px] items-star">
          <CheckIcon className="flex w-4 h-4 lg:w-[24px] lg:h-[24px] text-blue-300" />
          <div
            className="text-xs text-grey-200 ml-4 first:pt-4 last:pb-4"
            dangerouslySetInnerHTML={{ __html: cta.content }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListCTA;
