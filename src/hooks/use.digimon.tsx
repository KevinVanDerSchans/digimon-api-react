import { useCallback, useEffect, useMemo, useState } from "react";
import { Digimon } from "../models/digimon";
import { ApiRepository } from "../services/api.repository";

export function useDigimon() {
  const query = "?pageSize=20&page=";
  const [digimon, setDigimon] = useState<Digimon[]>([]);

  const [currentPage, setCurrentPage] = useState(0);

  const repo: ApiRepository = useMemo(() => new ApiRepository(), []);

  const handleLoad = useCallback(async () => {
    const loadedDigimon = await repo.getAll(query, currentPage);
    const content = loadedDigimon.content;
    setDigimon(content);
    setCurrentPage;
  }, [currentPage, repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    digimon,
    currentPage,
    setCurrentPage,
    handleLoad,
  };
}
