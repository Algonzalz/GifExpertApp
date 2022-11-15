import { useState} from "react";
import { AddCategory, GifGrid } from "./Components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Coraje', 'Dexter'])

    const onAddCategory = (newCategory) =>{
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories(cat => [...cat, newCategory]);
        // setCategories( ca => [...ca, 'vaca y pollito' ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ (event) => onAddCategory(event) }
            />
            
                {
                    categories.map((category) =>(
                        <GifGrid 
                        key={category}
                        category={ category} />
                    ))
                }
        </>
    )
};
