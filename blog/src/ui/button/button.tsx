import React, { FC } from "react";
import type {
  ButtonImportanceMap,
  ButtonProps,
  ButtonSizeMap,
} from "./button.defs";
import c from "classnames";

const size_map: ButtonSizeMap = {
  1: {
    x: "2",
    y: "1",
  },
  2: { x: "2.5", y: "1.5" },
  3: { x: "3", y: "2" },
};

const importance_map: ButtonImportanceMap = {
  1: {
    wrapper:
      "border-red-400 bg-red-400 hover:bg-red-500 hover:border-red-500 text-black focus:ring-black",
    icon: "fill-black",
  },
  2: {
    wrapper:
      "border-green-400 bg-green-400 hover:bg-green-500 hover:border-green-500 text-black focus:ring-black",
    icon: "fill-black",
  },
  3: {
    wrapper:
      "border-red-400 text-red-400 hover:bg-red-400 hover:border-red-400 hover:text-black focus:ring-black",
    icon: "fill-black",
  },
};

/* 
    IMPORTANT: Span is required inside button. On iOS devices there is a problem
    with display svg icons inside button if there is no wrapper - "span". 
*/
const Button: FC<ButtonProps> = ({
  className,
  children,
  size = 2,
  icon,
  reversed,
  rounded,
  importance = 1,
  ...rest
}) => {
  const hasChildren = !!children;
  const sizeClasses = size_map[size];
  const importanceClasses = importance_map[importance];

  return (
    <button
      {...rest}
      className={c(
        "ui-button",
        className,
        importanceClasses.wrapper,
        `px-${hasChildren ? sizeClasses.x : sizeClasses.y}`,
        "py-" + sizeClasses.y,
        { "rounded-full": rounded },
        "w-max shrink-0 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out font-mono font-bold rounded-sm"
      )}
    >
      <span className={c("flex", { "flex-row-reverse": reversed })}>
        {children}
        {icon && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={c(`[&>path]: ${importanceClasses.icon}`, {
              "ml-2": !reversed && hasChildren,
              "mr-2": reversed && hasChildren,
            })}
          >
            {icon}
          </svg>
        )}
      </span>
    </button>
  );
};

export { Button };
