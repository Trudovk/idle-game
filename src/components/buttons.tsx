"use client";

type Props = {
  className?: string;
};

export const Button1: React.FC<React.PropsWithChildren<Props>> = (props) => {
  return (
    <button
      className={
        "border-2 border-black rounded-lg p-1 " + props.className ?? ""
      }
    >
      {props.children}
    </button>
  );
};
