import Loader from "react-loader-spinner";

export const Loaders = () => {
  return (
    <Loader
      type="TailSpin"
      color="white"
      height={20}
      width={20}
      timeout={3000} //3 secs
    />
  );
};
