import { context } from ".";
import { useState } from "react";
const Provider = ({children}) => {

    // will use a hashtable as an in memory database because 
    // it has space complexity of O(n) - linear space
    // and has a lookup time complexity of O(1) - constant time
    // WITH A BACKEND, WE WOULD USE MONGODB FOR THE DATABASE.

    const [db, setDb] = useState({})
   
    const likeMovie = (movie_id)=> {
        // before adding movie to liked, check if the movie already exists the database
        if(db[movie_id]) {
            console.log('remove movie from database')
            delete db[movie_id]
            setDb(db)
        } else {
            console.log('adding movie to database');
            db[movie_id] = true;
            setDb(db)
        }
    };

    const value = {
        db,
        likeMovie
    };

    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}

export default Provider;