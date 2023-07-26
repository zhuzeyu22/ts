

export class A {
    private timer: NodeJS.Timeout | undefined;

    constructor() {

    }

    async sleep(delay: number) {
        if (this.timer) {
            clearTimeout(this.timer);
        }

        return await (new Promise((resolve) => {
            this.timer = setTimeout(resolve, delay);
        }));
    }
}

