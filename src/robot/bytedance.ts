// import { Socket, connect, createServer } from 'net';

import { request } from 'https';
import { UrlWithStringQuery, parse } from 'url';

const urlByte = 'https://jobs.bytedance.com/referral/pc/position?keywords=%E5%89%8D%E7%AB%AF&category=6704215862603155720&location=CT_11&project=&type=&job_hot_flag=&current=4&limit=10&functionCategory=&tag=&token=MTsxNjc0ODc2NzY3MzQyOzY5MDE0NzcwMjU4NzQxODM2ODc7NzE3NzIzOTg5MDU0NjU5MjA2MA';

const urlByteLimit1000 = 'https://jobs.bytedance.com/referral/pc/position?keywords=%E5%89%8D%E7%AB%AF&category=6704215862603155720&location=CT_11&project=&type=&job_hot_flag=&current=1&limit=1000&functionCategory=&tag=&token=MTsxNjc0ODc2NzY3MzQyOzY5MDE0NzcwMjU4NzQxODM2ODc7NzE3NzIzOTg5MDU0NjU5MjA2MA';

interface IPoster {
    first: any,
    next: any,
    action: Function,
}

// Pick<UrlWithStringQuery, 'hostname' | 'port' | 'path'>
// type Option = UrlWithStringQuery

class BytePoster implements IPoster {
    first: any;
    next: any;
    action!: () => {

    };

    constructor(
        option = parse(urlByte),
    ) {
        console.log(option);
        const client = request(urlByte, {
            port: 443,
            method: 'GET'
        }, (res) => {
            console.log(res);
            debugger;
        });
    }
}

// new BytePoster()
// debugger

function sleep(ms: number) {
    let start = Date.now();
    let end = start + ms;
    while (true) {
        if (Date.now() > end) {
            return;
        }
    }
}

// mock, chrome has it
const $x = (xpath: string): HTMLElement[] => {
    const xpathResult: XPathResult = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    const resultArray: Array<Node> = [];
    const ELEMENT_NODE = 1;

    let node: Node | null = xpathResult.iterateNext();

    while (node && node.nodeType === ELEMENT_NODE) {
        resultArray.push(node);
        node = xpathResult.iterateNext();
    }

    return resultArray as HTMLElement[];
};

// console do it
const nextPage = $x("//li[@class=' atsx-pagination-next']")[0].click();

const items = $x("//a[@rel='noopener']");

for (const item of items) {
    const textContent = item.getElementsByTagName('span')[0].textContent;
    if (textContent && !textContent.toLowerCase().match('leader')) {
        item.click();
        sleep(3000);
    }
}

const postTo = $x("//button[@class='atsx-btn apply-block-applyBtn atsx-btn-primary atsx-btn-lg']")[0].click();

const applyTo = $x("//button[@data-test='applyResumeBtn']")[0].click();