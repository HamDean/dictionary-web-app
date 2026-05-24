import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import definitionService from "../services/definition-service";
interface Definition {
  definition: string;
  example?: string;
}
export interface Meaning {
  partOfSpeech: string;
  synonyms: string[];
  definitions: Definition[];
}

export interface WordDefinition {
  word: string;
  phonetic: string;
  phonetics: {
    audio: string;
  }[];
  sourceUrls: string[];
  meanings: Meaning[];
}

const useDefinitions = (word: string) => {
  const [definition, setDefinition] = useState<WordDefinition[]>([]);
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
