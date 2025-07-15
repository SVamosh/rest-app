
import { nanoid } from 'nanoid';
import boardGame from "./../img/events/board-game.jpeg";
import footballGame from "./../img/events/football-game.jpeg";
import jazzEvent from "./../img/events/jazz-event.jpeg";
import readingClub from "./../img/events/reading-club.jpeg";
import collectorsMeetings from "./../img/events/badge-collectors.jpeg";

const events = [
    {
        id: nanoid(10),
        name: 'Book Club',
        description: 'Every Tuesday and Thursday evening we have book club meetings', 
        img: readingClub,
    },

    {
        id: nanoid(10),
        name: 'Jazz Concerts',
        description: 'Twice a month on Saturdays we have jazz concerts, follow the information about the next concert on our social networks',
        img: jazzEvent,
    },

    {
        id: nanoid(10),
        name: 'Board Games Club',
        description: 'Every Monday and Wednesday evenings we have board game club meetings',
        img: boardGame,
    },

    {
        id: nanoid(10),
        name: 'Football Matches',
        description: 'Every weekend in the evenings you can watch matches of the English football championship. For goals scored by the local club you get a glass of beer as a gift!',
        img: footballGame,
    },

    {
        id: nanoid(10),
        name: 'Collectors meetings',
        description: 'We have badge collectors meetings. Follow the announcements on our social networks.',
        img: collectorsMeetings,
    }
];

export { events };