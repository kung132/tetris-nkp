class Block {
    constructor(block, ctx, nBlock, nCtx) {
        this.block = block;
        this.ctx = ctx;
        this.nBlock = nBlock;
        this.nCtx = nCtx;
        this.y = 0;
        this.x = 3; // 중앙으로 블록 떨어트리기 cols/2시도했으나 정중앙으로 오지못했음
    }

    renderBlock() { // falling 블록 렌더링
        this.block.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) { // 조건 추가 (falling 블록 cell 과 쌓여있는 cell 충돌 시 그리드에 0 값에 의해 블록이 흰색으로 깜빡거림)
                    this.ctx.fillStyle = colors[cell]
                    this.ctx.fillRect(this.x+j, this.y+i, 0.9, 0.9)
                }
            });
        });
    }
    
}