import Filters from "../components/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";

const url = '/products'

const allProductsQuery = (params) =>{
  const {search, category,company,sort,price,shipping,page} = params;
  return {
    queryKey:[
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 10000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url,{params})
  }
}

export const loader = (queryClient) => async ({request}) =>{
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  const response = await queryClient.ensureQueryData(allProductsQuery(params))
  const products = response.data.data
  const meta = response.data.meta
  return {products,meta,params};
}

const Products = () => {
  return (
    <>
    <Filters />
    <ProductsContainer/>
    <PaginationContainer/>
    </>
  )
}
export default Products;