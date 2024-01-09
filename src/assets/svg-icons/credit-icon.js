const CreditIcon = ({ width = "36px", height = "36px", className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="36"
        height="36"
        rx="4"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.0002 9.79727C8.42343 9.79727 7.8002 10.3553 7.8002 11.2473V24.7473C7.8002 25.6393 8.42343 26.1973 9.0002 26.1973H27.0002C27.577 26.1973 28.2002 25.6393 28.2002 24.7473V21.8473H23.0003C20.874 21.8473 19.1503 20.1236 19.1503 17.9973C19.1503 15.871 20.874 14.1473 23.0003 14.1473H28.2002V11.2473C28.2002 10.3553 27.577 9.79727 27.0002 9.79727H9.0002ZM29.8002 14.1473V11.2473C29.8002 9.65398 28.6326 8.19727 27.0002 8.19727H9.0002C7.36782 8.19727 6.2002 9.65398 6.2002 11.2473V24.7473C6.2002 26.3405 7.36782 27.7973 9.0002 27.7973H27.0002C28.6326 27.7973 29.8002 26.3405 29.8002 24.7473V21.8473H29.8503V14.1473H29.8002ZM22.0002 17.9473C22.0002 17.4778 22.3808 17.0973 22.8502 17.0973H24.1502C24.6197 17.0973 25.0002 17.4778 25.0002 17.9473C25.0002 18.4167 24.6197 18.7973 24.1502 18.7973H22.8502C22.3808 18.7973 22.0002 18.4167 22.0002 17.9473ZM20.8503 17.9973C20.8503 16.8099 21.8129 15.8473 23.0003 15.8473H28.1503V20.1473H23.0003C21.8129 20.1473 20.8503 19.1847 20.8503 17.9973Z"
        fill="white"
      />
    </svg>
  );
};

export default CreditIcon;
