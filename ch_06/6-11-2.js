import fs from 'fs';

//1. run 함수를 만들어 노드의 process dependency를 제거.
run(process.argv);

function run(args) {
    // 2. 사용자에게 입력을 받아 유효성을 검사하는 부분을 쪼갠다.
    const command = parseCommand(args);

    const rawData = fs.readFileSync(fileName);
    const orders = JSON.parse(rawData);
    if (command.countReadyOnly) {
        console.log(orders.filter(order => order.status === 'ready').length);
    } else {
        console.log(orders.length);
    }
}

function parseCommand(args) {
    if (!args.argv[2]) {
        throw new Error('파일 이름을 입력하세요');
    }

    const fileName = `./${args.argv[2]}.json`;
    if (!fs.existsSync(fileName)) {
        throw new Error('파일이 존재하지 않습니다');
    }

    const countReadyOnly = args.includes('-r');

    return { fileName, countReadyOnly };
}
