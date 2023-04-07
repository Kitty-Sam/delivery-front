export interface ISearchBar {
    search: string;
    setSearch: (value: string) => void;
    filterHandler: () => void;
}
