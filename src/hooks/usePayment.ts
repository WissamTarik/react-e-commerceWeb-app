import { SubmitHandler, useForm } from "react-hook-form";
import {
  Paymentschema,
  TPaymentSchemaTypes,
} from "../Validation/PaymentValidation";
import {
  actCashPaymentInfo,
  actOnlinePaymentInfo,
} from "../libraries/redux/act/actPayment";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./storeHook";
import { zodResolver } from "@hookform/resolvers/zod";

export default function usePayment() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [payByCash, setPayByCash] = useState(false);
  const [cashLoader, setCashLoader] = useState(false);
  const [onlinePaymentLoader, setOnlinePaymentLoader] = useState(false);
  const { isLoading, isError } = useAppSelector(
    (store) => store.paymentReducer
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPaymentSchemaTypes>({
    mode: "onBlur",
    resolver: zodResolver(Paymentschema),
  });
  const onSubmit: SubmitHandler<TPaymentSchemaTypes> = (data) => {
    console.log(data);
    if (payByCash) {
      setCashLoader(true);
      dispatch(actCashPaymentInfo(data))
        .unwrap()
        .then(() => {
          toast.success("Order is made successfully", {
            style: {
              color: "green",
              fontWeight: "bold",
            },
          });
          navigate("/allOrders");
        })
        .catch((error) => {
          toast.error(error, {
            style: {
              color: "red",
              fontWeight: "bold",
            },
          });
        })
        .finally(() => {
          setCashLoader(false);
        });
    } else {
      setOnlinePaymentLoader(true);
      dispatch(actOnlinePaymentInfo(data))
        .unwrap()
        .then((res) => {
          toast.success("Order is made successfully", {
            style: {
              color: "green",
              fontWeight: "bold",
            },
          });

          window.open(res.session.url, "_self");
        })
        .catch((error) => {
          toast.error(error, {
            style: {
              color: "red",
              fontWeight: "bold",
            },
          });
        })
        .finally(() => {
          setOnlinePaymentLoader(false);
        });
    }
  };

  return {
    isLoading,
    isError,
    register,
    handleSubmit,
    onSubmit,
    errors,
    setPayByCash,
    cashLoader,
    onlinePaymentLoader,
  };
}
