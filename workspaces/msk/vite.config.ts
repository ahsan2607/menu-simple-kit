import { defineConfig } from 'vite';
import { ViteAliases as aliases } from 'vite-aliases';
import { read, utils } from 'xlsx';
import { readFileSync } from 'fs';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-pages';
import yaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/

export default defineConfig({
	server: {
		host: true,
		port: 8000, // This is the port which we will use in docker
	},
	plugins: [
		react(),
		pages(),
		yaml(),
		aliases({
			useTypescript: true,
			useConfig: true,
			useIndexes: true,
		}),
		{
			// this plugin handles ?sheetjs tags
			name: 'vite-sheet',
			transform(_code, id: string) {
				if (!id.match(/\?sheetjs$/)) return;
				const wb = read(readFileSync(id.replace(/\?sheetjs$/, '')));

				const keys = Object.keys(wb.Sheets);
				const data = keys.map((_value, index) =>
					utils.sheet_to_json(wb.Sheets[wb.SheetNames[index]])
				);

				// convert it to object
				const object = { ...data };
				// rename keys
				keys.forEach((value, index) => {
					object[value] = object[index];
					delete object[index];
				});
				return `export default JSON.parse('${JSON.stringify(object)}')`;
			},
		},
	],
});
