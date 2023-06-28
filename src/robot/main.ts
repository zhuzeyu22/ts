import puppeteer from 'puppeteer';

export const urlByte = 'https://jobs.bytedance.com/referral/pc/position?keywords=%E5%89%8D%E7%AB%AF&category=6704215862603155720&location=CT_11&project=&type=&job_hot_flag=&current=4&limit=10&functionCategory=&tag=&token=MTsxNjc0ODc2NzY3MzQyOzY5MDE0NzcwMjU4NzQxODM2ODc7NzE3NzIzOTg5MDU0NjU5MjA2MA';

export const urlByteLimit1000 = 'https://jobs.bytedance.com/referral/pc/position?keywords=%E5%89%8D%E7%AB%AF&category=6704215862603155720&location=CT_11&project=&type=&job_hot_flag=&current=1&limit=1000&functionCategory=&tag=&token=MTsxNjc0ODc2NzY3MzQyOzY5MDE0NzcwMjU4NzQxODM2ODc7NzE3NzIzOTg5MDU0NjU5MjA2MA';

// mock, chrome has it
// const $x = (xpath: string): HTMLElement[] => {
//     const xpathResult: XPathResult = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
//     const resultArray: Array<Node> = [];
//     const ELEMENT_NODE = 1;

//     let node: Node | null = xpathResult.iterateNext();

//     while (node && node.nodeType === ELEMENT_NODE) {
//         resultArray.push(node);
//         node = xpathResult.iterateNext();
//     }

//     return resultArray as HTMLElement[];
// };

function sleep(ms: number) {
    let start = Date.now();
    let end = start + ms;
    while (true) {
        if (Date.now() > end) {
            return;
        }
    }
}

// const login = $x("//button/span[contains(text(), '登录')]")

// const lines = $x("//a[@rel='noopener']");

// for (const item of lines) {
//     const textContent = item.getElementsByTagName('span')[0].textContent;
//     if (textContent && !textContent.toLowerCase().match('leader')) {
//         item.click();
//         sleep(3000);
//     }
// }

// const postTo = $x("//button[@class='atsx-btn apply-block-applyBtn atsx-btn-primary atsx-btn-lg']")[0].click();

// const applyTo = $x("//button[@data-test='applyResumeBtn']")[0].click();

async function hehe() {
    // 启动浏览器
    const browser = await puppeteer.launch({
        // userDataDir: '/Users/15fi/Library/Application Support/Google/Chrome',
        userDataDir: '/Users/15fi/Workspace/ts/src/robot/userData',
        headless: false,
        // devtools: true
    });

    // 创建一个新页面
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);

    // 导航到登录页面
    await page.goto(urlByteLimit1000);
    page.on('popup', async (newPage) => {
        newPage.on('dialog', async (dialog) => {
            console.log('对话框信息:', dialog.message());
            await dialog.accept(); // 自动确认对话框
        });

        sleep(3500);
        // await newPage.waitForNavigation()
        console.log('已打开新页面:', newPage.url());
        await Promise.race([
            newPage.waitForXPath("//span[@class='AppliedTag']"),
            newPage.waitForXPath("//button[@class='atsx-btn apply-block-applyBtn atsx-btn-primary atsx-btn-lg']")
        ])
        const post: any = await newPage.$x("//button[@class='atsx-btn apply-block-applyBtn atsx-btn-primary atsx-btn-lg']")
        if (post && post.length > 0) {
            await post[0].click();
            // const applyXpath = "//button[@data-test='applyResumeBtn']//span"
            const applyXpath = "//button[@data-test='applyResumeBtn' and @class='atsx-btn atsx-btn-primary atsx-btn-lg']"
            await newPage.waitForXPath(applyXpath)
            const applyTo: any = await newPage.$x(applyXpath)
            if (applyTo && applyTo.length > 0) {
                await newPage.evaluate((xpath) => {
                    const element: any = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                    if (element) {
                        element.click();
                    }
                }, applyXpath)
                // await applyTo[0].click();
                await Promise.race([newPage.waitForXPath("//div[@class='thanks']"), newPage.waitForXPath("//span[@class='atsx-message-custom-text']")])
            }
        }
        // const pages = await browser.pages();
        newPage.close();
        // const previousPage = pages[pages.length - 2];
        // await previousPage.bringToFront();
    });
    // 等待页面加载完成
    // await page.waitForNavigation();
    sleep(5000)

    const lines: any = await page.$x("//a[@rel='noopener']//span[@class='positionItem-title-text']");

    let i = 0
    for (const item of lines.slice(254)) {
        const textContent = await page.evaluate(el => el.textContent, item);
        if (textContent && !textContent.toLowerCase().match('leader') && !textContent.match('负责人')) {
            await item.click()
            // page.close()
        }
        i++
        console.log(i)
    }

    console.log('end')
    // 关闭浏览器
    //   await browser.close();
}

hehe()


