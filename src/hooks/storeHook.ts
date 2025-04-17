import { useDispatch, useSelector } from "react-redux";
import { dispatchType, storeType } from "../libraries/redux/store";


const useAppDispatch=useDispatch.withTypes<dispatchType>()
const useAppSelector=useSelector.withTypes<storeType>()

export {useAppDispatch,useAppSelector}