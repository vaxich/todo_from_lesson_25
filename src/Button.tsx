import { FilterValueType } from "./App"



type ButtonProps = {
    title: string
    onClick?: () => void
    className? :string
    //changeFilter: (newFilterValue: FilterValueType) => void
  }
   
  export const Button = ({ title, onClick , className }: ButtonProps) => {


    return <button className={className} onClick={onClick}>{title}</button>
  }