import path from 'path';
import fs from 'fs';
import { Autowired, Injectable } from '@opensumi/di';
import { AppConfig  } from '@opensumi/ide-core-browser';
import { ITodoService } from '../common';
import { RPCServiceCenter } from '@opensumi/ide-core-node';


@Injectable()
export class TodoService extends RPCServiceCenter implements ITodoService {
    todo() {
        // throw new Error('Method not implemented.');
    }
}

