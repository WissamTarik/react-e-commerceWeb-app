import toast from "react-hot-toast";
import { actVerifyPassword } from "../libraries/redux/act/actForgetAndVerifyPassword";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./storeHook";
import { useEffect, useState } from "react";

const useVerifyPassword = () => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoading } = useAppSelector((store) => store.authReducer);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function getOtp() {
    if (otp.length == 6) {
      dispatch(actVerifyPassword(otp))
        .unwrap()
        .then(() => {
          toast.success("OTP is correct", {
            style: {
              fontWeight: "bold",
              color: "green",
            },
          });
          navigate("/updatePassword");
        })
        .catch((error:string) => {
          setErrorMessage(error)
          toast.error(error, {
            style: {
              color: "red",
              fontWeight: "bold",
            },
          });
        });
    } else {
      setErrorMessage("6 Numbers of Otp Required");
    }
  }
  useEffect(() => {
    setOtp("");
  }, []);
  return {
    getOtp,
    isLoading,
    errorMessage,
    otp,
    setOtp,
  };
};
export default useVerifyPassword;
