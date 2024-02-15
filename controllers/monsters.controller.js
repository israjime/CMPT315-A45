import Monsters from "../schemas/monsters.schema.js";
import { getMonsterFromRepository, deleteMonsterFromRepository, updateMonsterFromRepository, addMonsterToRepository } from "../repositories/monsters.repository.js";

// gets info for a single monster 

export const readMonster = async function (req,res) {
    const {id} = req.params;
    try{
        const monster = await getMonsterFromRepository({_id: id});
        res.status(200).send(monster);
    } catch(e) {
        res.status(500).send(e.message, `Error: Failed to fetch Monster ${id}`);
    }
}

// gets info for multiple monsters

export const readMonsters = async function (req,res) {
    try{
        const monsters = await getMonsterFromRepository({});
        res.status(200).send(monsters);
    } catch(e) {
        res.status(500).send(e.message, 'Error: Failed to delete Monsters');
    }
}

// deletes a single monster by id

export const deleteMonster = async function (req,res) {
    const {id} = req.params;
    try{
        const monster = await deleteMonsterFromRepository({_id:id});
        if (monster){
        // dont need to return anything when deleted
        res.status(204).send(monster);
        }else{
            // this means that the entry was not found in the database
            res.status(404).send(e.message, 'Error: Monster does not exist to delete')
        }
    } catch(e) {
        res.status(500).send(e.message, `Error: Failed to delete Monster ${id}`);
    }
}

// Updates a single monster by id

export const updateMonster = async function (req,res) {
    const {id} = req.params;
    const {body} = req;
    try{
        const monster = await updateMonsterFromRepository({_id: id, body});
        res.status(200).send(monster);
    } catch(e) {
        res.status(500).send(e.message, `Error: Failed to update Monster ${id}`);
    }
}

// adds a new monster to db

export const addMonster = async function (req,res) {
    const {body} = req;
    try{
        const monster = await addMonsterToRepository(body);
        res.status(200).send(monster);
    } catch(e) {
        res.status(500).send(e.message, `Error: Failed to create new Monster`);
    }
}