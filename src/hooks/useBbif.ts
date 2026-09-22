import { getAnimaliaSpecimens, getFungiSpecimens, getPlantaeSpecimens } from "@/providers/gbif/GbifProvider";

export function useGbif() {
    return {
        getPlantaeSpecimens,
        getAnimaliaSpecimens,
        getFungiSpecimens
    };
}