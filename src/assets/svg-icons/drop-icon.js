const DropIcon = ({ width = "14px", height = "9px", className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.11092 8.50258C7.51563 9.15871 6.48437 9.15872 5.88908 8.50258L0.615075 2.6895C-0.259446 1.72559 0.424491 0.181595 1.72599 0.181595L12.274 0.181596C13.5755 0.181596 14.2594 1.72559 13.3849 2.68949L8.11092 8.50258Z"
        fill="#4D4D4D"
      />
    </svg>
  );
};

export default DropIcon;
