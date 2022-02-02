import { useQuery } from "react-query";

async function fetchDataEquipement() {
    const result = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/equipment');
    const json = await result.json();
    return json;
}

export function useEquipment() {
    return useQuery(["id"], fetchDataEquipement);
}