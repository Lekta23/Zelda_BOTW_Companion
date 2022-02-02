import { useQuery } from "react-query";

async function fetchDataMaterial() {
    const result = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials');
    const json = await result.json();
    return json;
}

export function useMaterial() {
    return useQuery(["description"], fetchDataMaterial);
}