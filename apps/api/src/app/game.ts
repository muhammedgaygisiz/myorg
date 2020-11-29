import {Game} from "@bghoard/api-interfaces";

const randomInteger = (
    min: number,
    max: number
) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const randomReviews = (game: string) => {
    return new Array(randomInteger(1, 3))
        .fill({})
        .map(() => ({
            game,
            rating: randomInteger(0, 5),
            content: 'Lorem ipsum dolor sit amet'
        }));
};

export const games: Game[] = [
    {
        id: 'settlers-in-the-can',
        name: 'Settlers in the Can',
        description:
            `Help your bug family claim the 
            best real estate in a spilled can of beans.`,
        price: 35,
        reviews: randomReviews('settlers-in-the-can')
    },
    {
        id: 'chess-pie',
        name: 'Chess Pie',
        image: '/assets/chess.png',
        description:
            `A circular game of Chess that you can eat as you play.`,
        price: 15,
        reviews: randomReviews('chess-pie')
    }
];

export const getGames = () => games;
