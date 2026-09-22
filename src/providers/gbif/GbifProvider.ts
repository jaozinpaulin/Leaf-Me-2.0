export async function getPlantaeSpecimens() {
    const response = await fetch(
        "https://api.gbif.org/v1/occurrence/search?kingdomKey=6&mediaType=StillImage&limit=6"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch GBIF data");
    }

    const data = await response.json();

    return data.results;
}