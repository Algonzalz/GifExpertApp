import {  useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    // const getImages = useCallback(async () => {
    //         const newImages = await getGifs(category);
    //         setImages(newImages);
    //         setIsLoading(false);
    //     },[category])
    
        /** para no renderizar las consultas de bd cada vez que hay cambio en el objeto */
    useEffect(() => { // NO puedo devoolver una promesa, pero si una funcion


        const getImages = async () => {
            const newImages = await getGifs(category);
            setImages(newImages);
            setIsLoading(false);
        }

        getImages();
    }, [category])
    

  return { // devuelve un objeto no un hmtl como jsx
      images,
      isLoading
  }
  
}
