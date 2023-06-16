import { CommandContribution, CommandRegistry, Domain } from '@opensumi/ide-core-common';

@Domain(CommandContribution)
export class TodoContribution implements CommandContribution {
    registerCommands(commands: CommandRegistry): void {
        // throw new Error('Method not implemented.');
    }
}
