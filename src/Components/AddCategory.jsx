import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('One Punch');

    const onInputChange = ({target :{value}}) => {
        setinputValue( value )
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        // setCategories(categories => [inputValue, ...categories]);
        setinputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
