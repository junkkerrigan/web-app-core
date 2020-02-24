import {
  createExpressServer,
  useContainer as routingUseContainer
} from 'routing-controllers';
import { useContainer as classValidatorUseContainer } from 'class-validator';
import { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { Container } from 'typedi';
import { useContainer as ormUseContainer } from 'typeorm';
import { routingControllersOptions } from '../config/routing-controllers';

routingUseContainer(Container);
ormUseContainer(Container);
classValidatorUseContainer(Container);

const app: Express = createExpressServer(routingControllersOptions);

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;