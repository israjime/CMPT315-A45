import Monsters from "../schemas/monsters.schema.js";

// retrieving monster based on query from database

export const getMonsterFromRepository = async (query) => {
    try {
        const monsters = await Monsters.find(query);
        return monsters;
    } catch (e) {
        throw Error("Error while fetching superheroes");
    }
}


// adding monster to database

export const addMonsterToRepository = async function (entry) {
    try { 
        const newMonster = new Monsters(entry);
        const saveMonster = await newMonster.save();
        return saveMonster
    } catch (e) { 
        throw Error("Error: Unable to add monster"); 
    }
}

// deleting monster by query

export const deleteMonsterFromRepository = async function (query) {
    try { 
        const deleteMonster = await Monsters.findOneAndDelete({...query});
        return deleteMonster
    } catch (e) { 
        throw Error("Error: Unable to delete monster"); 
    }
}

// update monster 

export const updateMonsterFromRepository = async function (query, entry) {
    try { 
        const updateMonster = await Monsters.findOneAndUpdate(
            {...query},
            {...entry},
            {new: true}
        ).lean();
        return updateMonster;
    } catch (e) { 
        throw Error("Error: Unable to add monster"); 
    }
}

