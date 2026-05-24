import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import definitionService from "../services/definition-service";
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

const useDefinitions = (word: string) => {
  const [definition, setDefinition] = useState<Definitions[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = definitionService.getDefinition(word);

    request
      .then((res) => setDefinition(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => cancel();
  }, []);

  return { definition, error };
};

export default useDefinitions;
