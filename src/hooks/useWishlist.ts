import { useState } from "react"
import { useAppDispatch, useAppSelector } from "./storeHook"
import { actAddToWishlist } from "../libraries/redux/act/actAddToWishlist"
import toast from "react-hot-toast"
import { actGetUserWishlist } from "../libraries/redux/act/actGetUserWishlist"
import { IProducts } from "../Interfaces/IProducts"
import { loadingType } from "../genericTypes/genericTypes"

type UseWishlistReturn = {
  isLoading: boolean;
  isItemInWishList: boolean;
  handleAddToWishlist: (productId: string) => void;
  toggleMenu: (id: string) => void;
  openMenus: Record<string, boolean>;
  isError: boolean;
  getWishlistLoading: loadingType;
  records: IProducts[]; 
};
const useWishlist = (id:string):UseWishlistReturn => {
    const dispatch=useAppDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const {itemsInWishlist}=useAppSelector((store)=>store.wishlistReducer)
    const isItemInWishList=itemsInWishlist.includes(id)
    const {records,getWishlistLoading,isError}=useAppSelector((store)=>store.wishlistReducer)
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  
    const toggleMenu = (id: string) => {
      setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };
 
   
    function handleAddToWishlist(productId:string){
      setIsLoading(true)
       dispatch(actAddToWishlist(productId)).then(()=>{
        toast.success("Product is added to wishlist successfully",{
            style:{
                fontWeight:"bold",
                color:"green"
            }
        })
         dispatch(actGetUserWishlist())
       }).catch(()=>{
        toast.error("Product is failed to add to wishlist",{
            style:{
                fontWeight:"bold",
                color:"red"
            }
        })
       }).finally(()=>{
        setIsLoading(false)
       })
    }
  return{isLoading,isItemInWishList,handleAddToWishlist,toggleMenu,openMenus,isError,getWishlistLoading,records}
}

export default useWishlist