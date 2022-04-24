/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { MovieStar, Title, Overlay, MovieStarContent, MovieStarInfos, MovieStarDescription, MovieStarButtons, MovieStarGenres, Button } from './styles';


export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return (
        <MovieStar style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <Overlay>
                <MovieStarContent>
                    <Title>{item.original_name}</Title>
                    <MovieStarInfos>
                        <p className="points">{item.vote_average} pontos</p>
                        <p>{firstDate.getFullYear()}</p>
                        <p>
                            {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
                        </p>
                    </MovieStarInfos>
                    <MovieStarDescription>
                        {item.overview}
                    </MovieStarDescription>
                    <MovieStarButtons>
                        <Button className="_primary" href={`/watch/${item.id}`}>► Assistir</Button>
                        <Button className="_secundary" href={`/list/add/${item.id}`}>+ Minha Lista</Button>
                    </MovieStarButtons>
                    <MovieStarGenres>
                        <strong>Gêneros:</strong> {genres.join(', ')}
                    </MovieStarGenres>
                </MovieStarContent>
            </Overlay>
        </MovieStar>
    )
}