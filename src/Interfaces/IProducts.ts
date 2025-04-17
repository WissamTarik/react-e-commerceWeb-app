export interface IProducts{
        solid:number,
        images:string[],
        subcategory:SubcategoryInterface[],
        ratingQuantity:number,
        _id:string,
        slug: string,
        title: string,
        description: string,
        quantity:number,
        price:number,
        imageCover:string,
        category:CategoryAndBrandInterface,
        brand:CategoryAndBrandInterface,
        ratingsAverage:number,
        createdAt:string,
        updatedAt:string,
        _v:number,
        reviews:string[]
        id:string,
        priceAfterDiscount?:number
}
export interface SubcategoryInterface{
    _id:string,
    name:string,
    slug:string,
    category:string
}
 export interface CategoryAndBrandInterface{
    _id:string,
    name:string,
    slug:string,
    image:string
}
/* 
{

}
*/