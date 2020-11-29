import React, { useEffect, useState } from 'react';
import { Game } from '@bghoard/api-interfaces';

export const currencyFormat
    = (amount: number) => '$' + amount.toFixed(2);
export const ratingFormat
    = (rating: number) => (
        rating === undefined
        ? '?'
        : rating.toFixed(0)
    ) + '/5';

export const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then((r) => r.json())
      .then(setGames);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Board Game Hoard: Review</h1>
        {games.map(game => {
          return (
              <>
                  <a
                    href={'/' + game.id}
                    key={game.id}
                  >
                      <img src={game.image}/>
                      <h2>{game.name}</h2>
                      <p>{ratingFormat(game.rating)}</p>
                      <p>{currencyFormat(game.price)}</p>
                  </a>

              </>
          );
        })}
      </div>
    </>
  );
};

export default App;
