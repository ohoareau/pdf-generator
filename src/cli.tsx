import {cli} from '.';

cli()
    .catch(e => {
        console.error(`Error: ${(e as any).message}`);
        console.log(e);
        process.exit(1);
    })
    .then(() => {})
;
