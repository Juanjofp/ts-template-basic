import { deleteMe } from './deleteme';

async function main() {
    console.log('Template Typescript v1.0', deleteMe());
}

main().catch(error => {
    console.error('App failed with', error);
    process.exit(1);
});
