type Props = {
  text: string;
};

function Tooltip({ text }: Props) {
  if (!text) return <></>;
  return (
    <span className="tooltip">
      (i)
      <span className="tooltip-content">{text}</span>
    </span>
  );
}

export default Tooltip;
