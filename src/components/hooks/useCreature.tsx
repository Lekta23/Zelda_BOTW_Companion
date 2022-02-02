import { useQuery } from "react-query";

async function fetchDataCreature() {
    const result = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures');
    const json = await result.json();
    return json;
}

export function useCreatures() {
    return useQuery(["id"], fetchDataCreature);
}