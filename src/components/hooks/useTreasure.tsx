import { useQuery } from "react-query";

async function fetchDataTreasure() {
    const result = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/teasure');
    const json = await result.json();
    return json;
}

export function useTreasure() {
    return useQuery(["category"], fetchDataTreasure);
}