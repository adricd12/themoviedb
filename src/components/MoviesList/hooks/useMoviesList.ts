import { MovieItemSize } from "@/components/MovieItem/types/size";
import { SquareOptions } from "@/components/SquareOptionsList/SquareOptionsList";
import { useCallback, useState } from "react";

export const useMoviesList = () => {
    const [size, setSize] = useState(MovieItemSize.SMALL);

    const handleChangeSize = useCallback((selectedSize: MovieItemSize) => {
        setSize((selectedSize));
    }, []);

    const sizeOptions: SquareOptions[] = [
        {
            option: 'S',
            value: MovieItemSize.SMALL,
        },
        {
            option: 'M',
            value: MovieItemSize.MEDIUM,
        },
        {
            option: 'L',
            value: MovieItemSize.LARGE,
        },
    ];

    return {
        size,
        handleChangeSize,
        sizeOptions,
    };
}