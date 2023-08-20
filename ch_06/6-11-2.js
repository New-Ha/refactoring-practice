import fs from 'fs';

run(process.argv);

function run(args) {
    const command = parseCommand(args);

    //3. 필요한 로직을 따로 빼서 처리
    countOrders(command);

    //한 줄로 인라인 할수도 있다.
    //countOrders(parseCommand(args))
}

function parseCommand(args) {
    if (!args.argv[2]) {
        throw new Error('파일 이름을 입력하세요');
    }

    const fileName = `./${args.argv[2]}.json`;
    if (!fs.existsSync(fileName)) {
        throw new Error('파일이 존재하지 않습니다');
    }

    // const countReadyOnly = args.includes('-r'); -> return문에 인라인

    return { fileName, countReadyOnly: args.includes('-r') };
}

function countOrders(command) {
    const rawData = fs.readFileSync(command.fileName);
    const orders = JSON.parse(rawData);
    if (command.countReadyOnly) {
        console.log(orders.filter(order => order.status === 'ready').length);
    } else {
        console.log(orders.length);
    }
}
