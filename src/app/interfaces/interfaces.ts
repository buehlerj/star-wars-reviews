import { Gender } from "./enums";

export interface CloneWarsEpisode extends TvEpisode {
	chronologicalOrder: number;
}

export interface TvEpisode {
	id: number;
	name: string;
	season?: number;
	episode?: number;
	link: string;
	releaseOrder: number;
	releaseDate?: Date;
}

export interface Book {
	id: number;
	name: string;
	pros: string;
	cons: string;
	file_url: string;
	amazon_product_id: string;
	google_play_product_id?: string;
	apple_product_id?: string;
	hasCharacterSection?: boolean;
}

export interface TableColumn {
	header: string;
	field: string;
	sort: boolean;
	style?: any;
	classCompare?: string;
	type?: string;
}

export interface Tag {
	id: number;
	name: string;
}

export interface Relationship {
	table1: number;
	table2: number;
}

export interface CharactersInfo {
	label: string;
	characters: Character[];
}

export interface Character {
  name: string,
  gender?: Gender,
  species?: string,
  description?: string,
	photo?: string
	label1?: string;
}