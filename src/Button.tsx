import { FilterValueType } from "./App"



type ButtonProps = {
    title: string
    onClick?: () => void
    //changeFilter: (newFilterValue: FilterValueType) => void
  }
   
  export const Button = ({ title, onClick }: ButtonProps) => {


    return <button onClick={onClick}>{title}</button>
  }