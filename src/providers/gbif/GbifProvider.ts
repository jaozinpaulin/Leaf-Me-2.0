export async function getPlantaeSpecimens() {
    try {
        const response = await fetch(
            "https://api.gbif.org/v1/occurrence/search?kingdomKey=6&mediaType=StillImage&limit=6"
        )

        if (!response.ok) {
            throw new Error(`GBIF request failed: ${response.status}`);
        }

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("Failed to fetch Plantae specimens:", error);
        throw error;
    };
};

export async function getAnimaliaSpecimens() {
    try {
        const response = await fetch(
            "https://api.gbif.org/v1/occurrence/search?kingdomKey=1&mediaType=StillImage&limit=6"
        );

        if (!response.ok) {
            throw new Error(`GBIF request failed: ${response.status}`);
        };

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("Failed to fetch Animalia specimens:", error);
        throw error;
    };
};

export async function getFungiSpecimens() {

    try {
        const response = await fetch(
            "https://api.gbif.org/v1/occurrence/search?kingdomKey=5&mediaType=StillImage&limit=6"
        );

        if (!response.ok) {
            throw new Error(`GBIF request failed: ${response.status}`);
        }

        const data = await response.json();
        return data.results;

    } catch (error) {
        console.error("Failed to fetch Fungi specimens:", error);
        throw error;
    };
}