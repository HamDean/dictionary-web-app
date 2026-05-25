import { AxiosError, CanceledError } from "axios";
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

const useDefinitions = () => {
  const [definition, setDefinition] = useState<WordDefinition[]>([]);
  const [word, setWord] = useState<string>("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = definitionService.getDefinition(word);

    if (word != "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(true);
      request
        .then((res) => {
          setDefinition(res.data);
          setError("");
          setLoading(false);
        })
        .catch((err: AxiosError) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    }

    return () => cancel();
  }, [word, error]);

  return { definition, error, setWord, loading };
};

export default useDefinitions;
