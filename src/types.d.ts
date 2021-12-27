export type Dictionary<T = unknown> = Record<string, T>;

export interface typeaheadDataSource {
  local?: string[] | Dictionary[];
  remote?: {
    url: string;
    wildcard: string;
    requestOptions?: object;
  };
  prefetch?: {
    url: string;
    when?: 'onInit' | 'onFocus';
    done: boolean;
  };
  transform?: (data: string[] | Dictionary[]) => string[] | Dictionary[];
  identifier?: 'label' | string;
  dataTokens?: string[];
  groupIdentifier?: string;
}

export interface typeaheadHtmlTemplates<T extends Dictionary> {
  header?: string;
  footer?: string;
  suggestion?: (item?: T) => string;
  group?: (groupName?: string) => string;
  notFound?: string;
  // pending?: string;
}

export interface typeaheadConfig<T extends Dictionary> {
  input: HTMLInputElement;
  className?: string;
  minLength?: number;
  limit?: number;
  hint?: boolean;
  autoSelect?: boolean;
  highlight?: boolean;
  onSelect?: (item: T, input: HTMLInputElement) => void;
  debounceRemote?: number;
  preventSubmit?: boolean; // Prevents automatic form submit when ENTER is pressed
  source?: typeaheadDataSource;
  templates?: typeaheadHtmlTemplates<T>;
}

export interface typeaheadResult {
  destroy: () => void;
  trie?: unknown;
}
