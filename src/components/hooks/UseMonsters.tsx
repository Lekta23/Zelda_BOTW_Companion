import { useQuery } from "react-query";

async function fetchData() {
    const result = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters');
    const json = await result.json();
    return json;
}

export function useMonsters() {
    return useQuery(["category"], fetchData);
}