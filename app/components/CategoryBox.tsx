"use client";

import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    //first define an empty query
    let currentQuery = {};

    //look for the current params and parse them so its not will be string
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    //spreads the current query and add the new category
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };
    // check if it already selected and if it selected-
    //it remove it from my updated query
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    //generate the url string using query string stringify url
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, router, params]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
