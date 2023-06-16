import path from 'path';
import fs from 'fs';
import { Autowired, Injectable } from '@opensumi/di';
import { AppConfig  } from '@opensumi/ide-core-browser';
import { ITodoNodeService } from '../common';
import { RPCServiceCenter } from '@opensumi/ide-core-node';


@Injectable()
export class TodoNodeService extends RPCServiceCenter implements ITodoNodeService {
    nodeTodo() {
        throw new Error('Method not implemented.');
    }

    @Autowired(AppConfig)
    private readonly _appConfig: AppConfig;

}

