const gameTime = 400;
const blockSize = 30;
const rows = 20;
const cols = 10;
const nRows = 2; 
const nCols = 4; 
const plusScore = 10;


const Blocks = [
    [], // 빈 블록
    [ // 1. ㅡ 모양
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],

    [ // 2. ㄴ 모양
        [2,0,0],
        [2,2,2],
        [0,0,0],
    ],

    [ // 3. 』모양
        [0,0,3],
        [3,3,3],
        [0,0,0],
    ],

    [ // 4. ㅁ 모양
        [4,4],
        [4,4],
    ],

    [ // 5. S 모양
        [0,5,5],
        [5,5,0],
        [0,0,0],
    ],

    [ // 6. ㅗ 모양
        [0,6,0],
        [6,6,6],
        [0,0,0],
    ],

    [ // 7. ㄹ 모양
        [7,7,0],
        [0,7,7],
        [0,0,0],
    ]
]

const colors = [
    'white',
    'red',
    'blue',
    'lime',
    'yellow',
    'orange',
    'purple',
    'fuchsia',
]

