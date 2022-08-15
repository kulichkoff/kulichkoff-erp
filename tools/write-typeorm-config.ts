import { configService } from '../apps/api/bills-db/src/config/config.service';
import fs = require('fs');


fs.writeFileSync('ormconfig.json',
    JSON.stringify(configService.typeOrmJsonOptions, null, 2),
);
