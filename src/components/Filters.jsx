import { Form,useLoaderData,Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
const Filters = () => {
  const {meta , params } = useLoaderData()
  const {search,company,category,shipping , order, price} = params
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput type='search' label='search product' name='search' size='input-sm' defaultValue={search}/>
      <FormSelect label='select category' name='category' list={meta.categories} size='select-sm' defaultValue={category}></FormSelect>
      <FormSelect label='select company' name='companies' list={meta.companies} size='select-sm' defaultValue={company}></FormSelect>
      <FormSelect label='sort by' name='order' list={['a-z','z-a','low','high']} size='select-sm' defaultValue={order}></FormSelect>
      <FormRange name='price' label='select price' size='range-sm' price={price}></FormRange>
      <FormCheckbox name='shipping' label='free shipping' size='checkbox-sm' defaultValue={shipping}></FormCheckbox>
      <button type="submit" className="btn btn-primary btn-sm">search</button>
      <Link to='/products' className="btn btn-accent btn-sm">reset</Link>
    </Form>
  )
}
export default Filters;