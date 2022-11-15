
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gifitem } from "./Gifitem";

export const GifGrid = ({category}) => {

    /** hooks personalizado, que devuelve las imagenes y un cargandop */
    const { images, isLoading }= useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && ( <h2> Cargando... </h2> )
            }

            <div className="card-grid">

                {
                    images.map((image) => 
                        <Gifitem
                            key={image.id}
                            { ...image}
                        />
                    )
                }
            </div>
        </>
    )
}



