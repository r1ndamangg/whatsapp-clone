import clsx from "clsx";

interface Props {
  isIncoming?: boolean;
  message: string;
}

const Message = ({ message, isIncoming = false }: Props) => {
  return (
    <div
      className={clsx("flex w-full", {
        "justify-end": !isIncoming,
        "justify-start": isIncoming,
      })}
    >
      <div
        className={clsx(
          "pl-[9px] pr-[7px] pb-2 pt-1.5 w-fit relative rounded-[7.5px]",
          {
            "bg-custom-dark rounded-tl-none": isIncoming,
            "bg-custom-teal rounded-tr-none": !isIncoming,
          }
        )}
      >
        {message}
        {isIncoming ? (
          <span className={clsx("text-custom-dark absolute top-0 -left-2")}>
            <TailIn />
          </span>
        ) : (
          <span className={clsx("text-custom-teal absolute top-0 -right-2")}>
            <TailOut />
          </span>
        )}
      </div>
    </div>
  );
};

const TailOut = () => {
  return (
    <svg
      viewBox="0 0 8 13"
      height="13"
      width="8"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      x="0px"
      y="0px"
      enableBackground="new 0 0 8 13"
    >
      <title>tail-out</title>
      <path
        opacity="0.13"
        d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
      ></path>
      <path
        fill="currentColor"
        d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
      ></path>
    </svg>
  );
};

const TailIn = () => {
  return (
    <svg
      viewBox="0 0 8 13"
      height="13"
      width="8"
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      x="0px"
      y="0px"
      enableBackground="new 0 0 8 13"
    >
      <title>tail-in</title>
      <path
        opacity="0.13"
        fill="#0000000"
        d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
      ></path>
      <path
        fill="currentColor"
        d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
      ></path>
    </svg>
  );
};

export default Message;
