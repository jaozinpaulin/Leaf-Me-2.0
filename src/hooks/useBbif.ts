import { getPlantaeSpecimens } from "@/providers/gbif/GbifProvider";

export function useGbif() {
    return {
        getPlantaeSpecimens,
    };
}