import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../assets/api-client";

interface Definition {
  definition: string;
}
interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}

export interface Definitions {
  word: string;
  phonetic: string;
  meanings: Meaning[];
}

const useDefinitions = () => {
  const [definition, setDefinition] = useState<Definitions[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Definitions[]>("/keyboad", { signal: controller.signal })
      .then((res) => setDefinition(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { definition, error };
};

export default useDefinitions;
