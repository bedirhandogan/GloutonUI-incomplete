import { useContext } from "react";
import { Context } from "services/context/languageSelectProvider";

export const useLanguageSelect = () => useContext(Context);