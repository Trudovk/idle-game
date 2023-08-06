"use client";

type Props = {
  className?: string;
  onClick?: () => unknown;
};

export const Button1: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={
        "border-2 border-black rounded-lg p-1 active:bg-gray-400 " +
          props.className ?? ""
      }
    >
      {props.children}
    </button>
  );
};
